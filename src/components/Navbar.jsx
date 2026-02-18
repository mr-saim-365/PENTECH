import React from "react";
import { useState, useEffect, useCallback } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const debouncedObserver = useCallback(() => {}, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname); // remove hash
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  return (
    <header className="pt-5 text-[#222222] font-semibold ">
      {/* <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full md:px-0 md:w-[80%] 2xl:w-[90%] flex justify-end items-center px-4"
      >

      </motion.div> */}

      <div ref={ref} className="mb-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto flex  justify-between items-center  px-4 md:w-[90%] 2xl:w-[80%] md:px-1"
          >
            <div className="flex flex-col gap-4">
              <div>
                <img
                  className="w-[100px] h-[100px]"
                  src="/images/logo.png"
                  alt="PENTECH Logo"
                ></img>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="hidden sm:flex items-center  space-x-4"
            >
              <nav
                variants={itemVariants}
                className="hidden md:flex items-center space-x-6"
              >
                <Link
                  to="/"
                  className="hover:scale-105 transition-all hover:text-[#f14160]"
                >
                  Home
                </Link>

                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("services");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(
                        null,
                        "",
                        window.location.pathname,
                      );
                    }
                  }}
                  className="cursor-pointer hover:scale-105 transition-all hover:text-[#f14160]"
                >
                  Our Services
                </a>

                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("AboutUs");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(
                        null,
                        "",
                        window.location.pathname,
                      );
                    }
                  }}
                  className="cursor-pointer hover:scale-105 transition-all hover:text-[#f14160]"
                >
                  About Us
                </a>

                <div className="flex items-center space-x-4">
                  <Link
                    to="/Contact"
                    className="hover:scale-105 transition-all hover:text-[#f14160]"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="#"
                    className="hover:text-gray-700 hover:scale-110 transition-all"
                  >
                    <FaXTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-700 hover:scale-110 transition-all"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-pink-500 hover:scale-110 transition-all"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="hover:text-[#0A66C2] hover:scale-110 transition-all"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </nav>
            </motion.div>

            <button
              className="md:hidden  z-[100]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <IoMdClose size={15} className="w-5 h-5 text-[#262626] fixed top-6 right-6" />
              ) : (
                <IoMdMenu size={20} className="w-6 h-6 " />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-[#F1F2F4] text-[#262626] p-8 rounded-b-3xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6 text-lg font-medium">
                <li>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>

                <li
                  className="cursor-pointer hover:text-primary transition"
                  onClick={() => {
                    const section = document.getElementById("services");
                    section?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Our Services
                </li>

                <li
                  className="cursor-pointer hover:text-primary transition"
                  onClick={() => {
                    const section = document.getElementById("AboutUs");
                    section?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  About Us
                </li>

                <li>
                  <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
