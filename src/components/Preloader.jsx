import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo/Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 rounded-2xl border-2 border-primary/30 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
             <span className="text-4xl font-black text-white tracking-tighter">B</span>
          </div>
          
          {/* Pulsing ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-2xl border-2 border-primary"
          />
        </motion.div>

        {/* Text and Progress */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xs font-bold tracking-[0.5em] uppercase mb-4"
          >
            BIZORTEX
          </motion.h2>
          
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-primary"
            />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default Preloader;
