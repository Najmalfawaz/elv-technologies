"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full aspect-video md:h-[100dvh] md:aspect-auto bg-black overflow-hidden group">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
        preload="metadata"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/images/home/slides/videos/hero_new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
