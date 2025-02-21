import HeroSection from "@/components/HeroSection";
import Banners from "@/components/Banners";
import Banner from "@/components/Banner";
import Portfolio from "@/components/Portfolio";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import HomeBanner from "@/components/HomeBanner";
import Product from "@/components/Product";
import Awards from "@/components/Awards";
import Skill from "@/components/Skill";
import About from "@/components/About";
import Doing from "@/components/Doing";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <About />
      <Awards />
      <Portfolio />  
      <Skill />    
      <Contact />

      {/* <About /> */}


      {/* <Doing /> */}
      {/* <Banner /> */}      
      {/* <Menu /> */}
      
      {/* <HeroSection /> */}
      {/* <Magnetic /> */}
      {/* <Product /> */}

      {/* <Banners /> */}
    </>
  );
}
