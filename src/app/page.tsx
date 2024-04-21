import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUS";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyBM from "@/components/WhyBM";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <div className=" bg-[#FFCC75] w-full flex justify-center items-center">
        <AboutUs />
      </div>
      <div className="w-full">
        <Services />
      </div>
      <WhyBM />
      <div className="bg-orange-50 w-full">
        <ContactUs />
      </div>
    </main>
  );
}
