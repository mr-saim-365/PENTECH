
import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Cards = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 1, delay: 0.8 } },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div ref={ref} className="bg-[linear-gradient(to_top_left,_#0b121e_80%,_#2f3a4d_100%)]">
      <div className="min-h-screen text-white px-3 flex flex-wrap gap-6 items-center lg:w-[90%] 2xl:w-[70%] mx-auto justify-center">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">

          <div className="flex flex-col gap-5">

            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-[#222222] rounded-3xl w-[320px] sm:w-[450px] md:w-[360px] lg:w-[450px] shadow-lg flex flex-col"
            >
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold">Fast Websites, Always</h2>
                <p className="text-white/60 text-sm mt-2">
                  Your website will load super fast because we use the latest
                  technology and powerful servers.
                </p>
              </div>

              <div className="flex flex-col gap-3 px-6 sm:px-14 pb-5">
                {[
                  {
                    label: "CLIX",
                    percent: "90%",
                    color: "from-purple-400 to-pink-400",
                  },
                  { label: "Other1", percent: "40%", color: "bg-[#2E2E2E]" },
                  { label: "Other2", percent: "30%", color: "bg-[#2E2E2E]" },
                  { label: "Other3", percent: "20%", color: "bg-[#2E2E2E]" },
                ].map((item, idx) => (
                  <div key={idx} className="mt-4 flex gap-3 items-center">
                    <p className="text-[15px] font-semibold">{item.label}</p>
                    <div className="w-full h-3 bg-[#3B3B3B] rounded-lg p-3 relative">
                      <div
                        className={`${
                          item.color.includes("bg-")
                            ? item.color
                            : `bg-gradient-to-r ${item.color}`
                        } h-3 rounded-lg p-3 absolute top-0 left-0`}
                        style={{ width: item.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

 
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-[#222222] rounded-3xl w-[320px] sm:w-[450px] md:w-[360px] lg:w-[450px] shadow-lg flex flex-col gap-5"
            >
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold">Help When You Need It</h2>
                <p className="text-white/60 text-sm mt-2">
                  Need help? We're here 24/7. Our team is super friendly and
                  ready to help you with anything.
                </p>
              </div>

              <div className="mt-4 flex justify-center px-3 pb-5 relative">

                <div className="bg-[#3B3B3B] rounded-full w-[130px] h-[130px] flex items-center justify-center mr-10">
                  <svg
                    width="80"
                    height="80"
                    viewBox="-4 -4 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientId"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                    <MdMarkEmailUnread
                      width="100%"
                      height="100%"
                      style={{
                        fill: "url(#gradientId)",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </svg>
                </div>


                <div className="bg-[#3B3B3B] rounded-[50%] w-[130px] h-[130px] p-2 flex items-center justify-center z-50 absolute">
                  <div className="flex items-center justify-center p-3 rounded-[50%] w-[60px] h-[60px] bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                    <IoMdVideocam size={30} style={{ color: "#ffffff" }} />
                  </div>
                </div>


                <div className="bg-[#3B3B3B] rounded-full w-[130px] h-[130px] flex items-center justify-center ml-10">
                  <svg
                    width="70"
                    height="70"
                    viewBox="-4 -3 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientId"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                    <FaPhoneAlt
                      width="100%"
                      height="100%"
                      style={{
                        fill: "url(#gradientId)",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>


          <div className="flex flex-col gap-5">

            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              className="bg-[#222222] rounded-3xl w-[320px] sm:w-[450px] md:w-[360px] lg:w-[450px] shadow-lg"
            >
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold">Grow Your Website Easily</h2>
                <p className="text-gray-400 text-sm mt-2">
                  If your website gets bigger, no worries! You can easily make
                  it bigger too.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col px-20">
                  <span className="text-lg font-bold">56%+</span>
                  <span className=" text-white/60">Visitors</span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="rounded-3xl"
                  >
                    <defs>
                      <linearGradient
                        id="strokeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#FF6A6A" />
                        <stop offset="50%" stopColor="#A680FF" />
                        <stop offset="100%" stopColor="#7D7DFF" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="#3B3B3B"
                      d="M0,256L18.5,261.3C36.9,267,74,277,111,245.3C147.7,213,185,139,222,128C258.5,117,295,171,332,208C369.2,245,406,267,443,240C480,213,517,139,554,106.7C590.8,75,628,85,665,106.7C701.5,128,738,160,775,176C812.3,192,849,192,886,202.7C923.1,213,960,235,997,240C1033.8,245,1071,235,1108,197.3C1144.6,160,1182,96,1218,80C1255.4,64,1292,96,1329,117.3C1366.2,139,1403,149,1422,154.7L1440,160L1440,320L0,320Z"
                    ></path>
                    <path
                      fill="none"
                      stroke="url(#strokeGradient)"
                      strokeWidth="15"
                      d="M0,256L18.5,261.3C36.9,267,74,277,111,245.3C147.7,213,185,139,222,128C258.5,117,295,171,332,208C369.2,245,406,267,443,240C480,213,517,139,554,106.7C590.8,75,628,85,665,106.7C701.5,128,738,160,775,176C812.3,192,849,192,886,202.7C923.1,213,960,235,997,240C1033.8,245,1071,235,1108,197.3C1144.6,160,1182,96,1218,80C1255.4,64,1292,96,1329,117.3C1366.2,139,1403,149,1422,154.7L1440,160"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              className="bg-[#222222] rounded-3xl w-[320px] sm:w-[450px] md:w-[360px] lg:w-[450px] shadow-lg flex flex-col gap-5"
            >
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold">Keep Your Website Safe</h2>
                <p className="text-white/60 text-sm mt-2">
                  We've got a bunch of security tools to make sure your website
                  stays safe from bad stuff.
                </p>
              </div>

              <div className="mb-8 mx-6 py-2 px-4 bg-[#3B3B3B] rounded-lg flex items-center gap-2">
                <button className="p-2 rounded-[50px] text-[#ffffff] bg-gradient-to-r w-[120px] from-purple-400 via-indigo-300 to-pink-400">
                  <span>🔒 Secure</span>
                </button>

                <span className="text-gray-400">https://website.id</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              className="bg-[#222222] rounded-3xl w-[320px] sm:w-[450px] md:w-[360px] lg:w-[450px] shadow-lg flex flex-col"
            >
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold">
                  Great Service, Affordable Prices
                </h2>
                <p className="text-white/60 text-sm mt-2">
                  We give you a lot for your money. Big websites or small, we
                  have a plan that fits your budget.
                </p>
              </div>

              <div className="flex gap-2 py-8 overflow-x-auto  w-full hide-scrollbar px-3">
                <div className="bg-[#ffffff] rounded-xl p-3 md:p-5 flex flex-col gap-1 min-w-[80%]">
                  <h4 className="text-black text-[16px] font-bold">Premium</h4>
                  <p className="text-gray-500 text-[14px]">
                    Prioritizing top-tier performance
                  </p>
                </div>

                <div className="bg-[#ffffff] rounded-xl p-3 md:p-5 flex flex-col gap-1 min-w-[90%]">
                  <h4 className="text-black text-[16px] font-bold">Business</h4>
                  <p className="text-gray-500 text-[14px]">
                    Scalable hosting tailored for growing businesses
                  </p>
                </div>

                <div className="bg-[#ffffff] rounded-xl  p-3 md:p-5 flex flex-col gap-1 min-w-full">
                  <h4 className="text-black text-[16px] font-bold">Gold</h4>
                  <p className="text-gray-500 text-[14px]">
                    Balanced hosting solution for small to medium-sized web.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
