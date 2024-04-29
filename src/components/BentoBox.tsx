"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BentoBox() {
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
      className="flex justify-center py-10"
      id="innovation"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl items-center">
        <motion.div className="p-10" custom={0} variants={itemVariants}>
          <Image
            alt="Placeholder"
            className="w-full h-auto"
            height={300}
            src="/quality.png"
            width={300}
            priority
          />
        </motion.div>
        <motion.div
          className="space-y-6 p-10"
          custom={1}
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4"
            custom={2}
            variants={itemVariants}
          >
            Innovative Solutions for You
          </motion.h2>
          <motion.p custom={3} variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue.
          </motion.p>
          <motion.h2
            className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4"
            custom={4}
            variants={itemVariants}
          >
            Unmatched Quality Assurance
          </motion.h2>
          <motion.p custom={5} variants={itemVariants}>
            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </motion.p>
          <motion.h2
            className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4"
            custom={6}
            variants={itemVariants}
          >
            Exceptional Customer Support
          </motion.h2>
          <motion.p custom={7} variants={itemVariants}>
            Donec ullamcorper nulla non metus auctor fringilla. Nullam quis
            risus eget urna mollis ornare vel eu leo.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
