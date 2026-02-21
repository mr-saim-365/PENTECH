"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import bgcontact from "/images/bgcontact.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Name || !email || !cellNumber || !message) {
      setStatus("error");
      return;
    }

    const serviceId = "service_rmw1h2s";
    const templateId = "template_ff2x5wo";
    const publicKey = "1T9xbZKxb37vbLUVd";

    const templateParams = {
      from_Name: Name,
      from_email: email,
      from_phone: cellNumber,
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setName("");
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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <div className="pt-16 text-[#222222]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-5xl 2xl:text-6xl font-bold mb-4"
            >
              Contact Us
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base opacity-70">
              Reach out today and let's start shaping your success together.
            </motion.p>
          </motion.div>

          <div
            className="w-full md:w-[95%] 2xl:w-[85%] mx-auto 
        flex flex-col lg:flex-row gap-16 py-20 px-4 justify-between md:px-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-1">
                <img src="/images/Rectangle.png" alt="Rectangle" />

                <p className="text-base sm:text-lg font-semibold">
                  Got A Question?
                </p>
              </div>

              <h1
                className="uppercase 
            text-4xl sm:text-6xl 2xl:text-[72px] 
            font-bold leading-[1.05] tracking-tight"
              >
                Get in touch <br /> with us
              </h1>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Call Us",
                  desc: "Give us a call – always happy to talk digital!",
                  link: "tel:+12623318793",
                  text: "+1 (262) 331-8793",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email Us",
                  desc: "Drop us a note – we’ll get back quickly!",
                  link: "mailto:hello@email.com",
                  text: "hello@email.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Us",
                  desc: "Come meet us in person anytime!",
                  link: "#",
                  text: "View Location",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-8 
                bg-white rounded-2xl shadow-xl
                border border-gray-100
                transition duration-300 hover:shadow-2xl hover:bg-[#262626] hover:text-white"
                >
                  <div className="mb-6 text-2xl text-[#ef476f]">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>

                  <p className=" mb-6 font-medium">{card.desc}</p>

                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2
                  text-[#ef476f] font-semibold
                  group-hover:gap-4 transition-all duration-300"
                  >
                    {card.text}
                    <FaArrowRight />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ backgroundImage: `url(${bgcontact})` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-cover bg-center"
          >
            <div
              className="py-20 px-4 md:px-0 
          flex flex-col lg:flex-row gap-16
          w-full md:w-[95%] 2xl:w-[85%] justify-between mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-white lg:w-[40%]"
              >
                <h1 className="text-4xl sm:text-5xl 2xl:text-7xl font-bold leading-tight">
                  Let's Create Something Epic Together.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl 
              p-8 w-full max-w-xl"
              >
                <h2 className="text-3xl font-bold mb-8">
                  Enter Your Contact Details
                </h2>

                {/* <form  className="flex flex-col gap-8">
                  {["Name", "Email", "Phone"].map((field, i) => (
                    <div key={i} className="relative">
                      <input
                        type="text"
                        required
                        placeholder=" "
                        className="peer w-full border-b-2 border-gray-300
                      outline-none py-3 bg-transparent font-semibold"
                      />
                      <label
                        className="absolute left-0 top-3
                      text-gray-700 font-semibold transition-all
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
                    className="inline-flex items-center justify-center gap-2
                  bg-[#ef476f] text-white font-semibold
                  px-6 py-3 rounded-full w-max
                  hover:scale-105 active:scale-95
                  transition duration-300 mt-4"
                  >
                    Send Message
                    <FaArrowRight />
                  </button>
                </form> */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300
      outline-none py-3 bg-transparent font-semibold"
                    />
                    <label
                      className="absolute left-0 top-3 text-gray-700 font-semibold transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-lg
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-[#ef476f]
      peer-valid:-top-2
      peer-valid:text-sm
      peer-valid:text-[#ef476f]"
                    >
                      Name *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300
      outline-none py-3 bg-transparent font-semibold"
                    />
                    <label
                      className="absolute left-0 top-3 text-gray-700 font-semibold transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-lg
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-[#ef476f]
      peer-valid:-top-2
      peer-valid:text-sm
      peer-valid:text-[#ef476f]"
                    >
                      Email *
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={cellNumber}
                      onChange={(e) => setCellNumber(e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300
      outline-none py-3 bg-transparent font-semibold"
                    />
                    <label
                      className="absolute left-0 top-3 text-gray-700 font-semibold transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-lg
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-[#ef476f]
      peer-valid:-top-2
      peer-valid:text-sm
      peer-valid:text-[#ef476f]"
                    >
                      Phone *
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative w-full">
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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

                  {/* Status Messages */}
                  {status === "success" && (
                    <p className="text-green-600 font-semibold">
                      Message sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 font-semibold">
                      Please fill all fields.
                    </p>
                  )}
                  {status === "emailError" && (
                    <p className="text-red-500 font-semibold">
                      Something went wrong. Try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 cursor-pointer
    bg-[#ef476f] text-white font-semibold
    px-6 py-3 rounded-full w-max
    hover:scale-105 active:scale-95
    transition duration-300 mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Contact;
