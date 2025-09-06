import React, { useState } from "react";
import { motion } from "motion/react";
import {
  imgVector17,
  imgFrame1,
  img495AverageRatings,
  img25WinningAwards,
} from "../imports/svg-k05rk";

export function CallToActionSection() {
  // Local state for the form and modal
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setShowModal(true);
      setSent(false);
      return;
    }
    // Show confirmation modal before opening mail client
    setShowModal(true);
    setSent(false);
  };

  const ownerEmail = "shivammishra20305@gmail.com"; // recipient

  const sendEmail = () => {
    // Compose mailto and open mail client. No backend required.
    setSending(true);
    const subject = encodeURIComponent("New project inquiry from portfolio");
    const body = encodeURIComponent(
      `Visitor Email: ${email}\n\nPlease reply to the visitor.`
    );
    const to = encodeURIComponent(ownerEmail);

    // Gmail web compose URL (opens in new tab on desktop)
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    // Gmail app URL scheme (attempt on mobile). 'googlegmail://' works for iOS and Android Gmail app.
    const gmailApp = `googlegmail://co?to=${to}&subject=${subject}&body=${body}`;

    // Fallback mailto
    const mailto = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;

    // Detect mobile
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Try to open Gmail app via custom scheme. If the app isn't installed,
      // the browser will ignore the scheme — fallback to Gmail web after short delay.
      try {
        window.location.href = gmailApp;
      } catch (e) {
        // If anything fails, fallback to mailto
        window.location.href = mailto;
      }

      // After a short delay, fallback to Gmail web compose (opens in the browser)
      setTimeout(() => {
        try {
          window.location.href = gmailWeb;
        } catch (e) {
          window.location.href = mailto;
        }
      }, 900);
    } else {
      // Desktop: open Gmail web compose in a new tab
      try {
        window.open(gmailWeb, "_blank");
      } catch (e) {
        window.open(mailto, "_blank");
      }
    }

    // Simulate send animation states (if the page remains open)
    setTimeout(() => {
      setSending(false);
      setSent(true);
      // auto-close modal after a short delay
      setTimeout(() => {
        setShowModal(false);
        setSent(false);
        setEmail("");
      }, 1500);
    }, 800);
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center py-12 lg:py-[98px] w-full px-4">
        <div className="max-w-[799px] flex flex-col justify-center text-center mb-8 lg:mb-6">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-[#344054] tracking-[-0.96px] leading-normal">
            Have an Awesome Project Idea?{" "}
            <span className="text-[#fd853a]">Let's Discuss</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:gap-2.5 items-center justify-center w-full max-w-4xl">
          {/* Email input */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="backdrop-blur-[7.5px] border border-[#e4e7ec] rounded-[25px] lg:rounded-[50px] h-[60px] lg:h-[86px] w-full max-w-[832px] mx-auto flex items-center justify-between p-2 lg:p-[14px]">
              <div className="flex items-center gap-3 lg:gap-4 flex-1">
                <div className="bg-[#ffead5] rounded-[50px] w-12 lg:w-16 h-12 lg:h-[58px] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 lg:w-8 h-6 lg:h-8">
                    <img className="w-full h-full" src={imgVector17} alt="" />
                  </div>
                </div>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none outline-none text-[16px] lg:text-[20px] font-medium text-black tracking-[-0.3px] flex-1 placeholder-gray-500"
                  aria-label="Your email address"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#fd853a] rounded-[30px] lg:rounded-[60px] px-6 lg:px-10 py-3 lg:py-5 hover:bg-[#e5762f] transition-all duration-300 flex items-center gap-3 flex-shrink-0"
                aria-label="Send email"
              >
                {sending ? (
                  <svg
                    className="w-5 h-5 animate-spin text-white"
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
                ) : sent ? (
                  <svg
                    className="w-5 h-5 text-white"
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
                <span className="font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.3px] whitespace-nowrap">
                  {sending ? "Sending..." : sent ? "Sent" : "Send"}
                </span>
              </motion.button>
            </div>
          </form>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-[770px] gap-4 md:gap-0">
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 lg:w-6 h-5 lg:h-6">
                <img className="w-full h-full" src={imgFrame1} alt="" />
              </div>
              <span className="text-[14px] lg:text-[16px] text-black tracking-[-0.24px] leading-normal">
                90% Client Retention Rate
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-5 lg:w-6 h-5 lg:h-6">
                <img
                  className="w-full h-full"
                  src={img495AverageRatings}
                  alt=""
                />
              </div>
              <span className="text-[14px] lg:text-[16px] text-black tracking-[-0.24px] leading-normal">
                12+ Projects Successfully Delivered
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-5 lg:w-6 h-5 lg:h-6">
                <img
                  className="w-full h-full"
                  src={img25WinningAwards}
                  alt=""
                />
              </div>
              <span className="text-[14px] lg:text-[16px] text-black tracking-[-0.24px] leading-normal">
                100% Secure & Confidential Projects
              </span>
            </div>
          </div>
        </div>
        {/* Confirmation modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => {
                if (!sending) setShowModal(false);
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.18 }}
              className="relative bg-white rounded-lg shadow-lg w-[92%] sm:w-[480px] p-6 z-10"
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Confirm send
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                This will open your mail client to send an email to
                <span className="font-medium"> {ownerEmail}</span> with the
                visitor's email included. Proceed?
              </p>
              {!email && (
                <div className="text-sm text-red-500 mb-4">
                  Please enter a valid email address above.
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 rounded-md border hover:bg-gray-100"
                  onClick={() => !sending && setShowModal(false)}
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-md bg-[#fd853a] text-white flex items-center gap-2 disabled:opacity-60"
                  onClick={() => {
                    if (!email) return;
                    sendEmail();
                  }}
                  disabled={!email || sending}
                >
                  {sending ? (
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
                  ) : sent ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
                    {sending ? "Opening mail" : sent ? "Done" : "Open Mail App"}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
