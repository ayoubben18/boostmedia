"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto my-8 p-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="space-y-6 text-center md:text-start"
          custom={0} // delay index
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl font-bold leading-tight"
            custom={1}
            variants={itemVariants}
          >
            Boost Your Business with BoostMedia's Expertise
          </motion.h1>
          <motion.p className="text-lg" custom={2} variants={itemVariants}>
            We specialize in helping businesses grow through strategic digital
            marketing solutions. Our team of experts will create tailored
            strategies to boost your online presence and drive results.
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
            custom={3}
            variants={itemVariants}
          >
            <Button>
              <Link href={"#services"}>Learn More</Link>
            </Button>
            <Button variant="outline">
              <Link href={"#form"}>Sign Up</Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center rounded-lg"
          custom={4}
          variants={itemVariants}
        >
          <Image
            alt="Placeholder"
            className="max-h-96 max-w-full"
            height="300"
            src="/bloggin.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
