'use client'
import React from "react";
import { Button } from "../../components/ui/button";
import SignInModalDemo from "../SignIn/SignIn";
import { motion } from "framer-motion";

const navigationItems = [
  { label: "Docs", href: "https://docs.onixsystems.com" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Terms", href: "#term" },
];



export default function HeaderSubsection  ()  {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);


  
  return (
    <header className=" flex flex-col items-start gap-[120px] relative self-stretch w-full flex-[0_0_auto] z-[4] bg-transparent">
                       <div className="absolute inset-0 z-0 mt-[100px] max-[1300px]:mt-[40px] max-[767px]:mt-[-100px]">
                        <img src="/header-img.png" className="w-full h-full max-[1100px]:h-auto max-[767px]:h-full object-contain " alt="" />
                        <img 
                          src='/scroll-indicator.png' 
                          className="w-[131px] h-[86px] cursor-pointer  object-container absolute top-[1100px] right-[730px] max-[1500px]:right-[650px] max-[1300px]:right-[550px] max-[1100px]:top-[830px] max-[1100px]:right-[450px] max-[1000px]:top-[740px] max-[1000px]:right-[380px] max-[800px]:right-[350px] max-[600px]:right-[230px] max-[600px]:top-[640px] max-[500px]:right-[150px] max-[400px]:right-[140px] max-[385px]:right-[130px] max-[350px]:right-[110px] max-[330px]:right-[90px] max-[500px]:top-[600px]"
                        />
                 </div>

      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between pt-[72px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:pt-10 pb-0 px-20 relative self-stretch w-full flex-[0_0_auto] z-[2]"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-[90px] h-6 max-[1000px]:h-[20px]"
        >
            <img src='/logo.png' className="w-[90px] h-[24px] max-[1000px]:h-[20px] object-contain"
            />
        </motion.div>

        <div className="inline-flex items-center gap-[30px] max-[767px]:hidden">
  {navigationItems.map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      onClick={(e) => {
        if (item.href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative font-karla text-white text-[24px] max-[1500px]:text-[20px] max-[1100px]:text-[18px] 
                 text-center tracking-[-2%] leading-[36px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-all duration-300"
    >
      {item.label}
    </motion.a>
  ))}
</div>


            <motion.img 
              src="/nav-btn.png" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              className="w-[96px] h-[40px] object-contain max-[1000px]:h-[25px] max-[767px]:hidden  hover:opacity-80 cursor-pointer transform transition-transform duration-300 hover:scale-90 " 
              alt="Login" 
              onClick={() => setIsSignInOpen(true)}
            />

            <motion.button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden max-[767px]:inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                )}
              </svg>
            </motion.button>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="z-[3] max-[767px]:block hidden absolute top-[120px] left-0 right-0 px-5"
        >
          <div className="mx-5 rounded-lg border border-white/15 bg-black/70 backdrop-blur-md">
            <div className="flex flex-col divide-y divide-white/10">
            {navigationItems.map((item, index) => (
  <motion.a
    key={index}
    href={item.href}
    onClick={(e) => {
      if (item.href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      setIsMobileMenuOpen(false);
    }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.1 * index }}
    whileHover={{ x: 5 }}
    className="text-left px-4 py-4 text-white font-karla text-[14px] hover:bg-white/10 transition-all duration-300"
  >
    {item.label}
  </motion.a>
))}

              <div className="p-4">
                <img 
                  src="/nav-btn.png" 
                  className="w-[80px] h-[30px] object-contain cursor-pointer transform transition-transform duration-300 hover:scale-90  hover:opacity-80" 
                  alt="Login" 
                  onClick={() => {
                    setIsSignInOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative self-stretch w-[902px] h-[1237px] max-[1500px]:w-[802px] max-[1000px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:w-[100%] max-[1100px]:h-[937px] max-[1000px]:h-[800px] max-[860px]:h-[700px] max-[600px]:h-[500px] z-0 mx-auto" 
      >

              <div className="w-[902px] max-[1500px]:w-[802px] max-[1000px]:w-[100%] inline-flex flex-col items-center gap-5 mx-auto">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-inter font-bold text-[80px] max-[1500px]:text-[64px] max-[1100px]:text-[48px] max-[1100px]:leading-[50px] max-[1500px]:leading-[68px] max-[600px]:text-[36px] max-[600px]:leading-[38px]   leading-[88px] tracking-[-2%] text-[#dddddd] text-center"
                  >
                  Create & Launch your Token on <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    className="bg-[linear-gradient(88.55deg,#EB5BE5_36.76%,#DDBBDB_98.77%)] bg-clip-text text-transparent"
                  >EVM + Solana </motion.span>
                  </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="relative w-[760px] max-[1000px]:w-[100%] font-regular font-karla text-[#dddddd] text-[24px] max-[1500px]:text-xl max-[1100px]:text-lg max-[500px]:text-sm text-center tracking-[-2%] leading-[36px] "
            >
              No Code. Multichain. Live in Minutes
            </motion.h1>

               <motion.img 
                 src="/section-40.png" 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                 whileHover={{ scale: 0.9 }}
                 whileTap={{ scale: 1.1 }}
                 className=" hover:opacity-80 cursor-pointer transform transition-transform duration-300 hover:scale-90 w-[186px] h-10 max-[500px]:w-[130px] max-[500px]:h-[35px]" 
                 alt="" 
               />
          </div>
      </motion.section>

      <SignInModalDemo 
        open={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
    </header>
  );
};
