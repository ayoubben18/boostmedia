"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky bg-white py-4 shadow-sm top-0 py-4 justify-between bg-white z-50 transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={60}
              height={60}
              priority
              alt="logo"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-gray-600 hover:text-gray-900" href="#about">
              About Us
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#team">
              Our Team
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900"
              href="#innovation"
            >
              Solutions
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Link href={"#form"}>Contact Us</Link>
          </Button>
          <Button>
            <Link href={"#services"}>Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
