import SectionWrapper from "../layout/SectionWrapper"

export function BrandLogos() {
  const brands = [
    { name: "Lavender Agency", id: 1 },
    { name: "Vin-Tage", id: 2 },
    { name: "Violet", id: 3 },
    { name: "Ceathes", id: 4 },
    { name: "Creater Fav", id: 5 },
  ]

  return (
    <SectionWrapper>
    <section className="py-12">
      <div className="">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {/* Lavender Agency */}
          <div className="flex flex-col items-center  gap-1">
            <div className="text-gray-400 text-xs font-light tracking-widest">LAVENDER</div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-6 bg-gray-400"></div>
              <div className="text-gray-400 text-xs font-light tracking-widest">AGENCY</div>
            </div>
          </div>

          {/* Vin-Tage */}
          <div className="flex items-baseline gap-1">
            <span className="text-gray-400 text-xl font-light">VIN-</span>
            <span className="text-white text-xl font-semibold bg-gray-400 px-2 py-0.5">TAGE</span>
          </div>

          {/* Violet */}
          <div className="text-gray-400 text-xl font-light tracking-wide">VIOLET</div>

          {/* Ceathes */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-px bg-gray-400"></div>
            <div className="text-gray-400 text-sm font-light tracking-widest">CEATHES</div>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>

          {/* Creater Fav */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">&</span>
            </div>
            <div className="text-gray-400 text-sm font-light">Creater Fav</div>
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  )
}
