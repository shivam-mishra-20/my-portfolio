import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { imgStar2 } from "../imports/svg-k05rk";

export function MovingTextSection() {
  const { ref, isInView } = useScrollAnimation();

  const skills = [
    "Python,",
    "C/C++",
    "React.js,Next.js,",
    "Node.js,",
    "TailwindCSS, Express.js",
    "MongoDB, Firebase, MySQL",
    "Figma, Canva",
    "Git, GitHub",
  ];

  const skillIcons = [
    new URL("../assets/python.png", import.meta.url).href,
    new URL("../assets/cpp.png", import.meta.url).href,
    new URL("../assets/react.png", import.meta.url).href,
    new URL("../assets/nodejs.png", import.meta.url).href,
    new URL("../assets/tailwind-css.png", import.meta.url).href,
    new URL("../assets/mongo-db.png", import.meta.url).href,
    new URL("../assets/figma.png", import.meta.url).href,
    new URL("../assets/github.png", import.meta.url).href,
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-[#fb6514] h-[100px] lg:h-[200px] overflow-hidden relative rounded-br-[24px] rounded-tl-[24px] w-full mx-0 py-4 lg:my-0"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="absolute flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-scroll-text">
        <div className="bg-white flex gap-[15px] items-center justify-start whitespace-nowrap py-4 lg:py-8">
          {/* Repeat the pattern multiple times for seamless scrolling */}
          {[...Array(8)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-[15px] items-center">
              {skills.map((skill, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center gap-[10px] lg:gap-[15px]"
                >
                  <div className="w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] flex-shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      src={skillIcons[index]}
                      alt={skill}
                    />
                  </div>
                  <span className="text-[20px] lg:text-[36px] text-black tracking-[-0.72px] leading-normal whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
