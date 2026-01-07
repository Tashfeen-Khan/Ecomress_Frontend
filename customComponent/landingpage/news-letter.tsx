"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import type React from "react"

import { useState } from "react"
import SectionWrapper from "../layout/SectionWrapper"
    interface Product {
  id: string
  image: string
}
const products: Product[] = [
  {
    id: "1",
    image: "/images/image1.jpg",
  },
  {
    id: "2",
    image: "/images/image2.jpg",
  },
  {
    id: "3",
    image: "/images/image3.jpg",
  },
   {
    id: "4",
    image: "/images/image1.jpg",
  },
  {
    id: "5",
    image: "/images/image2.jpg",
  },
  {
    id: "6",
    image: "/images/image3.jpg",
  }
]
export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (

    <SectionWrapper className="bg-primary">
    <section className="">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  text-secondary mb-8 ">
          SIGN UP FOR OUR NEWSLETTER
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-4 bg-white text-foreground border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            type="submit"
            variant="secondary"
            className=" cursor-pointer"
          >
            {isSubmitted ? "THANK YOU!" : "SIGN UP"}
          </Button>
        </form>
      </div>
   <div
  className="
    relative 
    grid 
    grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-6 
    w-full 
    mt-20
    gap-6
    pb-12
  "
>
  {products.map((product) => (
    <div key={product.id} className="group cursor-pointer">
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt="product"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  ))}

  {/* Bottom Center Button */}
  <div className="absolute  bottom-8 left-0 w-full flex justify-center z-10">
    <Button variant="secondary" className="cursor-pointer border-none">
      Follow us on Instagram
    </Button>
  </div>
</div>



    </section>
    </SectionWrapper>
  )
}
