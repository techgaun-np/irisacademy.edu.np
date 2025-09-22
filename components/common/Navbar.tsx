"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-yellow-500 font-semibold"
      : "hover:text-yellow-400";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/calendar", label: "Calendar" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full shadow-md">
      {/* Top strip */}
      <div className="bg-[#1c1b35] text-white text-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Contact info */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +977 9841234567 | 078-580453
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> info@irisacademy.edu.np
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="#" target="_blank">
              <FacebookIcon size={20} className="hover:text-yellow-500" />
            </Link>
            <Link href="#" target="_blank">
              <InstagramIcon size={18} className="hover:text-yellow-500" />
            </Link>
            <Link href="#" target="_blank">
              <YoutubeIcon size={20} className="hover:text-yellow-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="w-14 h-14"
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex gap-6 uppercase text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(isActive(link.href))}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer
              direction="right"
              open={drawerOpen}
              onOpenChange={setDrawerOpen}
            >
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6 text-black" />
                </Button>
              </DrawerTrigger>
              <DialogTitle className="sr-only"></DialogTitle>

              <DrawerContent className="p-6 bg-white text-black">
                <div className="flex justify-end mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(isActive(link.href))}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </header>
  );
}
