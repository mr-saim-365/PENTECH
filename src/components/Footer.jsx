import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import footerImage from "/images/footerImage.png";
import BIZORTEX from "/images/Bizortex.png";

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer id="footer" className="text-[#ffffff] relative">
      <div
        style={{ backgroundImage: `url(${footerImage})` }}
        ref={ref}
        className="w-full flex flex-col items-center"
      >
        <motion.div
          className="py-[80px] pb-[40px] md:w-[90%] px-8 md:px-0 flex items-center justify-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-wrap gap-8 justify-between w-full"
            variants={containerVariants}
          >
            <motion.div
              className="flex-1 min-w-[250px]"
              variants={itemVariants}
            >
              <Link href="index.html" className="flex items-center mb-6">
                <span className="text-3xl md:text-4xl font-bold tracking-wide">
                  BIZORTEX
                </span>
              </Link>

              <div className="flex flex-col space-y-4 mt-4 justify-center items-start">
                <div>
                  <h2 className="text-sm md:text-base 2xl:text-[20px] text-[#FFFFFFB8] font-semibold">
                    Follow Us
                  </h2>
                </div>

                <div className="flex space-x-3 justify-center items-start">
                  <Link
                    to="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border-[#FFFFFF25] border-2 bg-[#FFFFFF20] transition-all hover:scale-105 hover:bg-[#FFFFFF40] hover:border-[#FFFFFF40]"
                  >
                    <FaXTwitter size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:text-blue-700 transition-all  border-[#FFFFFF25] bg-[#FFFFFF20] hover:scale-105 hover:bg-[#FFFFFF40] hover:border-[#FFFFFF40]"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:text-pink-500 transition-all  border-[#FFFFFF25] bg-[#FFFFFF20]  hover:scale-105 hover:bg-[#FFFFFF40] hover:border-[#FFFFFF40]"
                  >
                    <IoLogoInstagram size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:text-[#0A66C2] transition-all  border-[#FFFFFF25] bg-[#FFFFFF20]  hover:scale-105 hover:bg-[#FFFFFF40] hover:border-[#FFFFFF40]"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[200px] justify-center items-center"
              variants={itemVariants}
            >
              <h4 className="text-sm md:text-base 2xl:text-[20px] text-[#FFFFFFB8] font-semibold pb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 font-medium ">
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="/">Home</Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105"
                    to={{
                      pathname: "/",
                      query: { scrollTo: "services" },
                    }}
                  >
                    0ur Services
                  </Link>
                </li>
                <li>
                  <Link
                  className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105"
                    to={{
                      pathname: "/",
                      query: { scrollTo: "AboutUs" },
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[200px]"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-sm md:text-base 2xl:text-[20px] text-[#FFFFFFB8] pb-3">
                Our Services
              </h4>
              <ul className="space-y-2 font-medium">
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Web Development</Link>
                </li>
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Logo Design</Link>
                </li> 
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Software Consultancy</Link>
                </li>
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Graphic Designing</Link>
                </li>
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Digital Marketing</Link>
                </li>
                <li>
                  <Link className="hover:text-[#f14160] inline-block transition-transform duration-200 hover:scale-105" to="#">Accounts Consultancy</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[250px] "
              variants={itemVariants}
            >
              <h4 className="text-base font-bold pb-3 text-[#FFFFFFB8]">
                Contact Us
              </h4>
              <p className="mt-4">
                <strong>Phone:</strong> <span>0321-2427626</span>
              </p>
              <p>
                <strong>Email:</strong> <span>infoclix@gmail.com</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-8 border-t py-8 border-white/20  w-full px-4 md:px-0"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <motion.div className="w-[90%] mx-auto">
            {/* <p className="mb-1">
              © <span>Copyright</span> <strong className="px-1">Impact</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="text-sm mt-1">
              Designed by <Link to="#">PENTECH</Link>
            </div> */}
            {/* <div className="p-[10px]">
              <img src={BIZORTEX} alt="BIZORTEX Logo" className="w-full h-auto bg-none" />
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
