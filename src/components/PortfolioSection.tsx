import { motion } from "motion/react";
import { useState } from "react";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../hooks/useScrollAnimation";
const imgFrame26 = new URL("../assets/image-2.png", import.meta.url).href;
const imgFrame26b = new URL("../assets/image-3.png", import.meta.url).href;
const imgFrame26c = new URL("../assets/image-1.png", import.meta.url).href;
const imgFrame26d = new URL("../assets/web design.png", import.meta.url).href;
import {
  imgUiIconArrowDownLight,
  imgIconOutlinedDirectionsStraightArrowsDownRight,
} from "../imports/svg-k05rk";

export function PortfolioSection() {
  const { ref, isInView } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const categories = [
    "Landing Page",
    "Product Design",
    "Software Development",
    "Mobile App Development",
    "Animation",
  ];

  const scrollToProject = () => {
    // Show full grid of items when See All is clicked
    setShowAll(true);
    const element = document.getElementById("project");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={ref}
      className="w-full bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center overflow-hidden relative">
        <motion.div
          className="flex flex-col gap-8 lg:gap-12 items-center justify-start px-4 lg:px-[71px] py-12 lg:py-[97px] relative w-full"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-6 lg:gap-0"
            variants={fadeInUp}
          >
            <motion.div
              className="flex flex-col justify-center text-center lg:text-left"
              variants={fadeInUp}
            >
              <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-[#344054] tracking-[-0.96px] leading-normal">
                Lets have a look at my{" "}
                <span className="text-[#fd853a]">Work</span>
              </h2>
            </motion.div>
            <motion.button
              onClick={() => setShowAll((s) => !s)}
              className="bg-[#fd853a] rounded-[60px] px-8 lg:px-10 py-4 lg:py-5 hover:bg-[#e5762f] transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[18px] lg:text-[20px] font-bold text-white tracking-[-0.3px] whitespace-nowrap">
                {showAll ? "Show Less" : "See All"}
              </span>
            </motion.button>
          </motion.div>

          {/* Portfolio Items */}
          <motion.div
            className="flex flex-col gap-8 lg:gap-12 items-center w-full"
            variants={fadeInUp}
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-7xl"
              variants={staggerContainer}
            >
              {/* show 2 items by default, expand to all when showAll is true */}
              {[imgFrame26, imgFrame26b, imgFrame26c, imgFrame26d]
                .slice(0, showAll ? 4 : 2)
                .map((imgSrc, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-[20px] w-full aspect-[16/10] lg:aspect-[633/371] relative shadow-[0px_4px_55px_0px_rgba(0,0,0,0.05)] group cursor-pointer"
                    style={{
                      backgroundImage: `url('${imgSrc}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "0% 0%",
                    }}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col h-full items-start justify-between p-3 lg:p-[10px]">
                      <div className="flex gap-2.5 items-start justify-end w-full">
                        <div className="w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center">
                          <div className="rotate-[270deg]">
                            <motion.div
                              className="border border-[#fd853a] rounded-[60px] w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center p-2 lg:p-[15px] group-hover:bg-[#fff] transition-colors duration-300"
                              whileHover={{ rotate: 45 }}
                              transition={{ duration: 0.3 }}
                            >
                              <img
                                className="w-full h-full"
                                src={imgUiIconArrowDownLight}
                                alt=""
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap gap-2 lg:gap-3.5 items-center justify-center w-full"
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-[#f2f4f7] rounded-[24px] px-4 lg:px-8 py-2 lg:py-[15px] hover:bg-[#fd853a] hover:text-white transition-all duration-300 cursor-pointer"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fd853a",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[16px] lg:text-[20px] text-black leading-normal whitespace-nowrap">
                  {category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Description - structured, responsive list */}
          <motion.div className="w-full max-w-5xl" variants={fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg md:text-xl font-semibold text-[#111827]">
                  sharpr.in — Educational & Marketing Platform
                </h4>
                <p className="mt-2 text-sm text-[#6b7280]">
                  A scalable frontend built with React and TailwindCSS that
                  supports dynamic content and user management.
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-[#374151] space-y-1">
                  <li>
                    Responsive single-page application with modular components
                    and clean state management.
                  </li>
                  <li>
                    Integrated Firebase Auth for secure login and role-based
                    access.
                  </li>
                  <li>
                    Content management for courses, blogs and marketing pages
                    with performance optimizations.
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    className="text-sm text-[#fd853a] hover:underline"
                    href="https://www.sharpr.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit project
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg md:text-xl font-semibold text-[#111827]">
                  abhiyangurukul.com — Institute Management System
                </h4>
                <p className="mt-2 text-sm text-[#6b7280]">
                  A teacher-student dashboard system with announcements,
                  schedules and attendance workflows built with React and
                  Firebase.
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-[#374151] space-y-1">
                  <li>
                    Teacher and student dashboards with role-specific views and
                    permissions.
                  </li>
                  <li>
                    Realtime updates using Firebase for announcements and class
                    schedules.
                  </li>
                  <li>
                    Implemented authentication, profile management and
                    class-based content delivery.
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    className="text-sm text-[#fd853a] hover:underline"
                    href="https://www.abhigyangurukul.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg md:text-xl font-semibold text-[#111827]">
                  WheelBoard — Application & Admin UI (Figma → Implementation)
                </h4>
                <p className="mt-2 text-sm text-[#6b7280]">
                  Designed and developed a full admin dashboard and application
                  UI focused on fleet management workflows and responsive
                  layouts.
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-[#374151] space-y-1">
                  <li>
                    Admin dashboard with vehicle tracking, user management and
                    analytics.
                  </li>
                  <li>
                    Prioritized UX flows for quick task completion and
                    mobile-first design.
                  </li>
                  <li>
                    Handed off polished component library and design tokens for
                    devs.
                  </li>
                </ul>
                <div className="mt-3 flex gap-3">
                  <a
                    className="text-sm text-[#6b7280] underline"
                    href="https://www.figma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Figma
                  </a>
                  <a
                    className="text-sm text-[#fd853a] hover:underline"
                    href="http://bit.ly/4ITN5x7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prototype
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg md:text-xl font-semibold text-[#111827]">
                  WheelBoard — Landing Page
                </h4>
                <p className="mt-2 text-sm text-[#6b7280]">
                  Crafted a marketing landing page for the WheelBoard product
                  with clear conversion flows and performance-focused front-end
                  code.
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-[#374151] space-y-1">
                  <li>
                    High-converting hero, feature sections and testimonials.
                  </li>
                  <li>
                    Implemented using React and Firebase for simple CMS-backed
                    content.
                  </li>
                  <li>
                    Attention to accessibility, SEO basics and fast load times.
                  </li>
                </ul>
                <div className="mt-3">
                  <a
                    className="text-sm text-[#fd853a] hover:underline"
                    href="https://wheelboard.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
