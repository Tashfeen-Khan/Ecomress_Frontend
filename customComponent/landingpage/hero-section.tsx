"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [scrollIndicator, setScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicator(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col"
  style={{
    backgroundImage: "url('/images/image4.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Navigation Bar */}
   

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Decorative Top Text */}
        <div className=" text-center">
          <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase ">New Arrivals</p>
        </div>

        {/* Main Heading with Subtle Animation */}
        <div className="text-center max-w-4xl mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-tight text-balance mb-6">
            New
            <span className=" ">Collection</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl text-center leading-relaxed mb-12">
          Curated pieces that blend minimalist design with timeless elegance. Discover the art of refined fashion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="#"
            className="px-8 py-4 bg-foreground text-background text-sm tracking-wider font-medium hover:opacity-80 transition"
          >
            EXPLORE COLLECTION
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border border-foreground/30 text-foreground text-sm tracking-wider hover:border-foreground transition"
          >
            LEARN MORE
          </Link>
        </div>

      </div>

      {/* Decorative Elements - Subtle Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-foreground/10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-foreground/5"></div>
      </div>
    </section>
  )
}
