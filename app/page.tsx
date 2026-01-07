import { Button } from "@/components/ui/button";
import CarouselComponent from "@/customComponent/carousel";
import { BrandLogos } from "@/customComponent/landingpage/brand-production";
import HeroSection from "@/customComponent/landingpage/hero-section";
import NewArrivals from "@/customComponent/landingpage/new-arrival";
import { NewsletterSignup } from "@/customComponent/landingpage/news-letter";
import Services from "@/customComponent/landingpage/services";
import { Titlevideo } from "@/customComponent/landingpage/title-video";
import { WinterCollectionSection } from "@/customComponent/landingpage/WinterCollectionSection";
// import WinterCollectionSection from "@/customComponent/landingpage/WinterCollectionSection";
import Navbar from "@/customComponent/navbar";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <div>
    <Navbar/>
    <HeroSection/>
    <NewArrivals/>
    <Services/>
    <NewArrivals/>
    <WinterCollectionSection/>
    <NewArrivals/>
    <Titlevideo/>
    <BrandLogos/>
    <NewsletterSignup/>
  </div>
  
  </>
  );
}
