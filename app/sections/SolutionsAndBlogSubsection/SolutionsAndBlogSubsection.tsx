'use client'
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

const blockchainNetworks = [
  {
    icon: "/fi-15301597.svg",
    name: "Ethereum",
  },
  {
    icon: "/fi-12114233.svg",
    name: "Polygon",
  },
  {
    icon: "/fi-15208359.svg",
    name: "BNB",
  },
  {
    icon: "/fi-15208284.svg",
    name: "Arbitrum",
  },
  {
    icon: "/fi-15301496.svg",
    name: "Avalanche",
  },
  {
    icon: "/fi-15301766.svg",
    name: "Solana",
  },
];

const howItWorksSteps = [
  {
    image: "/imge.png",
    title: "Select Blockchain",
    description: "Choose your preferred network: EVM or Solana",
  },
  {
    image: "/imge-2.png",
    title: "Customize Token",
    description: "Set Name, Symbol, Supply and Advanced Options",
  },
  {
    image: "/imge-3.png",
    title: "Launch & Track",
    description: "Deploy instantly and monitor your Token's Performance",
  },
];

const tokenCards = [
  {
    icon: "/token-1.png",
    name: "ETHx",
    network: "Ethereum (EVM)",
    bgColor: "bg-[#ddddd]",
    accentColor: "bg-color02shade-01",
  },
  {
    icon: "/token-2.png",
    name: "SolBeam",
    network: "Solana",
    bgColor: "bg-neutraul01-ddddd",
    accentColor: "bg-color02shade-01",
  },
  {
    icon: "/token-3.png",
    name: "BNBfinity",
    network: "BNB Chain (EVM)",
    bgColor: "bg-neutraul01-ddddd",
    accentColor: "bg-color02shade-01",
  },
  {
    icon: "/token-4.png",
    name: "PolyMesh",
    network: "Polygon (EVM)",
    bgColor: "bg-neutraul02-d9d9d9",
    accentColor: "bg-color03shade-03",
  },
  {
    icon: "/token-5.png",
    name: "Arbitro",
    network: "Arbitrum (EVM)",
    bgColor: "bg-neutraul02-d9d9d9",
    accentColor: "bg-color03shade-03",
  },
  {
    icon: "/token-6.png",
    name: "Avalant",
    network: "Avalanche (EVM)",
    bgColor: "bg-neutraul02-d9d9d9",
    accentColor: "bg-color04shade-01",
  },
];

