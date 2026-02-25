"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] bg-black overflow-hidden group">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
        preload="metadata"
        playsInline
        autoPlay
        muted
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/images/home/slides/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause button (Visible on hover) */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent/90 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110">
          {isPlaying ? (
            <Pause className="h-6 w-6 sm:h-8 sm:w-8" />
          ) : (
            <Play className="h-6 w-6 sm:h-8 sm:w-8 ml-1 sm:ml-2" />
          )}
        </div>
      </button>
    </section>
  );
}
