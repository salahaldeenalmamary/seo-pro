import React from "react";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

export default function NavbarMobile({ navData }) {
  return (
    <nav className="bg-primary text-white py-4 px-6">
     
      <ul className="mt-4">
        {navData.map((item) => (
          <li key={item.name} className="mb-2">
            {item.submenu ? (
              <NavLinks item={item} />
            ) : (
              <a
                href={item.href}
                className="hover:text-gray-400 hover:underline"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
