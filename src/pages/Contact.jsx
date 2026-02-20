"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import bgcontact from "/images/bgcontact.jpg";

// Lazy load Navbar and Footer to reduce initial load
// const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
// const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

const fadeInVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !cellNumber || !message) {
      setStatus("error");
      return;
    }

    const serviceId = "service_rmw1h2s";
    const templateId = "template_ff2x5wo";
    const publicKey = "1T9xbZKxb37vbLUVd";

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: cellNumber,

      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setCellNumber("");
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("emailError");
    }
  };

  return (
    <>
      <Navbar />
      <section className="overflow-hidden">


        <div className="pt-12  text-[#222222]">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-center mb-12"
          >
            <h2 className="text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base">
              Reach out today and let's start shaping your success together.
            </p>
          </motion.div>

          {/* Top section */}
          <div className="w-full md:w-[95%] px-4 md:px-0  2xl:w-[85%] lg:justify-between mx-auto 
    flex flex-col lg:flex-row gap-12 py-16 lg:py-[100px]">

            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col  gap-4"
            >
              <div className="flex items-center gap-1">
                <img src="/images/Rectangle.png" alt="Rectangle" />

                <p className="text-base sm:text-lg font-semibold">Got A Question?</p>
              </div>


              <h1 className="uppercase 
        text-3xl sm:text-5xl md:text-6xl 2xl:text-[72px] 
        font-bold leading-[1] ">
                Get in touch
                <br />
                with us
              </h1>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 2xl:gap-20">

              {[{
                icon: <FaPhoneAlt size={20} />,
                title: "Call Us",
                desc: "Give us a call – always happy to talk digital!",
                link: "tel:+12623318793",
                text: "+1 (262) 331-8793"
              },
              {
                icon: <FaEnvelope size={20} />,
                title: "Email Us",
                desc: "Drop us a note – we’ll get back quickly!",
                link: "mailto:hello@email.com",
                text: "hello@email.com"
              },
              {
                icon: <FaMapMarkerAlt size={20} />,
                title: "Visit Us",
                desc: "Come meet us in person anytime!",
                link: "#",
                text: "View Location"
              }].map((card, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="flex flex-col p-6 sm:p-[30px] 
            bg-white/60 backdrop-blur-md 
            rounded-2xl shadow-2xl 
            transition duration-300 hover:bg-[#262626] hover:text-[#ffffff]"
                >
                  <div className="mb-6">{card.icon}</div>

                  <h1 className="uppercase text-2xl sm:text-3xl font-bold">
                    {card.title}
                  </h1>

                  <p className="my-6 text-sm sm:text-base">
                    {card.desc}
                  </p>

                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2 w-max 
              bg-[#ef476f] hover:scale-105
              text-white font-semibold px-6 py-3 rounded-full
              transition duration-300"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                      <FaArrowRight className="text-xs" />
                    </span>
                    {card.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <motion.div
            style={{ backgroundImage: `url(${bgcontact})` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-cover bg-center"
          >
            <div className="py-16 px-4 md:px-0  lg:py-[100px] 
      flex flex-col lg:flex-row lg:justify-between gap-12 
      2xl:w-[85%] w-full md:w-[95%] mx-auto">

              {/* Left text */}
              <div className="text-white lg:w-[40%] w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-bold">
                  Let's Create
                  <br />
                  Something Epic Together.
                </h1>
              </div>

              {/* Glass Form */}
              <div className="bg-[#F1F2F4] backdrop-blur-xl 
        rounded-[20px] shadow-2xl 
        p-6 sm:p-8 lg:p-[40px] w-full max-w-xl">

                <h2 className="text-xl sm:text-3xl font-bold mb-6">
                  Enter Your Contact Details
                </h2>

                <form className="flex flex-col gap-6">

                  {["Name", "Email", "Phone"].map((field, i) => (
                    <div className="relative w-full group" key={i}>
                      <input
                        type="text"
                        required
                        className="peer w-full border-b-2 border-gray-300 
                   font-semibold
                  outline-none py-3 bg-transparent"
                        placeholder=" "
                      />
                      <label
                        className="absolute left-0 top-3 font-semibold 
                  text-[#222222] transition-all
                  peer-placeholder-shown:top-3
                  peer-placeholder-shown:text-lg
                  peer-focus:-top-2
                  peer-focus:text-sm
                  peer-focus:text-[#ef476f]
                  peer-valid:-top-2
                  peer-valid:text-sm
                  peer-valid:text-[#ef476f]"
                      >
                        {field} *
                      </label>
                    </div>
                  ))}

                  <div className="relative w-full">
                    <textarea
                      required
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300
                font-semibold outline-none py-3
                resize-none h-24 bg-transparent"
                    />
                    <label
                      className="absolute left-0 top-3 font-semibold 
                text-[#222222] transition-all
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-lg
                peer-focus:-top-2
                peer-focus:text-sm
                peer-focus:text-[#ef476f]
                peer-valid:-top-2
                peer-valid:text-sm
                  peer-valid:text-[#ef476f]"
                    >
                      Message *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-max items-center gap-2
              bg-[#ef476f] hover:scale-105
              text-white font-semibold px-6 py-3
              rounded-full transition duration-300 mt-4"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                      <FaArrowRight className="text-xs" />
                    </span>
                    Send Message
                  </button>

                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Contact;
