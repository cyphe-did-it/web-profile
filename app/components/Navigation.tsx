"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use for App Directory

const Navigation = () => {
  const pathname = usePathname(); // Get the current route
  const [activeSection, setActiveSection] = useState("");

  const navItems = React.useMemo( () => [
    { id: "about", label: "About Me", path: "/" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "resume", label: "Resume", path: "/resume" },
    ],
    []
  );

  useEffect(() => {
    const currentNav = navItems.find((item) => item.path === pathname);
    if (currentNav) {
      setActiveSection(currentNav.id);
    }
  }, [pathname, navItems]); // Re-run the effect whenever the route changes

  return (
    <div className="grid place-items-end pt-4 ">
      <nav>
        <div className="flex justify-end items-center">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`px-4 m-1  text-[1.2rem] transition ${
                activeSection === item.id
                  ? "text-white bg-teal-600 border-b-2 border-teal-700"
                  : "hover:bg-orange-600 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
