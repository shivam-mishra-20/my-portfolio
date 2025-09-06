import imgRectangle10 from "figma:asset/4e67ea948a015d26bcfdb5644675bd6f31432d99.png";
import imgRectangle11 from "figma:asset/d1041122e2b62f51cdbd176c4eeacbe9c44a919a.png";
import imgRectangle12 from "figma:asset/a9efb1a5caccf6eec789d9b6dce43cff97455cfb.png";
import {
  imgRectangle9,
  imgIconOutlinedDirectionsStraightArrowsUpRight1,
  imgEllipse22,
} from "../imports/svg-k05rk";

export function BlogSection() {
  const blogPosts = [
    {
      image: imgRectangle10,
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    },
    {
      image: imgRectangle11,
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
    },
    {
      image: imgRectangle12,
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center overflow-hidden relative">
        <div className="flex flex-col gap-8 lg:gap-12 items-center justify-start px-4 lg:px-[71px] py-12 lg:py-[97px] relative w-full">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-6 lg:gap-0">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#344054] tracking-[-0.72px] leading-normal">
                From my
                <br />
                blog post
              </h2>
            </div>
            <button className="bg-[#fd853a] rounded-[60px] px-8 lg:px-10 py-4 lg:py-5 hover:bg-[#e5762f] transition-all duration-300">
              <span className="text-[18px] lg:text-[20px] font-bold text-white tracking-[-0.3px] whitespace-nowrap">
                See All
              </span>
            </button>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 w-full max-w-7xl">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 lg:gap-[35px] items-start justify-start group cursor-pointer"
              >
                {/* Image with arrow */}
                <div className="relative shadow-[0px_4px_55px_0px_rgba(0,0,0,0.05)] w-full">
                  <div className="w-full aspect-[416/432] relative rounded-[20px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={post.image}
                      alt=""
                    />
                  </div>

                  <div className="absolute right-4 bottom-4 w-[80px] lg:w-[114px] h-[80px] lg:h-[114px] flex items-center justify-center">
                    <div className="bg-[#1d2939] rounded-[40px] lg:rounded-[57px] w-full h-full flex items-center justify-center p-4 lg:p-[21px] group-hover:bg-[#fd853a] transition-colors duration-300">
                      <img
                        className="w-8 lg:w-12 h-8 lg:h-12"
                        src={imgIconOutlinedDirectionsStraightArrowsUpRight1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="bg-[#f2f4f7] rounded-[24px] px-6 lg:px-8 py-3 lg:py-[15px] hover:bg-[#fd853a] hover:text-white transition-colors duration-300">
                  <span className="text-[16px] lg:text-[20px] text-black leading-normal whitespace-nowrap">
                    {post.category}
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[35px] items-start justify-start">
                  <div className="flex gap-2.5 items-center justify-start">
                    <div className="w-[9px] h-[9px]">
                      <img
                        className="w-full h-full"
                        src={imgEllipse22}
                        alt=""
                      />
                    </div>
                    <span className="text-[16px] lg:text-[20px] text-[#344054] leading-normal">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-center justify-start">
                    <div className="w-[9px] h-[9px]">
                      <img
                        className="w-full h-full"
                        src={imgEllipse22}
                        alt=""
                      />
                    </div>
                    <span className="text-[16px] lg:text-[20px] text-[#344054] leading-normal">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="w-full">
                  <h3 className="text-[20px] md:text-[24px] lg:text-[32px] text-[#344054] leading-normal">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
