import React from "react";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", section: "hero", type: "scroll" },
    { name: "Our Services", section: "services", type: "scroll" },
    { name: "About Us", section: "AboutUs", type: "scroll" },
    { name: "Contact Us", path: "/Contact", type: "link" },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, url: "#", color: "hover:text-white" },
    { icon: <FaFacebookF />, url: "#", color: "hover:text-[#1877F2]" },
    { icon: <FaInstagram />, url: "#", color: "hover:text-[#E4405F]" },
    { icon: <FaLinkedinIn />, url: "#", color: "hover:text-[#0A66C2]" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-[1001] flex items-center ">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
             <span className="text-white font-bold text-xl">B</span>
          </div> */}
          <img src="/images/logo.png" alt="logo" className="w-20 h-20"/>
          <span className="text-2xl font-bold tracking-tighter text-white">
            BIZ<span className="text-primary">ORTEX</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleScrollNavigation(link.section)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          ))}
        </nav>

        {/* Social Icons & CTA */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <div className="hidden xl:flex items-center space-x-4 border-r border-white/10 pr-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`text-white/50 ${social.color} transition-all duration-300 hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Link
            to="/Contact"
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/30"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-[1001] p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.1),transparent_70%)]"></div>
            
            <ul className="flex flex-col gap-8 text-center relative z-10">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.type === "link" ? (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-bold text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleScrollNavigation(link.section)}
                      className="text-4xl font-bold text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="mt-16 flex gap-6 relative z-10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
