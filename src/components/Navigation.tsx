import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#service" },
    { label: "Resume", href: "#resume" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <nav className="backdrop-blur-[7.5px] bg-neutral-900 border border-white rounded-[50px] px-2.5 py-0 h-[86px] w-[1298px] flex items-center justify-between">
          {/* Menu Items Left */}
          <div className="flex items-center gap-0">
            {menuItems.slice(0, 3).map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`px-8 py-4 rounded-[60px] transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-[#fd853a]"
                    : "hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[18px] font-bold tracking-[-0.3px] whitespace-nowrap text-white">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3 h-[86px] w-[307px] justify-center">
            <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#fd853a] text-white rounded-full text-[16px] font-bold">
              SM
            </div>
            <div className="ml-2">
              <span className="text-white text-[18px] font-bold">
                Shivam Mishra
              </span>
            </div>
          </div>

          {/* Menu Items Right */}
          <div className="flex items-center gap-0">
            {menuItems.slice(3).map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`px-8 py-4 rounded-[60px] transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-[#fd853a]"
                    : "hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[18px] font-bold tracking-[-0.3px] whitespace-nowrap text-white">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </nav>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <nav className="backdrop-blur-[7.5px] bg-neutral-900 border border-white rounded-[25px] px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-[#fd853a] text-white rounded-full text-sm font-bold">
              SM
            </div>
            <div>
              <span className="text-white text-sm font-bold">
                Shivam Mishra
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            className="mt-2 backdrop-blur-[7.5px] bg-neutral-900 border border-white rounded-[25px] overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`w-full px-6 py-4 text-left transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-[#fd853a] text-white"
                    : "text-white hover:bg-white/10"
                } ${
                  index !== menuItems.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-[16px] font-bold tracking-[-0.3px]">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
