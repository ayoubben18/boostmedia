"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Credentials() {
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
      className="max-w-4xl mx-auto py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4 text-center md:text-start"
        variants={itemVariants}
        custom={0}
      >
        Contact BoostMedia
      </motion.h1>
      <motion.p
        className="text-lg mb-12 text-center md:text-start"
        variants={itemVariants}
        custom={1}
      >
        Get in touch with us to learn more about our services.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <motion.div
            className="flex items-start space-x-4 mb-6"
            variants={itemVariants}
            custom={2}
          >
            <MailboxIcon className="h-6 w-6 text-gray-700" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-600">Send us an email today!</p>
              <Link
                className="text-gray-500"
                href="mailto:boostmedia1.ma@gmail.com"
              >
                contact@boostmedia1.ma
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4 mb-6"
            variants={itemVariants}
            custom={3}
          >
            <PhoneIcon className="h-6 w-6 text-gray-700" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-gray-600">Give us a call now!</p>
              <Link className="text-gray-500" href="tel:0625950284">
                +212 669-564558
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4"
            variants={itemVariants}
            custom={4}
          >
            <LocateIcon className="h-6 w-6 text-gray-700" />
            <div>
              <h2 className="text-xl font-semibold">Office</h2>
              <p className="text-gray-600">Fes, Morocco</p>
              <Link className="text-gray-500" href="#">
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="h-full w-full object-cover"
          variants={itemVariants}
          custom={5}
        >
          <Image
            alt="Map placeholder"
            height="300"
            src="/contact.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
