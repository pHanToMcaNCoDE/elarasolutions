"use client";

import white from "../../public/Elara-white.svg";
import logo from "../images/logo.svg";
import DropMenu from "./DropMenu";
import Menu from "./Menu";
import { links } from "@/raw-data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  const dropMenuRef = useRef(null);

  const pathname = usePathname();

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setMenu(false);
        setSelectedLink("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <nav
      ref={navbarRef}
      className={
        pathname === "/" || pathname === '/core-banking' || pathname === '/retail-banking' || pathname === '/corporate-banking' || pathname === '/agency-banking' || pathname === '/lending-services' || pathname === '/loan-engine' || pathname === '/lifestyle-services' || pathname === '/ticketing-services' || pathname === '/application-development-service' || pathname === '/cloud-computing'
          ? `bg-black/[10%] z-50 absolute top-0 py-[20px] xl:py-[24px] px-[24px] xl:px-[100px] flex justify-between items-center h-[96px] w-full border-b border-b-blueFive`
          : `bg-white z-50 absolute top-0 py-[20px] xl:py-[24px] px-[24px] xl:px-[100px] flex justify-between items-center h-[96px] w-full border-0`
      }
    >
      {pathname === "/" || pathname === '/core-banking' || pathname === '/retail-banking' || pathname === '/corporate-banking' || pathname === '/agency-banking' || pathname === '/lending-services' || pathname === '/loan-engine' || pathname === '/lifestyle-services' || pathname === '/ticketing-services' || pathname === '/application-development-service' || pathname === '/cloud-computing' ? (
        <Link href={`/`}>
          <Image
            width={200.87}
            height={23.51}
            className="object-cover"
            src={white}
            alt="Elara Solutions Logo"
          />
        </Link>
      ) : (
        <Link href={`/`}>
          <Image
            width={200.87}
            height={23.51}
            className="object-cover"
            src={logo}
            alt="Elara Solutions Logo"
          />
        </Link>
      )}

      <div className="hidden xl:flex justify-between relative items-center gap-[32px] min-w-[590px]">
        {links.map((link, index) => (
          <div key={index} ref={dropMenuRef} className="">
            <Link
              ref={dropMenuRef}
              href={link.route}
              onClick={() => {
                setSelectedLink((prevLink) =>
                  prevLink === link.name ? "" : link.name
                );
              }}
              key={index}
              className={
                pathname === "/" || pathname === '/core-banking' || pathname === '/retail-banking' || pathname === '/corporate-banking' || pathname === '/agency-banking' || pathname === '/lending-services' || pathname === '/loan-engine' || pathname === '/lifestyle-services' || pathname === '/ticketing-services' || pathname === '/application-development-service' || pathname === '/cloud-computing'
                  ? `group flex font-medium justify-center items-center gap-[2px] duration-200 text-gray cursor-pointer hover:text-greenTwo  leading-[16px] font-instrument`
                  : `group flex font-medium justify-center items-center gap-[2px] duration-200 text-blueTwo cursor-pointer hover:text-greenTwo  leading-[16px] font-instrument`
              }
            >
              <div className="group flex flex-col justify-center items-center relative">
                <p className="text-[1rem] font-instrument">{link.name} </p>
                <span className="absolute bottom-[-18px] h-[3px] rounded-lg bg-greenTwo w-[120px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 left-1/2 -translate-x-1/2"></span>
              </div>
              {["Products", "Technologies", "Services"].includes(link.name) && (
                <MdOutlineKeyboardArrowDown
                  className={`${
                    selectedLink === link.name ? "rotate-[180deg]" : "rotate-0"
                  } duration-200`}
                />
              )}
            </Link>
          </div>
        ))}
      </div>

      <Link
        href={`/contact-us`}
        className={
          pathname === "/" || pathname === '/core-banking' || pathname === '/retail-banking' || pathname === '/corporate-banking' || pathname === '/agency-banking' || pathname === '/lending-services' || pathname === '/loan-engine' || pathname === '/lifestyle-services' || pathname === '/ticketing-services' || pathname === '/application-development-service' || pathname === '/cloud-computing'
            ? `relative w-[174px] h-[56px] overflow-hidden rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[34px] bg-white text-blue text-[.875rem] leading-[30px] z-10 font-instrument font-normal`
            : `relative w-[174px] h-[56px] overflow-hidden rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[34px] bg-blue text-white text-[.875rem] leading-[30px] z-10 font-instrument font-normal`
        }
      >
        Get in Touch
      </Link>

      <div
        onClick={() => setMenu((prev) => !prev)}
        className="flex flex-col justify-center items-end w-[32px] h-[32px] xl:hidden gap-[6px] cursor-pointer"
      >
        <div
          className={`bg-blue w-full h-[2.5px] rounded-lg ${
            menu ? "rotate-45 translate-y-[7px]" : ""
          }`}
        ></div>
        <div
          className={`bg-blue w-full h-[2.5px] rounded-lg duration-200 ${
            menu
              ? "opacity-0 -translate-x-[100px]"
              : "opacity-100 translate-x-0"
          }`}
        ></div>
        <div
          className={`bg-blue w-[50%] h-[2.5px] rounded-lg transition-transform ${
            menu ? "-rotate-45 -translate-y-[10px] w-full" : ""
          }`}
        ></div>
      </div>

      {menu && (
        <div ref={menuRef}>
          <Menu
            menu={menu}
            setMenu={setMenu}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
      )}

      {["Technologies", "Services", "Products"].includes(selectedLink) && (
        <DropMenu
          links={true}
          ref={dropMenuRef}
          setLinks={() => {}}
          currentLink={selectedLink}
          setCurrentLink={() => {}}
        />
      )}
    </nav>
  );
};

export default Navbar;
