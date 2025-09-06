import { motion } from "motion/react";
import {
  imgVector1,
  imgVector2,
  imgVector3,
  imgStar,
  imgIconOutlinedDirectionsStraightArrowsUpRight,
} from "../imports/svg-k05rk";
import avatar1 from "../assets/Avatar-1.png";
import Orb from "./Orb";

export function HeroSection() {
  const scrollToPortfolio = (): void => {
    const element = document.getElementById("project");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (): void => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-[86px] px-4 lg:px-0">
      {/* Background circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[1000px] h-[700px] lg:w-[1200px] lg:h-[900px]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {/* Centered Orb canvas as an orange background (hue ~28deg) */}
        <Orb
          hue={28}
          hoverIntensity={0.3}
          rotateOnHover={true}
          innerRadius={0.75}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-col items-center justify-center min-h-[600px] lg:min-h-[846px]">
        {/* Content wrapper */}
        <div className="flex flex-col items-center justify-center w-full relative">
          {/* Left content */}
          <div className="flex flex-col items-center text-center z-10 mb-8 lg:mb-0 lg:items-center lg:text-center">
            {/* Hello badge */}
            <motion.div
              className="relative mb-4 lg:mb-2.5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              <div className="bg-white/10 border border-neutral-900 rounded-[38.235px] px-4 lg:px-[25.49px] py-2 lg:py-[12.745px] h-[35px] lg:h-[45px] flex items-center">
                <span className="text-[16px] lg:text-[20px] font-medium text-neutral-900 tracking-[-0.3px]">
                  Hello!
                </span>
              </div>
              <motion.div
                className="absolute right-[-20px] lg:right-[-27.5px] top-[-9px] w-[20px] lg:w-[27.5px] h-[21px] lg:h-[28.5px] hidden lg:block"
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                <img className="w-full h-full" src={imgVector1} alt="" />
              </motion.div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="text-center items-center justify-center max-w-[680px] lg:max-w-[900px] px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-none tracking-[-1px] lg:tracking-[-1.2px] text-neutral-900">
                I'm{" "}
                <motion.span
                  className="text-[#fd853a]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Shivam Mishra
                </motion.span>
                ,<br />
                Software Developer
              </h1>
            </motion.div>

            {/* Decorative arrow - Desktop only */}
            <motion.div
              className="hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              {/* decorative arrow intentionally hidden to avoid layout overlap on desktop */}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0 lg:hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <div
              className="w-[300px] md:w-[400px] lg:w-[550px] xl:w-[952.402px] h-[400px] md:h-[500px] lg:h-[400px] xl:h-[636px] bg-center bg-cover bg-no-repeat rounded-lg"
              style={{
                backgroundImage: `url('${avatar1}')`,
              }}
            ></div>
          </motion.div>
        </div>

        {/* Quote section - Desktop only */}
        <motion.div
          className="absolute left-8 top-[320px] flex-col gap-6 hidden lg:hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <div className="w-9 h-9">
            <img className="w-full h-full" src={imgVector3} alt="" />
          </div>
          <p className="text-[20px] font-medium text-[#344054] tracking-[-0.3px] leading-normal">
            Jenny's Exceptional product design
            <br />
            ensure our website's success.
            <br />
            Highly Recommended
          </p>
        </motion.div>

        {/* Rating section - Desktop only */}
        <motion.div
          className="absolute right-8 top-1/2 transform -translate-y-1/2 flex-col gap-[21px] items-end hidden lg:hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <motion.div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-6 lg:w-8 h-6 lg:h-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.4 + i * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                <img className="w-full h-full" src={imgStar} alt="" />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <motion.div
              className="text-[32px] lg:text-[47px] font-bold text-neutral-900 tracking-[-0.705px] leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.8,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              1+ Years
            </motion.div>
            <motion.div
              className="text-[16px] lg:text-[20px] text-neutral-900 tracking-[-0.3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 2.0,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              Experience
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="absolute bottom-8 lg:bottom-[43px] left-1/2 transform -translate-x-1/2 w-full max-w-[832px] px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <div className="backdrop-blur-[7.5px] bg-white/10 border-2 border-white rounded-[50px] h-[60px] lg:h-[82px] w-full flex items-center justify-between p-[8px] lg:p-[10px] bg-gray-100">
          <motion.button
            onClick={scrollToPortfolio}
            className="bg-[#fd853a] rounded-[60px] flex items-center justify-center px-4 lg:px-6 h-full transition-all duration-300 hover:bg-[#e5762f]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[18px] lg:text-[25.692px] font-medium text-white tracking-[-0.3854px] whitespace-nowrap">
              Portfolio
            </span>
            <div className="w-[32px] lg:w-[42px] h-[32px] lg:h-[42px] ml-2">
              <img
                className="w-full h-full"
                src={imgIconOutlinedDirectionsStraightArrowsUpRight}
                alt=""
              />
            </div>
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="flex-1 flex items-center justify-center hover:bg-white/10 lg:border border-gray-100 rounded-[40px] transition-all duration-300 h-full mx-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-[18px] lg:text-[25.692px] font-semibold text-black tracking-[-0.3854px] whitespace-nowrap">
              Hire me
            </span>
            <div className="w-[32px] lg:w-[42px] h-[32px] lg:h-[42px] ml-2 text-black">
              <img
                className="w-full h-full text-black"
                src={imgIconOutlinedDirectionsStraightArrowsUpRight}
                alt=""
              />
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
