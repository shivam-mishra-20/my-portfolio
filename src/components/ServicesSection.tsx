import { motion } from "motion/react";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../hooks/useScrollAnimation";
import imgLightYellowAbstractBackground3DIllustration3DRendering1 from "../assets/a3502b9f9561ce8c41c01f405b55222ec2ad1c89.png";

import {
  imgFrame61,
  imgLine3,
  imgIconOutlinedDirectionsStraightArrowsUpRight1,
} from "../imports/svg-k05rk";

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();
  const imgRectangle6 = new URL("../assets/ui design.png", import.meta.url)
    .href;
  const imgRectangle7 = new URL("../assets/web design.png", import.meta.url)
    .href;
  const imgRectangle8 = new URL("../assets/image.png", import.meta.url).href;
  const services = [
    {
      title: "UI/ UX Design",
      image: imgRectangle6,
    },
    {
      title: "Web Design",
      image: imgRectangle7,
    },
    {
      title: "Landing Page",
      image: imgRectangle8,
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-neutral-900 rounded-[25px] lg:rounded-[50px] w-full min-h-[600px] lg:h-[878px] relative overflow-hidden my-4 lg:my-0 mx-0"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Background decorations */}
      <motion.div
        className="absolute left-[954px] top-[146px] w-[873px] h-[873px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${imgLightYellowAbstractBackground3DIllustration3DRendering1}')`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      />
      <div
        className="absolute left-[527px] top-[21px] w-[251px] h-[251px] bg-center bg-cover bg-no-repeat blur-[2.5px] rotate-[213.6deg] opacity-80"
        style={{
          backgroundImage: `url('${imgLightYellowAbstractBackground3DIllustration3DRendering1}')`,
        }}
      />
      <div
        className="absolute left-[-184px] top-0 w-[590px] h-[594px] bg-center bg-cover bg-no-repeat blur-[1.5px] rotate-[151.7deg] opacity-50"
        style={{
          backgroundImage: `url('${imgLightYellowAbstractBackground3DIllustration3DRendering1}')`,
        }}
      />

      <motion.div
        className="relative z-0 flex flex-col items-center justify-start px-4 lg:px-[71px] py-12 lg:py-[116px] min-h-[600px] lg:h-[878px] gap-12 lg:gap-24"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full max-w-7xl gap-6 lg:gap-0"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1a1a1b] tracking-[-0.72px] leading-none text-center lg:text-left"
            variants={fadeInUp}
          >
            My <span className="text-[#fd853a]">Services</span>
          </motion.h2>
          <motion.p
            className="text-[16px] lg:text-[20px] font-medium text-white tracking-[-0.3px] max-w-[576px] leading-normal text-center lg:text-left"
            variants={fadeInUp}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="flex flex-col gap-8 lg:gap-[39px] items-center w-full"
          variants={fadeInUp}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative w-full max-w-[416px] h-[400px] lg:h-[508px] mx-auto group cursor-pointer"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Simplified card background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#686868]/20 to-[#404040]/30 rounded-[35px] backdrop-blur-sm border border-white/10" />

                {/* Image */}
                <div className="absolute left-4 lg:left-0 top-[120px] lg:top-[158px] right-4 lg:right-0 bottom-16 lg:bottom-[120px] flex flex-col items-center justify-center p-2 md:px-4">
                  <div
                    className="bg-center bg-cover bg-no-repeat rounded-[25px] lg:rounded-[35px] w-full h-[200px] lg:h-[307px]"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                </div>

                {/* Content */}
                <div className="absolute left-0 top-6 lg:top-11 right-0 flex flex-col gap-4 lg:gap-[23px] items-start px-4 lg:px-[37px]">
                  <h3 className="text-[24px] lg:text-[32px] font-medium text-white tracking-[-0.48px] leading-normal">
                    {service.title}
                  </h3>
                  <div className="relative w-full h-0">
                    <div className="absolute left-0 right-0 top-[-2px] bottom-0">
                      <img className="w-full h-full" src={imgLine3} alt="" />
                    </div>
                  </div>
                </div>

                {/* Arrow button */}
                <motion.div
                  className="absolute right-4 lg:right-[14px] bottom-4 lg:bottom-[14px] w-[80px] lg:w-[114px] h-[80px] lg:h-[114px] flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#1d2939] rounded-[40px] lg:rounded-[57px] w-full h-full flex items-center justify-center p-4 lg:p-[21px] group-hover:bg-[#fd853a] transition-colors duration-300">
                    <img
                      className="w-8 lg:w-12 h-8 lg:h-12"
                      src={imgIconOutlinedDirectionsStraightArrowsUpRight1}
                      alt=""
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <motion.div
            className="flex gap-2 lg:gap-[11.311px] items-center justify-center"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-[#fd853a] rounded-[20px] w-[40px] lg:w-[60.324px] h-[12px] lg:h-[15.081px]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="bg-[#e4e7ec] rounded-[20px] w-[12px] lg:w-[15.081px] h-[12px] lg:h-[15.081px]"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
