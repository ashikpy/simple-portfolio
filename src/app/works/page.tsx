import Image from "next/image";

import React from "react";

// hello

export default function Page() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-black mb-8">My Works</h1>
      <div className="flex flex-col  gap-4">
        <WorkContainer
          alt="hello"
          imag="https://ashbio.vercel.app//ashsym.png"
          title="AshSym"
          desc="AshSym 2024 is a technical festival organized by the Science and Humanities department, featuring both technical and non-technical events. The festival aims to promote the exchange of ideas and knowledge between students, researchers, and industry professionals. I personally got the previleage to make this website, and I'm proud of the work I did. I hope you enjoy it as much as I do."
          redirectLink="https://ashsym.vercel.app"
        />
        <WorkContainer
          alt="hello"
          imag="https://ashbio.vercel.app/aiyara.png"
          title="Aiyara"
          desc="Aiyara's website presents a vibrant showcase of their floral offerings, including wedding garlands, jasmine garlands, and custom bouquets. It highlights their expertise in floral arrangements for weddings and events, featuring high-quality images and customer testimonials. The site is user-friendly and designed to engage potential clients effectively."
          redirectLink="https://aiyara.vercel.app"
        />
        <WorkContainer
          alt="hello"
          imag="https://ashbio.vercel.app/cybertoys.png"
          title="CyberToys"
          desc="This is a website I made as a fun, with my cousin who's a mordern artist, this website is a cyberpunk themed website. It has been evolving since I started learning web development. I'm proud of the work I did. I'm stkill learning new things, and I'm making this website as a side project. I hope you enjoy it as much as I do. *This website is not finished yet.*"
          redirectLink="https://cybertoys.vercel.app"
        />
        <WorkContainer
          alt="hello"
          imag="https://ashbio.vercel.app/cybertoys.png"
          title="CyberToys"
          desc="This is a website I made as a fun, with my cousin who's a mordern artist, this website is a cyberpunk themed website. It has been evolving since I started learning web development. I'm proud of the work I did. I'm stkill learning new things, and I'm making this website as a side project. I hope you enjoy it as much as I do. *This website is not finished yet.*"
          redirectLink="https://cybertoys.vercel.app"
        />
        <WorkContainer
          alt="hello"
          imag="https://ashbio.vercel.app//ashbio.png"
          title="Ashik's Portfolio"
          desc="My Portfolio website, this website is actually my first ever project. It has been evolving since I started learning web development. I'm proud of the work I did. I'm stkill learning new things, and I'm making this website as a side project. I hope you enjoy it as much as I do."
          redirectLink="https://ashbio.vercel.app"
        />
      </div>
    </div>
  );
}

function WorkContainer({
  title,
  imag,
  desc,
  alt,
  redirectLink,
}: {
  redirectLink?: string;
  title: string;
  imag: string;
  desc: string;
  alt: string;
}) {
  return (
    <a href={redirectLink} className="border rounded-2xl p-5 ">
      <Image
        alt={alt}
        src={imag}
        width={500}
        height={500}
        className=" w-full"
      />
      <h1 className="text-4xl font-black mt-4">{title}</h1>
      <p className="text-sm text-foreground/80 text-left mt-2">{desc}</p>
    </a>
  );
}
