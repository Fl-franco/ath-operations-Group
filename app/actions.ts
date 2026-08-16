'use server'

import { put } from '@vercel/blob'
import { sql } from '@/lib/db'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const MAX_RESUME_BYTES = 8 * 1024 * 1024 // 8MB
const ALLOWED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  try {
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const interest = String(formData.get('interest') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const resume = formData.get('resume')

    if (!name || name.length > 200) {
      return { status: 'error', message: 'Please enter your full name.' }
    }
    if (!email || !isValidEmail(email)) {
      return { status: 'error', message: 'Please enter a valid email address.' }
    }
    if (message.length > 5000 || phone.length > 50 || interest.length > 100) {
      return { status: 'error', message: 'One of your fields is too long.' }
    }

    let resumeUrl: string | null = null
    let resumeFilename: string | null = null

    if (resume instanceof File && resume.size > 0) {
      if (resume.size > MAX_RESUME_BYTES) {
        return { status: 'error', message: 'Resume must be smaller than 8MB.' }
      }
      if (resume.type && !ALLOWED_RESUME_TYPES.includes(resume.type)) {
        return {
          status: 'error',
          message: 'Resume must be a PDF or Word document.',
        }
      }
      const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120)
      const blob = await put(`resumes/${Date.now()}-${safeName}`, resume, {
        access: 'public',
        addRandomSuffix: true,
      })
      resumeUrl = blob.url
      resumeFilename = resume.name
    }

    await sql`
      insert into contact_submissions
        (name, email, phone, interest, message, resume_url, resume_filename)
      values
        (${name}, ${email}, ${phone || null}, ${interest || null}, ${message || null}, ${resumeUrl}, ${resumeFilename})
    `

    return {
      status: 'success',
      message: 'Thank you. Our team will be in touch with you shortly.',
    }
  } catch (error) {
    console.log('[v0] submitContact error:', error)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or email us directly.',
    }
  }
}
