import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUS";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyBM from "@/components/WhyBM";

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
      <div className="bg-white w-full">
        <ContactUs />
      </div>
      <div className=" bg-[#FFCC75] w-full flex justify-center items-center">
        <GetInTouch />
      </div>
    </main>
  );
}
