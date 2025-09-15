'use client'
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function FooterSubsection  ()  {
  const testimonials = [
    {
      quote:
        "It's not just that is fast, the scalability and ease of use is simply unparalleled, truly mindblowing",
      avatar: "/avatar-01.png",
      name: "Emily Zhao",
      title: "Web3 Project Lead",
    },
    {
      quote:
        "Onix accelerated our development process tenfold all while maintaining security and integrity from production to post launch",
      avatar: "/avatar-02.png",
      name: "Ava Lauren",
      title: "DeFi Builder",
    },
    {
      quote:
        "If you're not building on Onix you're wasting time and vital resources that could be allocated to other parts of your project",
      avatar: "/avatar-03.png",
      name: "Ethan Jordan",
      title: "NFT Project Lead",
    },
  ];

  const avatarImages = [
    { src: "/ellipse-7.png", alt: "User avatar 1" },
    { src: "/ellipse-8.png", alt: "User avatar 2" },
    { src: "/ellipse-9.png", alt: "User avatar 3" },
  ];

  const navigationLinks = [
    { label: "Docs", href: "https://docs.onixsystems.com" },
    { label: "About", href: "#about" },
    { label: "Technology", href: "#technology" },
    { label: "Github", href: "https://github.com" },
    { label: "Terms", href: "#term" },
  ];


  return (
    <section className="w-full flex flex-col items-start relative">
      <div className="relative w-full h-[844px] max-[900px]:h-[700px] max-[800px]:h-[900px] max-[330px]:h-[1000px] bg-[#222325]">
        <div className="flex w-full max-w-[1156px] items-start max-[800px]:flex-col max-[1100px]:px-[50px] max-[767px]:px-[25px]  gap-[68px] max-[1100px]:gap-5 absolute top-[344px] max-[900px]:top-[250px] max-[767px]:top-[230px] max-[330px]:top-[280px] left-1/2 transform -translate-x-1/2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-6 flex-1 bg-transparent border-none"
            >
              <CardContent className="p-0 space-y-6">
                <blockquote className=" text-[#dddddd] text-[32px] max-[1100px]:text-[26px] max-[900px]:text-[24px] max-[900px]:leading-[32px] max-[1100px]:leading-[36px] max-[767px]:text-[20px] max-[767px]:leading-[30px] tracking-[-2%] leading-[41.6px] font-inter font-black">
                &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4 w-full">
                  <Avatar className="w-16 h-16 max-[1000px]:w-12 max-[1000px]:h-12 max-[767px]:w-10 max-[767px]:h-10" >
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start gap-1 flex-1">
                    <div className=" text-[#dddddd] text-[16px] max-[767px]:text-sm tracking-[-2%] leading-[normal] font-karla font-extrabold">
                      {testimonial.name}
                    </div>

                    <div className=" text-[#5e6b7e] text-[16px] max-[767px]:text-sm tracking-[-2%] leading-[normal] font-karla font-regular">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-[767px]:px-[25px] flex flex-col w-full max-w-[1070px] items-center gap-4 absolute top-[120px] max-[900px]:top-[70px] max-[767px]:top-[40px] left-1/2 transform -translate-x-1/2">
          <h2 className="] text-[#dddddd] text-[60px] max-[1100px]:text-[48px] max-[1100px]:leading-[60px] max-[767px]:text-[36px] max-[767px]:leading-[48px] text-center leading-[72px] font-inter font-black tracking-[-2%]">
            Trusted by 10,000+ Creators
          </h2>

          <div className="inline-flex items-start gap-[15px]">
            <div className="relative w-24 h-10">
               <img src="/group-24.png" className="w-full h-full" alt="" />
            </div>

            <div className=" text-[#808080] text-[24px] max-[767px]:text-[18px] max-[1100px]:text-[20px] text-center tracking-[-2%] leading-[36px] font-karla font-regular">
              and many more
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[700px] overflow-hidden">
      <img src='/footer-img.png' className="w-full h-full absolute top-0 left-0"/>
        <div className="relative w-full h-[1214px] max-[767px]:px-[25px]">

          <div className="inline-flex flex-col items-center gap-16 max-[1100px]:gap-10 mt-[236px] w-full mx-auto ">

            <div className="inline-flex flex-col items-center gap-4 ">
            <h1 className="font-inter font-black text-[#dddddd] text-center text-[60px] leading-[72px] max-[1100px]:text-[48px] max-[1100px]:leading-[60px] max-[767px]:text-[36px] max-[767px]:leading-[48px] tracking-[-2%] ">Want to launch your <span className="bg-[linear-gradient(88.55deg,#EB5BE5_36.76%,#DDBBDB_98.77%)] bg-clip-text text-transparent">Token?</span></h1>
              <p className="w-[816px] max-[767px]:w-full text-[#808080] text-[24px] max-[1500px]:text-[20px] max-[767px]:text-lg max-[767px]:leading-[32px] text-center tracking-[-2%] leading-[36px] font-karla font-regular">
                Seamless Token Creation for the Next-Gen Web.
              </p>
            </div>

            <div className="inline-flex flex-col items-start gap-2 p-[3px]">
                <img src="/footer-btn.png" className="w-[177px] h-10 hover:opacity-80 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer className="h-[377px] max-[1000px]:h-[300px] max-[500px]:h-[400px] justify-between pt-[102px] max-[1000px]:pt-[50px] pb-16 max-[1000px]:pb-10 px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] w-full bg-[#101010] flex flex-col items-start ">
        <div className="flex items-center justify-between w-full max-[500px]:flex-col max-[500px]:items-start gap-5">
            <img src="/logo.png" className="w-[90px] h-6" alt="" />
          <nav className="flex w-[640px] items-start justify-end gap-12 max-[767px]:gap-5 max-[500px]:w-[100%] max-[500px]:flex-col z-20">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }
                  // External links will open in the same tab by default
                  // If you want them to open in a new tab, uncomment the line below:
                  // if (!link.href.startsWith('#')) e.target.target = '_blank';
                }}
                className=" text-[#dddddd] text-[16px] max-[767px]:text-[14px] text-right tracking-[-2%] leading-[normal]  font-karla font-regular hover:opacity-80 transition-opacity cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-end justify-between w-full gap-10 max-[500px]:gap-5 max-[767px]:flex-col max-[767px]:items-start">
          <div className="inline-flex items-start gap-12">
            <div className=" text-[#5e6b7e] text-[18px] max-[767px]:text-[14px]  tracking-[-2%] leading-[27px] font-karla font-regular whitespace-nowrap">
              © 2025 Onix Systems. All rights reserved.
            </div>
          </div>

           <div className="w-full max-w-[328px] h-10 flex item-center justify-between gap-8 max-[900px]:gap-4">
               <img src="/communit-icon-1.png" className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
               <img src="/communit-icon-2.png" className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
               <img src="/communit-icon-3.png" className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
               <img src="/communit-icon-4.png" className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
               <img src="/communit-icon-.png" className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
           </div>
        </div>
      </footer>

      <div className="absolute w-[251px] h-[251px] top-[1417px] right-[200px] max-[1300px]:right-[150px] max-[1100px]:right-[120px] max-[1100px]:w-[180px] max-[1100px]:h-[180px] max-[900px]:top-[1300px] max-[800px]:top-[1480px] max-[800px]:right-[70px] max-[900px]:right-[90px] max-[767px]:w-[150px] max-[767px]:h-[150px] max-[767px]:right-[50px] max-[500px]:right-[30px]      rounded-[53.29px] bg-[url(/flex-1.png)] bg-cover bg-[50%_50%] z-11" />

      <img
        className="absolute w-[299px] h-[299px] top-[724px] left-[167px] max-[1500px]:left-[140px] max-[1300px]:left-[120px] max-[1100px]:w-[200px] max-[1100px]:h-[200px] max-[1100px]:top-[800px] max-[1100px]:left-[100px] max-[900px]:top-[650px] max-[900px]:left-[70px] max-[800px]:top-[870px] max-[800px]:left-[50px] max-[767px]:w-[150px] max-[767px]:h-[150px] max-[500px]:left-[20px] max-[330px]:top-[1000px]   object-cover"
        alt="Star"
        src="/star4-1.png"
      />
    </section>
  );
};
