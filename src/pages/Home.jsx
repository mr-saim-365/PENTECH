
// src/pages/Home.jsx
import React from 'react';
import Hero from "../components/Hero";
import Service from "../components/Service";
import ScrollTop from "../components/ScrollTop";
import OurStory from "../components/OurStory";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import '@fontsource/rubik';
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is rendered

        // Optional: Clean up the URL
        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <OurStory />
      <Cards />
      <Service />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
