'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { introSectionData } from "@/lib/data";

export default function IntroSection() {
    const [isPlaying, setIsPlaying] = useState(true); // Optimistically set to true for autoplay
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Sync React state with the video's actual state
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        // Check initial state in case autoplay was blocked
        if (video.paused) {
            setIsPlaying(false);
        }

        // Cleanup listeners on unmount
        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <section className="relative py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            {introSectionData.heading}
                        </h2>
                        <div className="mt-4 h-1.5 w-20 bg-accent rounded-full" />
                        {introSectionData.paragraphs.map((paragraph, index) => (
                            <p key={index} className={`mt-${index === 0 ? '6' : '4'} text-lg text-muted-foreground`}>
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    {/* Right Column: Video Thumbnail */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video"
                    >
                        <video
                            ref={videoRef}
                            src={introSectionData.video.thumbnail}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        
                        {/* Play/Pause button */}
                        <button
                            type="button"
                            onClick={togglePlay}
                            className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-[#ffffff] shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/40">
                                {isPlaying ? (
                                    <Pause className="h-7 w-7" />
                                ) : (
                                    <Play className="h-7 w-7 ml-1" />
                                )}
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
