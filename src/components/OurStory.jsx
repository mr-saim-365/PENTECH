import React from 'react';
import { motion } from "framer-motion";

const itemVariants1 = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
    },
};

const itemVariants2 = {
    hidden: { opacity: 0, x: -90 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
    },
};

const OurStory = () => {
    return (
        <div className="w-full bg-[linear-gradient(to_bottom_left,_#0b121e_80%,_#2f3a4d_100%)]
relative py-20">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center justify-center px-3 lg:w-[90%] 2xl:w-[70%] mx-auto">


                <motion.div
                    className="flex flex-col gap-3 rounded-3xl w-full sm:w-[500px] md:w-[40%] lg:max-w-[450px] bg-[#222222]"
                    variants={itemVariants1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="p-6">
             
                        <h2 className="text-white/60 text-lg ">Join a community of thriving businesses and creators who trust us to bring their digital vision to life.</h2>
                    </div>
                    <div className="w-full h-[200px] overflow-hidden rounded-bl-3xl rounded-br-3xl [mask-image:radial-gradient(circle_at_top_left,_white,_transparent)]">
                        <img src="/images/nature.jpg" alt="Styled Image" className="w-full h-full object-cover" />
                    </div>
                </motion.div>


                <motion.div
                    className="relative flex flex-col md:flex-row gap-5 md:gap-0 2xl:gap-8  items-center w-full sm:w-[500px] lg:w-[800px] justify-between bg-[#222222] rounded-3xl  shadow-lg overflow-hidden"
                    variants={itemVariants2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <div className="relative w-full md:w-1/2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                        <img
                            src="/images/OurStory.jpg"
                            alt="Feature Image"

                            className="w-full h-[35vh] sm:h-[50vh] md:clip-path-custom"
                        />
                    </div>


                    <div className="w-full md:w-1/2 text-white text-center px-6 pt-5 pb-12 md:p-10 md:text-left space-y-4">
                        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
                            Experience <span className="text-green-200">the power of</span> <br />
                            <span className="text-green-200">speed</span> with our <br />
                            cutting-edge <br />
                            <span className="text-purple-300">hosting infrastructure</span>
                        </h2>
               
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurStory;