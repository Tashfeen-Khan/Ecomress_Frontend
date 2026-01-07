"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function Titlevideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Use setTimeout to ensure video element is mounted
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Video play failed:", error);
          setIsPlaying(false); // Fallback to image if play fails
        });
      }
    }, 100);
  };

  return (
    <section className="flex items-center justify-center  from-slate-600 to-slate-700">
      <div className="relative w-full">
        <div className="relative overflow-hidden bg-slate-600">
          {/* Vertical stripes */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="flex h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex-1 border-r border-slate-700" />
              ))}
            </div>
          </div>

          <div className="relative aspect-video">
            {/* IMAGE - Show only when video is not playing */}
            {!isPlaying && (
              <Image
                src="/images/image4.jpg"
                alt="Classic Winter 2025 Collection Video"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            )}

            {/* VIDEO - Always render but control visibility */}
            <div className={`absolute inset-0 ${isPlaying ? 'block' : 'hidden'}`}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                controls
                loop
                onError={() => {
                  console.error("Video failed to load");
                  setIsPlaying(false);
                }}
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* PLAY BUTTON */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center z-10"
                aria-label="Play video"
              >
                <div className="relative h-32 w-32">
                  {/* Circular text */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text
                      className="text-xs tracking-wider"
                      fill="white"
                      opacity="0.8"
                    >
                      <textPath href="#circlePath">
                        CLASSIC WINTER 2025 COLLECTION
                      </textPath>
                    </text>
                  </svg>

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-4 hover:bg-white transition">
                      <Play className="h-8 w-8 fill-slate-700 text-slate-700" />
                    </div>
                  </div>
                </div>
              </button>
            )}

            {/* Overlay - Only show when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}