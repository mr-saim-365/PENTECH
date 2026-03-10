// src/pages/Home.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import '@fontsource/rubik';

// Critical Components (Visible immediately or near top)
import Hero from "../components/Hero";
import ScrollTop from "../components/ScrollTop";

// Lazy Components (Below the fold)
const Service = lazy(() => import("../components/Service"));
const About = lazy(() => import("../components/About"));
const Process = lazy(() => import("../components/Process"));
const FeaturedProducts = lazy(() => import("../components/FeaturedProducts"));
const Footer = lazy(() => import("../components/Footer"));

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
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100); 

        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-96 w-full bg-[#050505]" />}>
        <FeaturedProducts />
        <About />
        <Service />
        <Process />
        <Footer />
      </Suspense>
      <ScrollTop />
    </>
  );
};

export default Home;
