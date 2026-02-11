import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    img: "/images/serviceImage1.jpg",
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
];

const ServiceCard = React.memo(({ img, title, desc }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    className="bg-[#222222] rounded-2xl shadow-lg"
  >
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="w-full h-[40vh] rounded-tl-2xl rounded-tr-2xl object-cover"
    />
    <div className="p-5 md:py-10 md:px-5">
      <h3 className="text-[18px] md:text-[22px] mb-3 pb-2 font-semibold text-white">
        {title}
      </h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  </motion.div>
));

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    let transform = "";
    let zIndex = 5 - Math.abs(diff);
    let opacity = 1;
    let filter = "none";

    if (diff === 0) {
      transform = "scale(1) translateZ(0)";
      zIndex = 10;
    } else {
      const scale = 0.9 - Math.abs(diff) * 0.05;
      opacity = 1 - Math.abs(diff) * 0.15;

      if (diff < 0) {
        const translateX = -20 * Math.abs(diff);
        transform = `scale(${scale}) translateX(${translateX}%) rotateY(5deg) translateZ(-100px)`;
      } else {
        const translateX = 20 * Math.abs(diff);
        transform = `scale(${scale}) translateX(${translateX}%) rotateY(-5deg) translateZ(-100px)`;
      }
    }

    return {
      zIndex,
      opacity,
      transform,
      filter,
    };
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="services" className="bg-[linear-gradient(to_bottom_right,_#0b121e_80%,_#2f3a4d_100%)] py-20">
      <div className="w-full px-6 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto text-[#ffffff]">
         <div className="flex flex-col gap-3 items-center text-center mb-10 md:mb-20 2xl:w-[70%] mx-auto">
          <h1 className="text-[36px] md:text-[40px]">Our Services</h1>
          <p className="text-sm md:text-[16px]">At Cli-X, we provide a full spectrum of digital solutions designed to accelerate your growth and streamline your operations. From design to deployment, we build experiences that are fast, functional, and future-ready.</p>
         </div>
        <div
          ref={containerRef}
          className="hidden md:flex w-full h-[80vh] max-h-[600px] relative items-center justify-center"
          style={{ perspective: "1200px" }}
        >


          {services.map((src, index) => {
            const style = getCardStyle(index);

            return (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="absolute cursor-pointer"
                animate={{
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                transition={{ duration: 0.4 }}
                onClick={() => handleClick(index)}
                style={{
                  transform: style.transform,
                  filter: style.filter,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s ease-out",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "50%",
                  height: "100%",
                  boxShadow:
                    index === activeIndex
                      ? "0 10px 30px rgba(0,0,0,0.2)"
                      : "none",
                }}
              >
                <ServiceCard key={index} {...src} />
              </motion.div>
            );
          })}
        </div>

        {/* for small screen */}
        <div className="w-full md:hidden">
          <div className="overflow-x-auto flex gap-4  py-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {services.map((src, index) => (
              <div
                key={index}
                className="min-w-[80%] snap-center bg-[#222222] rounded-2xl shadow-lg"
              >
                <img
                  src={src.img}
                  alt={src.title}
                  loading="lazy"
                  className=" w-full h-[25vh] rounded-t-2xl object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {src.title}
                  </h3>
                  <p className="text-white/70 text-sm">{src.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="AboutUs" className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="mx-auto text-center mb-12"
          >
            <h2 className="text-3xl mb-4">About Us</h2>
            <p className="text-white/60">
              Crafting Tomorrow's Technology, Today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-[16px] sm:text-2xl font-semibold mb-4">
                Empowering Your Digital Future with Innovative Solutions
              </h3>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:pl-8"
            >
              <p className="italic text-white mb-4">
                Welcome to Cli-X — where innovation powers progress. As a
                premier digital software house, we specialize in crafting
                cutting-edge solutions that elevate businesses into the future.
                From sleek websites to powerful applications, our goal is
                simple: turn your digital vision into reality.
              </p>
              <p className="text-white">
                At Cli-X, our mission is to transform technology into impact. We
                don't just build software — we solve problems. Every project we
                undertake is guided by creativity, strategic thinking, and a
                relentless pursuit of excellence. Whether you're a startup or a
                global enterprise, we’re here to deliver tailored digital
                experiences that inspire, engage, and perform.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
