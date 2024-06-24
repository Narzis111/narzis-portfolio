import Link from "next/link";
import Image from 'next/image';
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div><Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
       <div className="">
       <Image
      src="https://i.ibb.co/tMCS8qx/logo-2.png" // Path to your image
      alt="Description of image"
      width={100} // Set the width of the image
      height={5} // Set the height of the image
    /></div>  
   
   
        </Link></div>
        <div className="text-slate-600 items-center">All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
