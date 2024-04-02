import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li>
        <NavLink href="/dashboard" title="Dashboard" />
      </li>
      <li>
        <NavLink href="/login" title="Admin-Login" />
      </li>
    </ul>
  );
};

export default MenuOverlay;
