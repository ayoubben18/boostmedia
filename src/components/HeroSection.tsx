"use client";
import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/utils/SmothScrollLink";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="w-full container px-8 min-h-[calc(100vh-64px)] py-10 lg:py-0 grid grid-cols-1 text-center lg:grid-cols-2 lg:text-start items-center gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <span className="text-sm text-slate-400">
          BoostMedia - Elevate Your Brand's Presence with BoostMedia.
        </span>
        <h3 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-semibold mt-2">
          Elevate Your Brand's Presence with BoostMedia.
        </h3>
        <p className="text-base md:text-lg text-slate-500 my-4 md:my-6">
          Transform Your Social Media With Expert Strategies Tailored for
          Moroccan Markets, Unleash the Power of Engagement and Grow Your
          Business.
        </p>

        <div className=" flex gap-2 justify-center lg:justify-start">
          <SmoothScrollLink href="#contact" className="btn  btn-secondary ">
            Get Started
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#services"
            className="btn btn-outline btn-secondary"
          >
            Discover services
          </SmoothScrollLink>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className=" justify-self-center">
        <Image
          src={"/asset1.jpg"}
          width={600}
          height={600}
          alt="asset"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
