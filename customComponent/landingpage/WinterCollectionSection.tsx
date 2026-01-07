import { Button } from "@/components/ui/button"
import Image from "next/image"
import SectionWrapper from "../layout/SectionWrapper"

export function WinterCollectionSection() {
  return (
    <SectionWrapper className="bg-primary">
    <section className="flex items-center justify-center  ">
      <div className="py-24  flex w-full max-w-6xl gap-8  md:gap-0">
        {/* Image Section */}
        <div className="hidden w-1/2 overflow-hidden md:block">
          <Image
            src="/images/single-image-2.jpg"
            alt="Classic Winter Collection - Two women in elegant winter clothing"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-12">
          <h1 className="mb-6  text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            <span className="block">CLASSIC WINTER</span>
            <span className="block">COLLECTION</span>
          </h1>

          <p className="mb-8 leading-relaxed text-secondary opacity-80">
            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
            fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc,
            lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed
            facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.
          </p>

          <div>
            <Button variant="secondary" className="">
              Shop Collection
            </Button>
          </div>
        </div>

        {/* Mobile Image - shown only on mobile */}
        <div className="mb-8 block w-full md:hidden">
          <Image
            src="/images/single-image-2.jpg"
            alt="Classic Winter Collection - Two women in elegant winter clothing"
            width={600}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}
