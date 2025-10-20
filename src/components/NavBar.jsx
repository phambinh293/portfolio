import { useState, useEffect, useRef } from "react";
import HambergerIcon from "./HambergerIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navItems } from "../contants";

const NavBar = ({ isOpen, setIsOpen }) => {
  const [mounted, setMounted] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSideBar = () => setIsOpen(!isOpen);

  useGSAP(() => {
    if (!mounted) return;
    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(".side-bar-bg", {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      tl.to(
        ".side-bar-item",
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      tl.to(".side-bar-item", {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power1.inOut",
      });
      tl.to(".side-bar-bg", {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen, mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when sidebar open
  useEffect(() => {
    const target = document.querySelector("#app-container");
    if (!target) return;

    if (isOpen) {
      target.style.overflow = "hidden";
    } else {
      target.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="block">
      <div className="fixed top-6 right-6 z-[9999]" onClick={toggleSideBar}>
        <HambergerIcon active={isOpen} />
      </div>

      <div
        ref={sidebarRef}
        className="fixed z-[1000] translate-x-full w-screen h-dvh bg-[#0c0c0c]/95 side-bar-bg"
      >
        <div className="flex justify-end m-5" onClick={toggleSideBar}></div>
        <div className="h-full flex items-center px-10">
          <div className="flex flex-col gap-6 items-start justify-center w-full lg:ml-80">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="side-bar-item opacity-0 translate-y-5  transition-all duration-700"
              >
                <a
                  className="gradient-title md:text-6xl text-2xl font-bold text-white uppercase cursor-none"
                  href={item.href}
                  onClick={toggleSideBar}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
