

import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful Product Features
        </h2>
        <p className="text-[#FFFFFF80] max-w-2xl mx-auto">
          Built with cutting-edge technology to deliver performance, security,
          and scalability for modern businesses.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${feature.theme.bg}
                backdrop-blur-md relative overflow-hidden group`}
            >
    
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur-xl"></div>

              <Icon className={`text-4xl mb-4 text-[#262626] ${feature.theme.icon}`} />

              <h3
                className={`text-2xl font-semibold mb-4 ${feature.theme.title}`}
              >
                {feature.title}
              </h3>

              <p className={`font-semibold ${feature.theme.text}`}>
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );

};

export default ProductFeatures;
