"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/aceternity/NavbarMenu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import MobileNav from "./MobileNav";
import {
  Fullscreen,
  Home,
  Laptop2,
  Mail,
  NotebookText,
  User,
} from "lucide-react";
import FullScreenToggle from "./FullScreenToggle";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navigationbar />
    </div>
  );
}

function Navigationbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav className="z-[50] fixed top-0 w-full h-20 border-b backdrop-blur-md md:bg-white/[0.6] md:dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
      <div
        className={cn(
          "fixed inset-x-0 max-w-6xl max-xl:px-10 mx-auto pt-1 z-50",
          className
        )}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="font-bold text-4xl max-md:py-4 text-black-100 dark:text-white">
              Aryan.
            </h1>
          </Link>

          <div className="hidden md:flex">
            <Menu setActive={setActive}>
              <Link href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                  img={<Home size={18} />}
                ></MenuItem>
              </Link>

              <Link href="/about">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="About"
                  img={<User size={18} />}
                ></MenuItem>
              </Link>

              <Link href="/projects">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Projects"
                  img={<Laptop2 size={18} />}
                >
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Uniport"
                      href="https://uniport.vercel.app"
                      src="https://github.com/iAryanK/Uniport/raw/main/public/screenshots/landing.png?raw=true"
                      description="An AI park where one can use various types of AI tools at a single place"
                    />
                    <ProductItem
                      title="DevForces"
                      href="https://devforces.tech"
                      src="https://github.com/iAryanK/DevOverflow/raw/main/app/opengraph-image.png?raw=true"
                      description="A community driven platform similar to stack overflow"
                    />
                    <ProductItem
                      title="CSE-Insights"
                      href="https://gomoonbeam.com"
                      src="https://github.com/iAryanK/CSE-Insights/raw/main/public/assets/images/screenshot.png?raw=true"
                      description="A NextJS 14 app with a comprehensive CRUD post sharing system"
                    />
                    <ProductItem
                      title="WhatsFlow"
                      href="https://userogue.com"
                      src="https://github.com/iAryanK/WhatsFlow/raw/main/screenshots/ui_light.png?raw=true"
                      description="A desktop application that sends bulk messages on whatsapp"
                    />
                  </div>
                </MenuItem>
              </Link>

              <Link href="#contact">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact"
                  img={<Mail size={18} />}
                >
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="https://www.linkedin.com/in/iaryan/">
                      LinkedIn
                    </HoveredLink>
                    <HoveredLink href="https://github.com/iAryanK">
                      Github
                    </HoveredLink>
                    <HoveredLink href="https://twitter.com/i_AryanK">
                      Twitter
                    </HoveredLink>
                    <div className="w-full h-[1px] bg-slate-500"></div>
                    <HoveredLink href="#contact">Contact Now</HoveredLink>
                  </div>
                </MenuItem>
              </Link>

              <Link href="/blogs">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Blogs"
                  img={<NotebookText size={18} />}
                ></MenuItem>
              </Link>
            </Menu>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <FullScreenToggle />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
