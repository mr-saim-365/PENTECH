import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ScrollTop = () => {

    const [arrowActive, setArrowActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setArrowActive(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleScrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Link
                onClick={toggleScrollTop}
                href="#"
                id="scrollTop"
                className={`fixed right-[15px] bottom-[15px] z-[99999] w-11 h-11 rounded-full text-[#ffffff] bg-deep-purple flex items-center justify-center transition-opacity duration-300 ${arrowActive ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}

            ><IoMdArrowUp size={20} />
            </Link>
        </>
    )

}

export default ScrollTop;