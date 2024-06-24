"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';

const navLinks = [
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [theme, setTheme] = useState('light');

  // const handleToggle = e => {
  //   if (e.target.checked) {
  //     setTheme('synthwave');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  // useEffect(() => {
  //   const localTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(localTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   document.querySelector('html').setAttribute('data-theme', theme);
  // }, [theme]);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-0 flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <div>
            <Image
              src="https://i.ibb.co/tMCS8qx/logo-2.png" // Path to your image
              alt="Description of image"
              width={100} // Set the width of the image
              height={50} // Set the height of the image
            />
          </div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
