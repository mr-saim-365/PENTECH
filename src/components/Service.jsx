
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const services = [
  {
    img: "/images/WebDevelopment.jpg",
    title: "Web Development",
    desc: "We craft responsive and visually stunning websites with user-friendly interfaces. Using modern technologies like React, Next.js, and Tailwind CSS, we ensure your web presence stands out and performs seamlessly across all devices.",
  },
  {
    img: "/images/serviceImage2.jpeg",
    title: "Logo Designing",
    desc: "We create unique and memorable logos that represent the essence of your brand. Our design team works closely with you to understand your business and develop a logo that reflects your values.",
  },
  {
    img: "/images/serviceImage3.jpeg",
    title: "Software Consultancy",
    desc: "Our software consultants provide expert guidance to help you navigate the complex world of technology solutions. We help you optimize your software infrastructure to drive efficiency and innovation.",
  },
  {
    img: "/images/serviceImage4.webp",
    title: "Graphic Designing",
    desc: "Your brand’s visual identity matters. We create Logo Designs, Brand Kits, Social Media Creatives, and Marketing Materials that reflect your brand’s message and style.",
  },
  {
    img: "/images/serviceImage5.jpeg",
    title: "Digital Marketing",
    desc: "We offer comprehensive digital marketing solutions to help you reach and interact with your audience. We combine strategy, creativity, and tech to grow your brand online.",
  },
  {
    img: "/images/serviceImage6.jpg",
    title: "Accounts Consultancy",
    desc: "We offer expert account consultancy to streamline your financial processes, improve profitability, and ensure compliance with sound financial advice and strategy.",
  },
    {
    img: "/images/Vpshosting.jpg",
    title: "VPS Hosting",
    desc: "We offer expert VPS hosting solutions to ensure your website runs smoothly and securely. Our hosting services are optimized for performance and reliability.",
  },
];


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);


  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (

     <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="text-[#222222] bg-[#F1F2F4] font-semibold py-20"
    >
      {/* DARK INNER SECTION */}
      <section className="bg-[#0e0e0e] text-white py-24 px-4 md:px-0 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f14160]/20 blur-[180px] rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 items-center text-center mb-10 md:mb-20 2xl:w-[70%] mx-auto"
          >
            <h1 className="text-[36px] md:text-[40px] 2xl:text-5xl font-bold uppercase">
              Our Services
            </h1>
            <p className="text-sm md:text-[16px] text-white/70">
              At BIZORTEX, we provide a full spectrum of digital solutions
              designed to accelerate your growth and streamline your operations.
              From design to deployment, we build experiences that are fast,
              functional, and future-ready.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <motion.div
              variants={fadeLeft}
              whileHover={{ scale: 1.02 }}
              className="relative h-[450px] rounded-3xl border border-white/20 overflow-hidden shadow-2xl group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[activeIndex].img}
                  src={services[activeIndex].img}
                  alt={services[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

            </motion.div>

            {/* RIGHT LIST */}
            <motion.div variants={fadeRight} className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border
                    ${
                      index === activeIndex
                        ? "bg-white/5 border-white/20 shadow-lg"
                        : "border-transparent hover:bg-white/5"
                    }`}
                >
                  <div className="flex items-start gap-4">

                    {/* Number */}
                    <span
                      className={`text-lg font-bold ${
                        index === activeIndex
                          ? "text-[#f14160]"
                          : "text-white/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>

                      {index === activeIndex && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-white/60 text-sm"
                        >
                          {service.desc}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <motion.section
        id="AboutUs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mt-20 px-4 md:px-6"
      >
        <motion.div variants={fadeUp} className="mx-auto text-center mb-12">
          <h2 className="text-4xl 2xl:text-5xl mb-4 font-bold">
            About Us
          </h2>
          <p className="text-[#555]">
            Crafting Tomorrow's Technology, Today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm md:text-[16px] items-center">

          <motion.div variants={fadeLeft}>
            <h3 className="text-[16px] sm:text-2xl font-semibold mb-4">
              Empowering Your Digital Future with Innovative Solutions
            </h3>
          </motion.div>

          <motion.div variants={fadeRight} className="lg:pl-8">
            <p className="italic mb-4 text-[#444]">
              Welcome to BIZORTEX — where innovation powers progress.
              As a premier digital software house, we specialize in crafting
              cutting-edge solutions that elevate businesses into the future.
            </p>
            <p className="text-[#555]">
              At BIZORTEX, our mission is to transform technology into impact.
              We don't just build software — we solve problems. Whether you're a
              startup or a global enterprise, we deliver tailored digital
              experiences that inspire, engage, and perform.
            </p>
          </motion.div>

        </div>
      </motion.section>

    </motion.section>
  );
};

export default Services;
