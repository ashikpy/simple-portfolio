"use client";
import { AiOutlineHome } from "react-icons/ai";

import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import React, { useState } from "react";
import { CircleX, Menu, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav handleClick={handleClick} isOpen={isOpen} />
      <div className="border rounded-full bg-muted mb-4 px-2">
        <ul className="flex justify-between items-center p-3 ">
          <li className="md:hidden">
            <Menu className="size-4 cursor-pointer" onClick={handleClick} />
          </li>
          <div className="hidden items-center gap-4 text-sm md:flex">
            <Link href="/" className="flex items-center gap-2">
              <AiOutlineHome />
              <p>Home</p>
            </Link>
            <Link href="/works" className="flex items-center gap-2">
              <AiOutlineFundProjectionScreen />
              <p>Projects</p>
            </Link>
            <Link href="#contact" className="flex items-center gap-2">
              <BiPhoneCall />
              <p>Contact</p>
            </Link>
          </div>
          <li className="flex items-center gap-2">
            <MessageCircle className="size-4 cursor-pointer" />
            <p>Say Hi!</p>
          </li>
        </ul>
      </div>
    </>
  );
}

const MobileNav = ({
  handleClick,
  isOpen,
}: {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`h-screen backdrop-blur-xs fixed bg-black/70 top-0 left-0 w-full ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-4 p-4 items-center font-bold">
          <li className="cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/works"}>Works</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"#contact"}>Contact</Link>
          </li>
          <li>
            <CircleX className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};
