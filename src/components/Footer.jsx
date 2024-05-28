import React from "react";
import mylogo from "../../public/images/mylogo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 bg-[#121212] border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between mx-auto">
        <div className="text-2xl md:text-5xl text-white font-semibold">
          <Image src={mylogo} alt="Logo of Me" width={200} />
        </div>
        <p className="text-slate-600">
          All rights reserved &copy; <br /> samirunshuvo@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
