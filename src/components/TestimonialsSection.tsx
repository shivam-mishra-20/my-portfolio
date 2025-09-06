import Avatar from "../assets/Avatar-2.png";
import { imgVector14 } from "../imports/svg-k05rk";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Fawzi Sayed",
      role: "Ui Ux Designer",
      rating: 5.0,
      text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      name: "Fawzi Sayed",
      role: "Ui Ux Designer",
      rating: 5.0,
      text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      name: "Fawzi Sayed",
      role: "Ui Ux Designer",
      rating: 5.0,
      text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
  ];

  return (
    <div className="bg-neutral-900 rounded-[25px] lg:rounded-[50px] max-w-8xl w-full mx-auto px-2 lg:px-2 min-h-[500px] lg:h-[863px] my-4">
      <div className="flex flex-col items-center overflow-hidden relative h-full">
        <div className="flex flex-col gap-12 lg:gap-24 min-h-[600px] lg:h-[863px] items-center justify-start px-4 lg:px-[71px] py-12 lg:py-[116px] relative w-full">
          {/* Header */}
          <div className="flex flex-col gap-3.5 items-center justify-start w-full max-w-4xl relative text-center">
            <div className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#fcfcfd] tracking-[-0.72px] leading-normal">
              Testimonials That
              <br />
              Speak to <span className="text-[#fd853a]">My Results</span>
            </div>
            <div className="flex flex-col justify-center max-w-[742px]">
              <p className="text-[16px] lg:text-[20px] text-center text-gray-50 tracking-[-0.3px] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed lobortis orci elementum egestas
                lobortis.
              </p>
            </div>

            {/* Decorative elements - Desktop only */}
            <div className="absolute right-[20%] top-[-9px] w-[27.5px] h-[28.5px] hidden lg:block">
              <img className="w-full h-full" src={imgVector14} alt="" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="w-full max-w-6xl">
            {/* Mobile - Single testimonial */}
            <div className="lg:hidden flex items-center justify-center">
              <div className="backdrop-blur-[10px] bg-gradient-to-br from-white/5 to-white/3 bg-white/10 border border-white/10 rounded-xl p-6 lg:p-6 flex flex-col gap-3 items-start justify-start relative max-w-md w-full">
                {/* Profile */}
                <div className="flex gap-3 items-start justify-start">
                  <div className="w-[54.835px] h-[54.835px]">
                    <img className="w-full h-full" src={Avatar} alt="" />
                  </div>
                  <div className="flex flex-col items-start justify-start text-[#fcfcfd]">
                    <div className="text-[18px] lg:text-[20px] font-bold leading-normal">
                      {testimonials[1].name}
                    </div>
                    <div className="text-[14px] lg:text-[15px] leading-normal text-gray-100">
                      {testimonials[1].role}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="flex flex-col justify-center">
                  <p className="text-[14px] lg:text-[16px] text-white tracking-[-0.3px] leading-normal">
                    {testimonials[1].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop - Multiple testimonials */}
            <div className="hidden lg:flex lg:justify-center lg:items-start lg:gap-8 w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative backdrop-blur-[12px] bg-gradient-to-br from-white/5 to-white/3 bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col gap-3 items-start justify-start overflow-hidden transition-transform duration-500 hover:scale-105 w-[380px] md:w-[460px] lg:w-[520px] xl:w-[580px]`}
                >
                  {/* Profile */}
                  <div className="flex gap-3 items-start justify-start">
                    <div className="w-[54.835px] h-[54.835px]">
                      <img className="w-full h-full" src={Avatar} alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start text-[#fcfcfd]">
                      <div className="text-[18px] xl:text-[22px] font-bold leading-normal">
                        {testimonial.name}
                      </div>
                      <div className="text-[14px] xl:text-[16px] leading-normal text-gray-100">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <div className="flex flex-col justify-center">
                    <p className="text-[14px] xl:text-[16px] text-white tracking-[-0.3px] leading-normal line-clamp-4">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
