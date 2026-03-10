import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const GlossyCube = lazy(() => import("./GlossyCube"));
const LuminousMist = lazy(() => import("./LuminousMist"));

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center pt-32 bg-[#050505] overflow-hidden">
      {/* Cinematic Luminous Mist Background */}
      <Suspense fallback={null}>
        <LuminousMist />
      </Suspense>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-primary">
                The Future of Digital Excellence
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tighter">
                Transforming <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-primary bg-clip-text text-transparent">
                  Ideas into Impact
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empowering world-class businesses through intelligent digital solutions, 
                cutting-edge software, and premium brand experiences that redefine what's possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <button
                  onClick={() => {
                    const section = document.getElementById("services");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95"
                >
                  Explore Services
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("AboutUs");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
                >
                  Our Story
                </button>
              </div>

              {/* Stats/Quick Info */}
              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10 opacity-40">
                <div className="flex flex-col">
                   <span className="text-2xl font-bold text-white">100+</span>
                   <span className="text-xs uppercase tracking-widest font-medium">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-bold text-white">99%</span>
                   <span className="text-xs uppercase tracking-widest font-medium">Client Satisfaction</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-bold text-white">10+</span>
                   <span className="text-xs uppercase tracking-widest font-medium">Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <div className="w-full lg:w-5/12 h-[500px] md:h-[600px] relative pointer-events-none">
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none h-20 bottom-0"></div> */}
            <div className="w-full h-full scale-95 md:scale-110">
              <Suspense fallback={<div className="w-full h-full bg-primary/5 rounded-3xl animate-pulse" />}>
                <GlossyCube />
              </Suspense>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
