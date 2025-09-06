import { imgFrame70, imgFrame71, imgLine4 } from "../imports/svg-k05rk";

export function WorkExperienceSection() {
  const experiences = [
    {
      company: "Abhigyan Gurukul",
      period: "Technical Lead | 2024–2025",
      position: "Technical Lead",
      description: [
        "Assisted instructors in delivering technical content, resolving student doubts, and evaluating assignments.",
        "Worked with the tech team to build a web application for Abhigyan Gurukul consisting of a Student Management System, Analytics Dashboard and Website Traffic Analysis.",
      ],
    },
    {
      company: "Self-Employed",
      period: "May 2025 – Present",
      position: "Freelance UI/UX Designer / Developer",
      description: [
        "Designed and developed web and mobile apps for clients in e-commerce, fleet management, and food tech.",
        "Delivered responsive UI/UX using React, Next.js, TailwindCSS and Figma.",
        "Built scalable backends using Firebase and MongoDB when projects required full-stack solutions.",
      ],
    },
  ];

  return (
    <div className="w-full min-h-[800px] lg:h-[927px] bg-white py-8 lg:py-0">
      <div className="flex flex-col items-center overflow-hidden relative h-full">
        <div className="flex flex-col min-h-[600px] lg:h-[827px] items-center justify-start px-4 lg:px-[71px] py-0 relative w-full">
          {/* Header */}
          <div className="flex items-center justify-center py-8 lg:py-[85px] w-full">
            <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-medium text-[#344054] tracking-[-0.96px] leading-none text-center">
              My <span className="text-[#fd853a]">Work Experience</span>
            </h2>
          </div>

          {/* Experience Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl gap-8 lg:gap-0">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-8 lg:hidden w-full">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[#f2f4f7] rounded-[20px] p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        src={index === 1 ? imgFrame71 : imgFrame70}
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] md:text-[24px] font-semibold text-[#344054] tracking-[-0.6px] leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-[16px] md:text-[18px] text-[#98a2b3] tracking-[-0.36px] leading-none">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-semibold text-[#344054] tracking-[-0.6px] leading-tight mb-2">
                      {exp.position}
                    </h4>
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc list-inside text-[16px] md:text-[18px] font-medium text-[#98a2b3] tracking-[-0.3px] leading-normal space-y-1">
                        {exp.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.description && (
                        <p className="text-[16px] md:text-[18px] font-medium text-[#98a2b3] tracking-[-0.3px] leading-normal">
                          {exp.description}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start justify-between w-full">
              {/* Left - Company List */}
              <div className="flex flex-col gap-[102px] items-start justify-start flex-1">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3.5 items-start justify-start"
                  >
                    <h3 className="text-[32px] xl:text-[40px] font-semibold text-[#344054] tracking-[-0.6px] leading-none">
                      {exp.company}
                    </h3>
                    <p className="text-[20px] xl:text-[24px] text-[#98a2b3] tracking-[-0.36px] leading-none">
                      {exp.period}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center - Timeline */}
              <div className="flex items-start justify-start relative h-[400px] gap-2.5 mx-8">
                <div className="flex flex-col h-full items-start justify-between">
                  {experiences.map((_, i) => (
                    <div key={i} className="w-12 h-12">
                      <img
                        className="w-full h-full"
                        src={i % 2 === 1 ? imgFrame71 : imgFrame70}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Position Details */}
              <div className="flex flex-col gap-12 items-start justify-start flex-1">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-3.5 items-start justify-start ${
                      index === experiences.length - 1 ? "pb-12" : ""
                    }`}
                  >
                    <h4 className="text-[32px] xl:text-[40px] font-semibold text-[#344054] tracking-[-0.6px] leading-none">
                      {exp.position}
                    </h4>
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc list-inside text-[18px] xl:text-[20px] font-medium text-[#98a2b3] tracking-[-0.3px] max-w-[444px] leading-normal space-y-2">
                        {exp.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.description && (
                        <p className="text-[18px] xl:text-[20px] font-medium text-[#98a2b3] tracking-[-0.3px] max-w-[444px] leading-normal">
                          {exp.description}
                        </p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
