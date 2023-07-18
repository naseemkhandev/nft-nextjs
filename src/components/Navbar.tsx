"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "@/utils";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CommonButton from "./CommonButton";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 border-b z-[100] bg-[#160e2a15] backdrop-blur-xl">
      <div className="overflow-hidden relative container mx-auto text-sm px-5 md:px-10 py-4 flex items-center justify-between">
        <div className="text-xl">
          <h2>Naseem.</h2>
        </div>

        <div>
          <ul
            className={`${
              toggleMenu ? "right-0" : "-right-full"
            } flex items-start md:items-center md:flex-row flex-col gap-6 px-10 py-32 md:py-0 md:px-0 md:gap-5 lg:gap-10 capitalize fixed md:relative top-0 md:left-0 w-full xs:w-80 h-screen md:w-auto md:h-auto menu-gradients md:bg-gradient-to-r from-transparent to-transparent backdrop-blur-3xl md:backdrop-blur-0 transition-all duration-500`}
          >
            {NavLinks.map(({ id, name }) => {
              return (
                <li
                  key={id}
                  className="border-b w-full py-4 md:w-auto md:py-0 md:border-none"
                >
                  <Link href={`#${id}`}>{name}</Link>
                </li>
              );
            })}
            <RxCross2
              onClick={() => setToggleMenu(false)}
              className="block md:hidden absolute top-16 left-12 text-2xl cursor-pointer"
            />
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <CommonButton btnText="login" />
          <CommonButton btnText="sign up" />
          <CgMenuRight
            onClick={() => setToggleMenu(true)}
            className="block md:hidden cursor-pointer text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