export default function SolutionsAndBlogSubsection  () {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('technology');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-start gap-[180px] max-[1100px]:gap-[100px] max-[767px]:gap-[50px] pt-[210px] max-[767px]:pt-[70px] max-[1100px]:pt-[120px] pb-[180px] max-[1100px]:pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[2]">
      <div className="flex flex-col items-center px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
        <Card className="flex items-center justify-center gap-16 max-[1000px]:gap-8 px-[132px] max-[767px]:px-[80px] max-[500px]:px-10 max-[500px]:px-5 py-[38px] relative self-stretch w-full flex-[0_0_auto] bg-[#222325] rounded-2xl border-0">
          <CardContent className="flex items-center justify-center max-[767px]:flex-wrap gap-16 max-[1000px]:gap-8 p-0">
            {blockchainNetworks.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] cursor-pointer transition-all duration-300"
              >
                <img
                  className="relative w-10 h-10"
                  alt="Fi"
                  src={network.icon}
                />
                <div className="relative font-karla font-regular  text-[#5e6b7e] text-[] tracking-[] leading-[] whitespace-nowrap">
                  {network.name}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
        </motion.div>

        <motion.img
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[414px] h-[463px] max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1100px]:top-[-180px] max-[767px]:w-[200px] max-[767px]:h-[200px] max-[767px]:top-[-120px] top-[-279px] left-0 object-cover"
          alt="Star"
          src="/star3.png"
        />
      </div>

      <div className="flex items-center px-[222px] max-[1500px]:px-[122px] max-[1100px]:px-[50px] max-[767px]:px-[25px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-16 max-[1000px]:gap-8 max-[1000px]:flex-col relative flex-1 grow">
          <div className="flex flex-col items-start gap-[298px] max-[767px]:gap-[60px] relative flex-1 grow">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col h-[248px] max-[1000px]:h-auto items-start gap-8 max-[767px]:gap-[15px] relative self-stretch w-full"
            >
              <h2 className="relative text-[#dddddd] font-inter font-black text-[60px] leading-[72px] max-[1100px]:text-[48px] max-[1100px]:leading-[60px] max-[767px]:text-[36px] max-[767px]:leading-[44px] tracking-[-2%]">
                How It Works
              </h2>

              <p className="relative text-[#808080] font-karla font-regular text-[24px] max-[1500px]:text-[20px] max-[1500px]:leading-[28px] max-[1100px]:text-[16px] max-[1100px]:leading-[24px] max-[767px]:text-[14px] max-[767px]:leading-[20px] leading-[32px] tracking-[-2%]">
                Stay current on the latest Onix project developments, news, and
                content, updated daily.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col w-[558px] max-[767px]:w-full items-start max-[767px]:items-center max-[1000px]:ml-[200px] max-[830px]:ml-[150px] max-[800px]:ml-[100px] max-[767px]:ml-0 gap-8 relative"
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.2), ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="transition-all duration-300 max-[767px]:w-full"
              >
              <Card
                className="relative self-stretch w-full max-[767px]:w-full h-[191px] max-[767px]:h-auto border-0 max-[767px]:bg-transparent"
              >
                <CardContent className="p-0 h-full max-[767px]:w-full flex max-[767px]:flex-col max-[767px]:items-center">
                  <img
                    className="w-[279px] h-[190px] max-[767px]:w-[100%] max-[767px]:rounded-t-lg max-[767px]:h-[190px]  top-0 left-0 object-cover max-[767px]:relative"
                    src={step.image}
                  />

                  <div className="absolute w-[279px] h-[191px] max-[767px]:relative  max-[767px]:w-full max-[767px]:h-auto top-0 left-[279px] max-[767px]:top-auto max-[767px]:left-auto">
                    <div className="absolute w-[279px] h-[97px] max-[767px]:relative max-[767px]:w-full max-[767px]:h-auto top-0 left-0">
                      <img
                        className="absolute w-[279px] h-[76px] top-0 left-0 max-[767px]:hidden"
                        alt="Top"
                        src="/right-to-nde.png"
                      />

                      <div className="flex flex-col w-[279px] max-[767px]:w-full h-12 items-start gap-4 pt-2.5 pb-0 px-6 absolute top-[49px] left-0 bg-[#222325]  max-[767px]:relative max-[767px]:top-auto max-[767px]:left-auto  max-[767px]:justify-center max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-2">
                        <h4 className="text-[#dddddd] font-inter font-black text-[24px] max-[767px]:text-[18px] max-[767px]:leading-[24px] whitespace-nowrap leading-[28.8px] tracking-[-2%]">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <div className="w-[279px] h-[94px] max-[767px]:w-full max-[767px]:h-auto items-start gap-[223px] px-6 py-0 absolute top-[97px] left-0 rounded-[0px_0px_24px_0px] flex bg-[#222325] overflow-hidden max-[767px]:relative max-[767px]:top-auto max-[767px]:left-auto max-[767px]:rounded-b-lg max-[767px]:px-4 max-[767px]:py-3 max-[767px]:justify-center">
                      <p className="relative w-[193px] mt-[-1.00px] [font-family:'Karla',Helvetica] font-normal text-[#5e6b7e] text-sm tracking-[-0.28px] leading-5 max-[767px]:w-full max-[767px]:text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[552px] h-[855px] max-[1100px]:w-[400px] max-[1100px]:h-[600px] max-[1100px]:top-[50px] max-[800px]:w-[250px] max-[800px]:h-[400px] max-[800px]:top-[300px] max-[767px]:hidden top-2 left-[-150px] object-cover"
          alt="Spike"
          src="/spike.png"
        />
      </div>

      <div className="relative self-stretch w-full h-[904px] max-[1100px]:h-[1200px] max-[767px]:h-[2100px]">
        <div className="relative w-full h-[1461px] max-[1100px]:h-auto top-[-322px]">
          <div className="flex flex-col w-full items-center gap-20 absolute top-[322px] left-0 z-11">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col w-[1070px] max-[767px]:w-full items-center gap-4 relative flex-[0_0_auto] max-[1100px]:px-[50px] max-[767px]:px-[25px]"
            >
              <h2 className="relative font-inter font-black text-[60px] tracking-[-2%] leading-[72px] max-[1100px]:text-[48px] max-[1100px]:leading-[60px] max-[767px]:text-[36px] max-[767px]:leading-[48px] text-center  text-[#dddddd]">
                Built with Token Creator
              </h2>

              <p className="relative font-inter font-black text-[24px] max-[1500px]:text-[20px] max-[1100px]:leading-[24px] max-[1100px]:text-[18px] max-[1100px]:leading-[24px] tracking-[-2%] leading-[36px] max-[767px]:text-[16px] max-[767px]:leading-[22px]  text-center  text-[#808080]">
                Launch Powerful Tokens Easily with Token Creator
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto] max-[1100px]:px-[50px] max-[767px]:px-[25px]"
            > 
              <div className=" gap-10 relative flex-[0_0_auto] grid grid-cols-3 max-[1100px]:grid-cols-2 max-[767px]:grid-cols-1">
                {tokenCards.map((token, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="transition-all duration-300"
                  >
                  <Card
                    className="flex w-[330px] max-[365px]:w-[280px] max-[330px]:w-[250px] flex-col items-start relative border-0 "
                  >
                    <CardContent className="p-0 w-full">
                      <div
                        className={`${token.bgColor} absolute w-[250px] h-[231px] top-[47px] left-10 shadow-[0px_20px_32px_#00000040]`}
                      />

                      <div className="relative self-stretch w-full h-[100px]">
                          <img
                            className="absolute w-[330px] h-[100px] top-0 left-0"
                            alt="Icon"
                            src={token.icon}
                          />
                      </div>

                      <div className="flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#222325]">
                        <h3 className="self-stretch font-inter font-black text-[32px] max-[767px]:text-[24px] max-[767px]:leading-[32px] tracking-[-2%] leading-[38.4px] relative   text-[#dddddd]">
                          {token.name}
                        </h3>

                        <p className="relative self-stretch font-karla font-regular  text-[#dddddd] text-[18px] max-[767px]:text-[16px] max-[767px]:leading-[22px] tracking-[-2%] leading-[27px]">
                          {token.network}
                        </p>
                      </div>

                      <div className="items-center justify-between pt-[34px] pb-8 px-8 ] relative self-stretch w-full flex-[0_0_auto] rounded-[0px_0px_24px_24px] flex bg-[#222325] overflow-hidden">
                        <div className="inline-flex gap-1.5 p-[2.25px] flex-[0_0_auto] flex-col items-start relative">
                           <img src="/token-creation-btn.png" className="w-[139px] h-[30px] hover:opacity-80 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
                        </div>

                        <img
                          className="relative w-[26px] h-[11px] mt-[-4146.00px] ml-[-733.5px]"
                          alt="Arrow"

                        />
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[520px] h-[1006px] max-[1500px]:w-[400px] max-[1500px]:h-[800px] top-0 right-[-280px] max-[1500px]:right-[-220px] max-[900px]:w-[250px] max-[900px]:h-[400px] max-[900px]:right-[-120px] max-[900px]:top-[200px] object-cover max-[767px]:w-[200px] max-[767px]:h-[200] max-[767px]:top-[400px] max-[767px]:right-[-80px]"
            alt="Cube"
            src="/cube2.png"
          />

          <motion.img
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[450px] h-[450px] max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1100px]:top-[1350px] max-[767px]:w-[200px] max-[767px]:h-[200px] max-[767px]:top-[2350px] top-[1011px] left-1.5 object-cover"
            alt="Sphere"
            src="/sphere2.png"
          />
        </div>
      </div>
    </section>
  );
};
