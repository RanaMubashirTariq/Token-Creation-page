'use client'
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

const featuresData = [
  {
    id: 1,
    title: "Multichain Support",
    description: "Launch tokens on EVM chains & Solana with a single click",
     img:'/top-.png',
    backgroundImage: "bg-[url(/crystal-shadow-1-1.png)]",
    mainImage: "/slices-2.png",
    subtractImage: "/subtract.png",
    topOffset: "top-[10px]",
    imageAlt: "Slices",
    link: "https://ethereum.org",
  },
  {
    id: 2,
    title: "Customizable Setting",
    description: "Name, Symbol, Supply, Decimals & more - No code needed",
    img:'/top-2.png',
    backgroundImage: "bg-[url(/swirl-shadow-1.png)]",
    mainImage: "/swirlcurl.png",
    subtractImage: "/subtract-1.svg",
    topOffset: "top-[10px]",
    imageAlt: "Swirlcurl",
  },
  {
    id: 3,
    title: "Secure & Audited",
    description: "Battle - Tested smart contracts, audited by Top Firms",
    img:'/top-4.png',
    backgroundImage: "bg-[url(/arrow-shadow-1.png)]",
    mainImage: "/arrow.png",
    subtractImage: "/subtract-1.svg",
    topOffset: "top-[10px]",
    imageAlt: "Arrow",
  },
  {
    id: 4,
    title: "Instant Deployment",
    description: "Go live on - chain in minutes with zero hassle",
    img:'/top-.png',
    backgroundImage: "",
    mainImage: "/crystal.png",
    subtractImage: "/subtract-1.svg",
    topOffset: "top-[22px]",
    imageAlt: "Crystal",
    hasSpecialLayout: false,
  },
];

export default function FeaturesSubsection  () {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [thumbWidthPercent, setThumbWidthPercent] = useState<number>(0);
  const [thumbLeftPercent, setThumbLeftPercent] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateThumb = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollWidth <= 0 || clientWidth <= 0) {
        setThumbWidthPercent(0);
        setThumbLeftPercent(0);
        return;
      }

      const visibleRatio = Math.min(1, clientWidth / scrollWidth);
      const widthPercent = visibleRatio * 100;
      const maxScroll = Math.max(1, scrollWidth - clientWidth);
      const maxLeftPercent = 100 - widthPercent;
      const leftPercent = (scrollLeft / maxScroll) * maxLeftPercent;

      setThumbWidthPercent(widthPercent);
      setThumbLeftPercent(leftPercent);
    };

    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);
    return () => {
      el.removeEventListener("scroll", updateThumb as EventListener);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="flex flex-col items-center py-0 relative w-full z-[3]">
      <motion.header 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[780px] max-[800px]:w-[100%] max-[800px]:px-[50px] max-[767px]:px-[25px]  mx-auto font-inter font-black  text-[#dddddd] text-[60px] max-[1100px]:text-[48px] max-[1100px]:leading-[60px] max-[767px]:text-[36px] max-[767px]:leading-[38px] text-center tracking-[-2%] leading-[72px] "
      >
        Smart, Secure, and Instant Token Creation
      </motion.header>

      <div ref={scrollRef} className=" pl-20 max-[1100px]:pl-[50px] max-[767px]:pl-[25px] flex flex-col items-start gap-10 w-full  h-full  overflow-x-scroll scrollbar-hide pt-[200px] max-[1100px]:pt-[150px] max-[800px]:pt-[140px]">
        <div className="flex items-start gap-10 w-full h-full">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="transition-all duration-300"
            >
            <Card
              className={`inline-flex flex-col items-start z-20   border-0 shadow-none ${index === 3 ? "mr-[-360.00px]" : ""}`}
            >
              <CardContent className="p-0 w-full ">
                {/* <div className="absolute w-[340px] h-[340px] top-[15px] left-10 bg-[#d9d9d9] shadow-[0px_20px_32px_#00000040]" /> */}

                <div className="relative w-full h-[124px]">
                  <div
                    className={`relative w-[420px] max-[1000px]:w-[350px] max-[500px]:w-[300px] h-[410px] ${feature.id === 1 ? "top-[-185px]" : "top-[-205px]"}`}
                  >
                    {feature.link ? (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          className={`absolute w-[420px] max-[1000px]:w-[350px] max-[500px]:w-[300px] h-full  ${feature.topOffset} left-[0px] z-20 hover:opacity-80 transition-opacity duration-300 cursor-pointer`}
                          alt="Feature"
                          src={feature.img}
                        />
                      </a>
                    ) : (
                      <img
                        className={`absolute w-[420px] max-[1000px]:w-[350px] max-[500px]:w-[300px] h-full  ${feature.topOffset} left-[0px] z-20`}
                        alt="Feature"
                        src={feature.img}
                      />
                    )}
                  </div>

                  {feature.id === 4 && (
                    <img
                      className="w-[77px] top-[-1973px] left-[-1460px] absolute h-[124px]"
                      alt="Subtract"
                      src="/subtract-1.svg"
                    />
                  )}
                </div>

                <div className="flex flex-col items-start gap-4 pt-[50px] pb-0 px-10 max-[1000px]:px-5 w-full bg-[#222325]">
                  <h3 className="w-[340px] max-[1000px]:w-[220px]  text-[#dddddd] font-inter font-black  text-[32px] max-[1000px]:text-[24px] max-[500px]:text-[20px] max-[500px]:leading-[32px] leading-[38.2px] tracking-[-2%] whitespace-nowrap">
                    {feature.title}
                  </h3>

                  <p className="w-[340px] max-[1000px]:w-[300px] max-[500px]:w-[250px] font-karla font-regular  text-[#dddddd] text-[18px] max-[1100px]:text-[16px] max-[1100px]:leading-[24px] max-[767px]:text-[14px] max-[767px]:leading-[22px]   tracking-[-2%] leading-[27px]">
                    {feature.description}
                  </p>
                </div>

                <div className="flex h-[72px] items-center justify-between pt-[55px] pb-10 px-10 w-full bg-[#222325] rounded-[0px_0px_24px_24px] overflow-hidden">
                  <Button
                    variant="ghost"
                    className={`w-fit mt-[-26.00px] mb-[-24.00px] opacity-0 text-[#dddddd] text-[18px] tracking-[-2%] leading-[27px] font-karla font-regular h-auto p-0 hover:bg-transparent`}
                  >
                    Learn more
                  </Button>

                  <img
                    className={`relative w-[26px] h-[11px] mt-[-2311.00px] ${
                      feature.id === 1
                        ? "ml-[-331px]"
                        : feature.id === 2
                          ? "ml-[-1251px]"
                          : feature.id === 3
                            ? "ml-[-2171px]"
                            : "ml-[-3091px]"
                    }`}
                    alt="Arrow"
                    src={feature.id === 4 ? "/arrow-1.svg" : undefined}
                  />
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1440px] max-[1500px]:max-w-[1200px] max-[1100px]:max-w-[800px] h-2 my-10 max-[1500px]:ml-[-70px] max[1000px]:ml-[100px] max-[1000px]:max-w-[700px] max-[830px]:ml-[0px] max-[800px]:ml-[20px] max-[600px]:max-w-[500px] max-[500px]:max-w-[400px] max-[400px]:max-w-[330px] max-[400px]:left-[-10px] max-[350px]:max-w-[280px]  relative bg-[#101010] rounded-full overflow-hidden"
      >
          <motion.div
            className="absolute top-0 h-full bg-[#222222] rounded-full transition-[left,width] duration-150"
            style={{ width: `${thumbWidthPercent}%`, left: `${thumbLeftPercent}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
    </section>
  );
};
