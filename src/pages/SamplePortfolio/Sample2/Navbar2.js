import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar2() {
    const [nav, setNav] = useState(false);
    const [navColor, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    const color = navColor ? "bg-[#0a101e]" : "bg-black/95";
    const navigations = [
        {
            id: 1,
            link: "home",
            title: "Home",
        },
        {
            id: 2,
            link: "about",
            title: "About",
        },
        {
            id: 9,
            link: "skills",
            title: "Skills",
        },
        {
            id: 3,
            link: "service",
            title: "Service",
        },
        {
            id: 4,
            link: "portfolio",
            title: "Portfolio",
        },
        {
            id: 5,
            link: "resume",
            title: "Resume",
        },{
            id: 6,
            link: "contact",
            title: "Contact",
        },
    ];
    return (
        <section
            className={`flex justify-between items-center w-full h-20 px-4 z-10 top-0 text-white fixed ${color}`}
            spellCheck="false"
        >
            <h1 className="text-2xl font-dance ml-2">T-Simple</h1>

            <ul className="hidden md:flex">
                {navigations.map((item) => (
                    <li
                        key={item.id}
                        className="px-4 cursor-pointer font-medium text-xl text-white hover:text-pink-300 hover:scale-105 duration-200"
                    >
                        <Link to={item.link} smooth duration={500}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
                    {navigations.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 cursor-pointer py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={item.link}
                                smooth
                                duration={500}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
