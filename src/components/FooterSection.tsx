import React, { useState } from "react";
import { motion } from "motion/react";
import {
  imgIconOutlinedDirectionsStraightArrowsUpRight,
  imgFrame57,
  imgVuesaxBoldFacebook,
  imgVuesaxBoldYoutube,
  imgVuesaxBoldWhatsapp,
  imgUiIconTwitterFilled,
  imgUiIconSendFilled,
  imgLine5,
} from "../imports/svg-k05rk";

export function FooterSection() {
  // Updated to match the rest of the app (Shivam Mishra)
  // Assumption: using placeholder contact details for Shivam; replace with real ones if available
  const navigationLinks = [
    "Home",
    "About",
    "Service",
    "Resume",
    "Project",
    "Contact",
  ];
  const contactInfo = [
    "+91 9725194416",
    "shivammishra20305@gmail.com",
    "Vadodara, Gujarat",
  ];
  const socialIcons = [
    imgFrame57,
    imgVuesaxBoldFacebook,
    imgVuesaxBoldYoutube,
    imgVuesaxBoldWhatsapp,
    imgUiIconTwitterFilled,
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(
      href.toLowerCase().replace(" ", "")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // noop here - handled by controlled flow below
  };

  // Newsletter state and modal for confirmation (same behavior as CallToAction)
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterModal, setNewsletterModal] = useState(false);
  const [newsletterSending, setNewsletterSending] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const ownerEmail = "shivammishra20305@gmail.com";

  const handleNewsletterClick = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      setNewsletterModal(true);
      setNewsletterSent(false);
      return;
    }
    setNewsletterModal(true);
    setNewsletterSent(false);
  };

  const sendNewsletter = () => {
    setNewsletterSending(true);
    const subject = encodeURIComponent(
      "Newsletter subscription from portfolio"
    );
    const body = encodeURIComponent(`Subscriber Email: ${newsletterEmail}`);
    const to = encodeURIComponent(ownerEmail);
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    const gmailApp = `googlegmail://co?to=${to}&subject=${subject}&body=${body}`;
    const mailto = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      try {
        window.location.href = gmailApp;
      } catch (e) {
        window.location.href = mailto;
      }
      setTimeout(() => {
        try {
          window.location.href = gmailWeb;
        } catch (e) {
          window.location.href = mailto;
        }
      }, 900);
    } else {
      try {
        window.open(gmailWeb, "_blank");
      } catch (e) {
        window.open(mailto, "_blank");
      }
    }

    setTimeout(() => {
      setNewsletterSending(false);
      setNewsletterSent(true);
      setTimeout(() => {
        setNewsletterModal(false);
        setNewsletterSent(false);
        setNewsletterEmail("");
      }, 1500);
    }, 800);
  };

  return (
    <div className="bg-[#272727] rounded-tl-[24px] rounded-tr-[24px] min-h-[500px] lg:h-[685px] w-full">
      <div className="overflow-hidden relative h-full">
        <div className="flex flex-col min-h-[500px] lg:h-[685px] items-start justify-between px-4 lg:px-[71px] py-6 lg:py-[25px] relative w-full gap-8 lg:gap-0">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-[#fcfcfd] tracking-[-0.96px] leading-normal">
                Let's connect
              </h2>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-[#fd853a] rounded-[60px] flex items-center justify-center px-6 lg:px-5 py-3 lg:py-2.5 hover:bg-[#e5762f] transition-all duration-300"
            >
              <span className="text-[20px] lg:text-[25.692px] font-medium text-white tracking-[-0.3854px] whitespace-nowrap">
                Hire me
              </span>
              <div className="w-[32px] lg:w-[42px] h-[32px] lg:h-[42px] ml-2">
                <img
                  className="w-full h-full"
                  src={imgIconOutlinedDirectionsStraightArrowsUpRight}
                  alt=""
                />
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="relative w-full h-0">
            <div className="absolute inset-[-1px_-0.08%]">
              <img className="w-full h-full" src={imgLine5} alt="" />
            </div>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full">
            {/* Logo and description */}
            <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#fd853a] text-white rounded-full text-[16px] font-bold">
                  SM
                </div>
                <div className="ml-2">
                  <div className="text-white text-[18px] font-bold">
                    Shivam Mishra
                  </div>
                  <div className="text-[13px] text-white/80">
                    Software Developer
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-[16px] lg:text-[20px] text-[#fcfcfd] tracking-[-0.3px] leading-normal max-w-[500px] lg:max-w-[635px]">
                  Passionate Software Developer building responsive web
                  applications with React and Node.js. I focus on clean,
                  maintainable code, practical problem solving, and delivering
                  delightful user experiences across web and mobile devices.
                </p>
              </div>

              <div className="flex gap-[5px] items-start justify-start">
                {socialIcons.map((icon, index) => (
                  <button
                    key={index}
                    className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                  >
                    <img className="w-full h-full" src={icon} alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4 lg:gap-7 items-start justify-start">
              <div className="text-[18px] lg:text-[20px] font-semibold text-[#fd853a] tracking-[-0.3px] leading-normal">
                Navigation
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 items-start justify-start">
                {navigationLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link)}
                    className="text-[14px] lg:text-[16px] text-[#fcfcfd] tracking-[-0.24px] leading-normal hover:text-[#fd853a] transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 lg:gap-7 items-start justify-start">
              <div className="text-[18px] lg:text-[20px] font-semibold text-[#fd853a] tracking-[-0.3px] leading-normal">
                Contact
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 items-start justify-start">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="text-[14px] lg:text-[16px] text-[#fcfcfd] tracking-[-0.24px] leading-normal break-all"
                  >
                    {info}
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4 lg:gap-7 items-start justify-start">
              <div className="text-[18px] lg:text-[20px] font-semibold text-[#fd853a] tracking-[-0.3px] leading-normal">
                Get the latest information
              </div>
              <form
                onSubmit={handleNewsletterSubmit}
                className="w-full max-w-[304px]"
              >
                <div className="flex items-stretch">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white rounded-bl-[14px] rounded-tl-[14px] h-[51px] flex-1 px-3.5 py-[13px] text-[14px] lg:text-[16px] text-black tracking-[-0.24px] leading-normal outline-none border-none"
                  />
                  <motion.button
                    type="button"
                    onClick={(e) => handleNewsletterClick(e)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#fd853a] rounded-br-[14px] rounded-tr-[14px] h-[51px] w-[46px] flex items-center justify-center px-2 py-2.5 hover:bg-[#e5762f] transition-colors duration-300"
                  >
                    {newsletterSending ? (
                      <svg
                        className="w-4 h-4 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-75"
                        />
                      </svg>
                    ) : newsletterSent ? (
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <div className="w-4 h-4">
                        <img
                          className="w-full h-full"
                          src={imgUiIconSendFilled}
                          alt=""
                        />
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Newsletter confirmation modal */}
              {newsletterModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => {
                      if (!newsletterSending) setNewsletterModal(false);
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.18 }}
                    className="relative bg-white rounded-lg shadow-lg w-[92%] sm:w-[480px] p-6 z-10"
                  >
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">
                      Confirm subscribe
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      This will open your mail client to send a subscription
                      message to{" "}
                      <span className="font-medium">{ownerEmail}</span>.
                      Proceed?
                    </p>
                    {!newsletterEmail && (
                      <div className="text-sm text-red-500 mb-4">
                        Please enter a valid email address above.
                      </div>
                    )}

                    <div className="flex justify-end gap-3">
                      <button
                        className="px-4 py-2 rounded-md border hover:bg-gray-100"
                        onClick={() =>
                          !newsletterSending && setNewsletterModal(false)
                        }
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 rounded-md bg-[#fd853a] text-white flex items-center gap-2 disabled:opacity-60"
                        onClick={() => {
                          if (!newsletterEmail) return;
                          sendNewsletter();
                        }}
                        disabled={!newsletterEmail || newsletterSending}
                      >
                        {newsletterSending ? (
                          <svg
                            className="w-4 h-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              className="opacity-25"
                            />
                            <path
                              d="M4 12a8 8 0 018-8"
                              stroke="currentColor"
                              strokeWidth="4"
                              className="opacity-75"
                            />
                          </svg>
                        ) : newsletterSent ? (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : null}
                        <span>
                          {newsletterSending
                            ? "Opening mail"
                            : newsletterSent
                            ? "Done"
                            : "Open Mail App"}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="relative w-full h-0">
            <div className="absolute inset-[-1px_-0.08%]">
              <img className="w-full h-full" src={imgLine5} alt="" />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[513px] items-center lg:items-start justify-center lg:justify-start w-full text-[14px] lg:text-[20px] text-white tracking-[-0.3px] text-center lg:text-left">
            <div className="flex flex-col justify-center">
              <span className="leading-normal">
                Copyright© 2025 Shivam Mishra. All Rights Reserved.
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="leading-normal">
                User Terms & Conditions | Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
