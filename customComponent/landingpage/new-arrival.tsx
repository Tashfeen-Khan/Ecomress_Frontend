import Image from "next/image"
import SectionWrapper from "../layout/SectionWrapper"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Dark Florish Onepiece",
    price: 95.0,
    image: "/images/image1.jpg",
  },
  {
    id: "2",
    name: "Baggy Shirt",
    price: 55.0,
    image: "/images/image2.jpg",
  },
  {
    id: "3",
    name: "Cotton Off-White Shirt",
    price: 65.0,
    image: "/images/image3.jpg",
  },
  {
    id: "4",
    name: "Crop Sweater",
    price: 50.0,
    image: "/images/image4.jpg",
  },
]

export default function NewArrivals() {
  return (
    <SectionWrapper className="">
    <section className="">    
        <div className="  flex justify-between items-center mb-4">
          <h2 className="text-3xl font-serif text-foreground">OUR NEW ARRIVALS</h2>
          <a
            href="/products"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            VIEW ALL PRODUCTS
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-md font-medium text-secondary">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      
    </section>
    </SectionWrapper>
  )
}
