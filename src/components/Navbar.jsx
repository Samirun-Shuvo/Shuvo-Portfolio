"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import mylogo from "../../public/images/mylogo.png";
import { useRouter } from "next/navigation";

const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
  // {
  //   title: "Dashboard",
  //   path: "dashboard",
  // },
  // {
  //   title: "Admin_login",
  //   path: "login",
  // },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Only access localStorage on the client side
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear the token from wherever it's stored (e.g., localStorage)
    localStorage.removeItem("token");
    // Redirect to home or login page as needed
    router.push("/");
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src={mylogo} alt="Logo of Me" width={300} />
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
            {token ? (
              <>
                <li>
                  <NavLink href="/dashboard" title="Dashboard" />
                </li>
                <li>
                  {/* Attach the logout handler */}
                  <NavLink
                    className="text-white"
                    href="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink href="/login" title="Admin-Login" />
              </li>
            )}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
