import { Calendar, ShoppingBag, Gift, RotateCcw } from "lucide-react"
import Image from "next/image"
import SectionWrapper from "../layout/SectionWrapper"

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Book An Appointment",
      description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      icon: ShoppingBag,
      title: "Pick Up In Store",
      description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      icon: Gift,
      title: "Special Packaging",
      description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
    {
      icon: RotateCcw,
      title: "Free Global Returns",
      description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
    },
  ]
  interface Product {
  id: string
  name: string
  image: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Dark Florish Onepiece",
    
    image: "/images/image1.jpg",
  },
  {
    id: "2",
    name: "Baggy Shirt",
    
    image: "/images/image2.jpg",
  },
  {
    id: "3",
    name: "Cotton Off-White Shirt",
    
    image: "/images/image3.jpg",
  }
]
  return (
    <SectionWrapper className="bg-primary">
    <section className="">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium  mb-2 text-secondary">{service.title}</h3>
                <p className="text-md font-extralight opacity-70 text-secondary leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      
      <div className=" grid sm:grid-cols-3 gap-4 pt-24">
 {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative h-64 mb-4 overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-md font-bold text-secondary uppercase tracking-wide mb-2">{product.name}</h3>
              
            </div>
          ))}
      </div>
    </section>
  </SectionWrapper>
  )
}
