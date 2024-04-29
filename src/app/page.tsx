import BentoBox from "@/components/BentoBox";
import BoostPresence from "@/components/BoostPresence";
import ContactForm from "@/components/ContactForm";
import Credentials from "@/components/Credentials";
import HeroSection from "@/components/HeroSection";
import OurTeam from "@/components/OurTeam";
import Recomendation from "@/components/Recomendation";
import UnderHeroSection from "@/components/UnderHeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between ">
      <HeroSection />
      <div className=" w-full  bg-gray-100">
        <UnderHeroSection />
      </div>
      <BoostPresence />
      <div className=" w-full  bg-gray-100">
        <BentoBox />
      </div>
      <Recomendation />
      <div className="bg-gray-100 w-full">
        <Credentials />
      </div>

      <ContactForm />
    </main>
  );
}
