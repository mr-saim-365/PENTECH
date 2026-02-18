// import React from 'react';
// import { motion } from "framer-motion";

// const itemVariants1 = {
//     hidden: { opacity: 0, x: -60 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8 },
//     },
// };

// const itemVariants2 = {
//     hidden: { opacity: 0, x: -90 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 1 },
//     },
// };

// const OurStory = () => {
//     return (
//         <div className="w-full relative py-20 text-[#222222] font-semibold">
//             <div className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center justify-center px-3 lg:w-[90%] 2xl:w-[70%] mx-auto">

//                 <motion.div
//                     className="flex flex-col gap-3 rounded-3xl w-full sm:w-[500px] md:w-[40%] lg:max-w-[450px] bg-[#222222]"
//                     variants={itemVariants1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     <div className="p-6">

//                         <h2 className="text-lg ">Join a community of thriving businesses and creators who trust us to bring their digital vision to life.</h2>
//                     </div>
//                     <div className="w-full h-[200px] overflow-hidden rounded-bl-3xl rounded-br-3xl [mask-image:radial-gradient(circle_at_top_left,_white,_transparent)]">
//                         <img src="/images/nature.jpg" alt="Styled Image" className="w-full h-full object-cover" />
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="relative flex flex-col md:flex-row gap-5 md:gap-0 2xl:gap-8  items-center w-full sm:w-[500px] lg:w-[800px] justify-between bg-[#222222] rounded-3xl  shadow-lg overflow-hidden"
//                     variants={itemVariants2}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                 >

//                     <div className="relative w-full md:w-1/2 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
//                         <img
//                             src="/images/OurStory.jpg"
//                             alt="Feature Image"

//                             className="w-full h-[35vh] sm:h-[50vh] md:clip-path-custom"
//                         />
//                     </div>

//                     <div className="w-full md:w-1/2 text-white text-center px-6 pt-5 pb-12 md:p-10 md:text-left space-y-4">
//                         <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
//                             Experience <span className="text-green-200">the power of</span> <br />
//                             <span className="text-green-200">speed</span> with our <br />
//                             cutting-edge <br />
//                             <span className="text-purple-300">hosting infrastructure</span>
//                         </h2>

//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default OurStory;

import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaCloud,
  FaRobot,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "Lightning Fast Performance",
    desc: "Optimized architecture ensures blazing speed and smooth user experience across all devices.",
    icon: FaBolt,
    theme: {
      bg: "bg-[#6D6D6D]",
      title: "text-[#ffffff]",
      text: "text-[#ffffff]",
    },
  },
  {
    title: "Secure by Design",
    desc: "Advanced security layers protect your data with enterprise-grade encryption and monitoring.",
    icon: FaShieldAlt,
    theme: {
      bg: "bg-[#F498AC]",
      title: "text-[#2D2D2D]",
      text: "text-[#262626]/80",
    },
  },
  {
    title: "Cloud Integration",
    desc: "Seamlessly connect with cloud services for scalability and collaboration.",
    icon: FaCloud,
    theme: {
      bg: "bg-[#F1F2F4]",
      title: "text-[#2D2D2D]",
      text: "text-[#262626]",
    },
  },
  {
    title: "AI Automation",
    desc: "Smart automation tools powered by AI to streamline workflows.",
    icon: FaRobot,
    theme: {
      bg: "bg-[#f14160]",
      title: "text-[#ffffff]",
      text: "text-[#ffffff]",
    },
  },
  {
    title: "Real-time Analytics",
    desc: "Live dashboards and insights to drive smarter decisions.",
    icon: FaChartLine,
    theme: {
      bg: "bg-[#F1F2F4]",
      title: "text-[#2D2D2D]",
      text: "text-[#262626]",
    },
  },
  {
    title: "24/7 Support",
    desc: "Dedicated support team available anytime you need help.",
    icon: FaHeadset,
    theme: {
      bg: "bg-[#6D6D6D]",
      title: "text-[#ffffff]",
      text: "text-[#ffffff]",
    },
  },
];

const ProductFeatures = () => {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful Product Features
        </h2>
        <p className="text-[#FFFFFF80] max-w-2xl mx-auto">
          Built with cutting-edge technology to deliver performance, security,
          and scalability for modern businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className={`p-8 rounded-2xl border-none bg-gradient-to-br ${feature.theme.bg}
                backdrop-blur-md hover:-translate-y-2 transition duration-300`}
            >
              <Icon className={`text-4xl mb-4 text-[#262626] ${feature.theme.icon}`} />

              <h3
                className={`text-2xl font-semibold mb-4 ${feature.theme.title}`}
              >
                {feature.title}
              </h3>

              <p className={`font-semibold ${feature.theme.text}`}>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductFeatures;
