"use client";

import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{ fontFamily: "Open Sans, sans-serif" }}
      className="bg-white text-gray-700 pt-4"
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* Logo & Description */}
        <div className="flex items-center space-x-2">
          <Image
            width={48}
            height={48}
            src="/logo.png"
            alt="Iris Academy Logo"
            className="h-12 w-12"
          />
          <div>
            <p className="text-sm font-semibold">Iris Academy</p>
            <p className="text-xs">
              <a
                href="mailto:info@irisacademy.edu.np"
                className="hover:underline"
              >
                info@irisacademy.edu.np
              </a>
            </p>
            <p className="text-xs">078-580453</p>
            <p className="text-xs">
              Bardaghat-2, Nawalparasi Susta Paschim, Nepal
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-4">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/gallery" className="text-sm hover:underline">
            Gallery
          </Link>
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={16} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xs text-white p-2 mt-2 bg-[#2D2C4C] text-center">
        <p>Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
