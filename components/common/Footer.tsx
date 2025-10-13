"use client";

import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{ fontFamily: "Open Sans, sans-serif" }}
      className="bg-white text-gray-700 pt-4"
    >
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Logo & Description */}
        <div className="flex items-center space-x-2">
          <Image
            width={480}
            height={480}
            src="/logo.png"
            alt="Iris Academy Logo"
            className="h-24 w-24"
          />
          <div>
            <p className="text-sm font-semibold">Iris Academy</p>
            <div className="flex flex-col mt-1 space-y-0.5">
              <p className="text-xs">
                <a
                  href="mailto:info@irisacademy.edu.np"
                  className="hover:underline"
                >
                  info@irisacademy.edu.np
                </a>
              </p>
              <p className="text-xs">9857025527</p>
              <p className="text-xs">
                Bardaghat-2, Nawalparasi Susta Paschim, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-sm hover:underline hover:text-primary">
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-sm hover:underline hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-sm hover:underline hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:underline hover:text-primary"
          >
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-2">
          <a
            className="hover:text-primary"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            className="hover:text-primary"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>

      {/* Copyright + Powered By */}
      <div className="text-xs text-white p-2 mt-2 bg-[#2D2C4C] text-center flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
        <p className="text-white">Copyright 2025. All Rights Reserved</p>
        <span>|</span>
        <div className="flex items-center justify-center gap-1">
          <span className="text-white"> Powered by</span>
          <a
            href="https://techgaun.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80"
          >
            <Image
              src="/techgaun-logo-small.png"
              alt="Techgaun Nepal Logo"
              width={16}
              height={16}
              className="ml-1"
            />
            <span className="ml-1 text-white font-semibold">
              Techgaun Nepal
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
