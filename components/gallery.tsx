import Image from "next/image";

const IMAGES = [
  {
    src: "/images/gallery-1.png",
    alt: "Elegant fine dining table setting",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Professional bartender at an upscale hotel bar",
    span: "",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Luxury banquet event hall setup",
    span: "",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Hospitality staff welcoming guests at a hotel front desk",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-accent/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Our Work
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Excellence in Every Detail
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            A glimpse of the standards, teams, and events we help bring to life
            across the DMV region.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl shadow-sm ${img.span}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
