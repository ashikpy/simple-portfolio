"use client";

import { GiPianoKeys } from "react-icons/gi";
import { GiDrumKit } from "react-icons/gi";
import { GiGuitarBassHead } from "react-icons/gi";
import { GiGuitarHead } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import CustomBadge from "@/components/ui/custom-badge";

export default function Page() {
  return (
    <div>
      <Header />
      <Content />
      <TechStack />
      <MusicStack />
      <Socials />
    </div>
  );
}

function Header() {
  return (
    <div className="flex gap-3 mt-10 items-center">
      <Image
        className="bg-muted rounded-full size-16"
        src={
          "https://avatars.githubusercontent.com/u/87185937?s=400&u=47c820e825c71510a8a4f16ee65feb202869cb9b&v=4"
        }
        alt="avatar"
        width={40}
        height={40}
      />
      <div>
        <div className="text-2xl font-black">D. Ashik</div>
        <div className="text-foreground text-sm">Developer based In India</div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="mt-8 leading-7">
      <div>
        I’m Ashik, a coder and a <CustomBadge text="BTech AI" /> student, born
        on <CustomBadge text="August 31, 2005" /> I’m currently studying in the
        ECE department, but my main focus is on software development and AI. I
        work with Next.js, Flutter, Android
      </div>
      <div className="mt-4">
        I’m pursing <CustomBadge text="B. Tech. AI&DS" /> From Amrita College Of
        Engineering, Nagercoil, Tamil Nadu
      </div>
      <div className="mt-4">
        Beyond coding, I do a lot of <CustomBadge text="Music" /> I play guitar,
        piano, and drums. I also love to read books, watch movies, and play
        video games.
      </div>
      <div className="mt-4">
        More Enhanced Portfolio{" "}
        <CustomBadge text="here" link="https://ashikpy.tech" />
      </div>
    </div>
  );
}

function Socials() {
  const socialLinks = [
    { icon: Github, label: "Github", username: "ashikpy" },
    { icon: Linkedin, label: "Linkedin", username: "ashikpy" },
    { icon: Twitter, label: "X", username: "DeepFeel13" },
    { icon: Youtube, label: "Youtube", username: "Ash Codes!" },
    { icon: Mail, label: "Mail", username: "ashikofficial455@gmail.com" },
  ];

  return (
    <div className="mt-10" id="contact">
      <h1 className="font-bold text-2xl ">Connect With Me!</h1>
      <div className="flex flex-col  gap-2 mt-6">
        {socialLinks.map((social, index) => (
          <SocialLink
            key={index}
            icon={social.icon}
            label={social.label}
            username={social.username}
            isFirst={index === 0}
            isLast={index === socialLinks.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  label,
  username,
  isFirst,
  isLast,
}: {
  icon: LucideIcon;
  label: string;
  username: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className={`border flex items-center gap-2 p-2 ${
        isFirst ? "rounded-t-2xl" : ""
      } ${isLast ? "rounded-b-2xl" : ""}`}
    >
      <Icon className="size-5" />
      <div className="size-1 bg-foreground/50 rounded-full"></div>
      <p>{label}</p>
      <p className="font-black">/</p>
      <p className="text-foreground/30 font-semibold">{username}</p>
    </div>
  );
}

function TechStack() {
  return (
    <div className="mt-10 ">
      <h1 className="font-bold text-2xl ">Tech Stack</h1>
      <div className="mt-5 flex justify-around border p-5 rounded-2xl text-4xl">
        <FaHtml5 />
        <DiCss3 />
        <DiJsBadge />
        <DiPython />
        <SiDart />
        <FaReact />
      </div>
    </div>
  );
}

function MusicStack() {
  return (
    <div className="mt-10 ">
      <h1 className="font-bold text-2xl ">Music Stack</h1>
      <div className="mt-5 flex justify-around border p-5 rounded-2xl text-4xl">
        <GiPianoKeys />
        <GiGuitarHead />
        <GiDrumKit />
        <GiGuitarBassHead />
      </div>
    </div>
  );
}
