import React from "react";
import { useState, useEffect, useCallback } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
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

  return (
    <header className="pt-5">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full md:px-0 md:w-[80%] 2xl:w-[90%] flex justify-end items-center px-4"
      >


        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-4"
        >
          <a href="mailto:contact@example.com" className="flex items-center ">
            <span>infoclix@gmail.com</span>
          </a>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">+92 21-2427626</span>
        </motion.div>
      </motion.div>

      <div ref={ref} className="mb-4 mt-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto flex text-[#ffffff] justify-between items-center px-4 md:w-[90%] 2xl:w-[80%] md:px-1"
          >
            {/* <Link
              to="#"
              className="flex items-center space-x-1 text-2xl font-bold"
            >
        
              <img className="w-[80px] h-[60px]" src="/images/logo3.png"></img>
      
        
            </Link> */}

            <nav
              variants={itemVariants}
              className="hidden md:flex items-center space-x-6"
            >
              <Link to="/" className="hover:scale-110 transition-all">
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
                      window.location.pathname
                    );
                  }
                }}
                className="cursor-pointer hover:scale-110 transition-all"
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
                      window.location.pathname
                    );
                  }
                }}
                className="cursor-pointer hover:scale-110 transition-all"
              >
                About Us
              </a>
            </nav>

            <motion.div
              variants={itemVariants}
              className="hidden sm:flex items-center space-x-4"
            >
              <Link to="/Contact" className="hover:scale-110 transition-all">
                Contact Us
              </Link>
              <a href="#" className="hover:text-gray-700 hover:scale-110 transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-700 hover:scale-110 transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:text-pink-500 hover:scale-110 transition-all">
                <FaInstagram size={18} />
              </a>
            </motion.div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <IoMdClose size={15} className="w-5 h-5" />
              ) : (
                <IoMdMenu size={20} className="w-6 h-6 " />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          animate={{
            opacity: 1,
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
          }}
          transition={{ duration: 0.4 }} // Using transform for smooth transition
          className="md:hidden text-[#ffffff] bg-[#222222] rounded-md mx-2 p-6 overflow-hidden"
        >
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>

            <a
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("services");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(
                    null,
                    "",
                    window.location.pathname
                  );
                }
              }}
              className="cursor-pointer hover:text-primary transition"
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
                    window.location.pathname
                  );
                }
              }}
              className="cursor-pointer hover:text-primary transition"
            >
              About US
            </a>

            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
