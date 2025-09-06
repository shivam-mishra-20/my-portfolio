import { motion } from "motion/react";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../hooks/useScrollAnimation";
import imgMaskGroup from "../assets/Avatar-1.png";
import {
  imgEllipse9,
  imgEllipse8,
  imgEllipse4,
  imgEllipse5,
  imgEllipse6,
  imgEllipse7,
} from "../imports/svg-k05rk";

export function WhyHireMeSection() {
  const { ref, isInView } = useScrollAnimation();
  const stats = [
    { number: "12+", label: "Project Completed" },
    { number: "1+", label: "Work Experience" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-[#f2f4f7] rounded-[25px] lg:rounded-[50px] w-full min-h-[600px] lg:h-[806px] mx-auto lg:mx-auto my-4 lg:my-0 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="flex flex-col items-center justify-center overflow-hidden relative h-full">
        <motion.div
          className="flex flex-col gap-12 lg:gap-24 min-h-[600px] lg:h-[806px] items-center justify-center px-4 lg:px-[71px] py-8 lg:py-[122px] relative w-full"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="flex flex-col lg:flex-row min-h-[400px] lg:h-[600px] items-center justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-16">
            {/* Left - Circular Image */}
            <motion.div
              className="relative w-[300px] md:w-[400px] lg:w-[603px] h-[300px] md:h-[400px] lg:h-[600px] flex-shrink-0"
              variants={fadeInLeft}
            >
              {/* Simplified concentric circles for mobile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute w-full h-full rounded-full border-4 border-[#fd853a]/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="absolute w-[85%] h-[85%] rounded-full border-2 border-[#fd853a]/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.div>
                <motion.div
                  className="absolute w-[70%] h-[70%] rounded-full border border-[#fd853a]/40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
              </div>
              <motion.div
                className="absolute inset-4 lg:inset-0 w-auto h-auto bg-center bg-cover bg-no-repeat rounded-full"
                style={{ backgroundImage: `url('${imgMaskGroup}')` }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Desktop concentric circles */}
              <div className="hidden lg:block">
                {[
                  {
                    src: imgEllipse9,
                    left: 145,
                    top: 143,
                    width: 314,
                    height: 314,
                    delay: 0.2,
                  },
                  {
                    src: imgEllipse8,
                    left: 155,
                    top: 153,
                    width: 294,
                    height: 294,
                    delay: 0.3,
                  },
                  {
                    src: imgEllipse4,
                    left: 167,
                    top: 165,
                    width: 270,
                    height: 270,
                    delay: 0.4,
                  },
                  {
                    src: imgEllipse5,
                    left: 180,
                    top: 178,
                    width: 244,
                    height: 244,
                    delay: 0.5,
                  },
                  {
                    src: imgEllipse6,
                    left: 193,
                    top: 191,
                    width: 218,
                    height: 218,
                    delay: 0.6,
                  },
                  {
                    src: imgEllipse7,
                    left: 206,
                    top: 204,
                    width: 192,
                    height: 192,
                    delay: 0.7,
                  },
                ].map((circle, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${circle.left}px`,
                      top: `${circle.top}px`,
                      width: `${circle.width}px`,
                      height: `${circle.height}px`,
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1, rotate: 0 }
                        : { scale: 0, opacity: 0, rotate: -180 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: circle.delay,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                  >
                    <img className="w-full h-full" src={circle.src} alt="" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="flex-1 flex flex-col gap-6 lg:gap-[47px] items-center lg:items-start justify-start min-w-0 text-center lg:text-left"
              variants={fadeInRight}
            >
              <motion.div
                className="flex flex-col gap-4 lg:gap-5 items-center lg:items-start justify-start w-full"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-[#344054] tracking-[-0.96px] leading-none"
                  variants={fadeInUp}
                >
                  Why <span className="text-[#fd853a]">Hire me</span>?
                </motion.h2>
              </motion.div>

              <motion.p
                className="text-[16px] lg:text-[20px] text-[#98a2b3] tracking-[-0.3px] max-w-[444px] leading-normal"
                variants={fadeInUp}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales
              </motion.p>

              <motion.div
                className="flex gap-4 lg:gap-2.5 items-start justify-center lg:justify-start w-full"
                variants={staggerContainer}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 flex flex-col gap-2 lg:gap-2.5 items-center lg:items-start justify-start min-w-0"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="text-[24px] md:text-[30px] lg:text-[36px] font-medium text-[#1d2939] tracking-[-0.54px] leading-normal"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.5 }
                      }
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#667085] tracking-[-0.3px] leading-normal text-center lg:text-left">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={scrollToContact}
                className="border border-[#151515] rounded-[32px] px-8 lg:px-[59px] py-4 lg:py-[33px] hover:bg-[#151515] hover:text-white transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, backgroundColor: "#151515" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[20px] lg:text-[32px] font-semibold hover:text-white tracking-[-0.48px] leading-normal whitespace-nowrap">
                  Hire me
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
