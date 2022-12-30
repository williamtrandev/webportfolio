import About3 from "./About3";
import Resume3 from "./Resume3";
import Services3 from "./Services3";
import Portfolio3 from "./Portfolio3";
import Contact3 from "./Contact3";
import Plusbin from "../../../components/Plusbin/Plusbin";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import "./Sample3.css";
import { useState } from "react";

export default function Home3() {
    const [Home, setHome] = useState(true);
    const [About, setAbout] = useState(false);
    const [Resume, setResume] = useState(false);
    const [Contact, setContact] = useState(false);
    const [Portfolio, setPortfolio] = useState(false);
    const [Service, setService] = useState(false);
    const class1 = `text-white font-bold py-4`;

    const listgt = [
        {
            id: 1,
            gt: "I'm a passionate graphic designer from New York",
        },
    ];
    const [gioithieuCV, setgioithieuCV] = useState(listgt);
    const ADDElement = () => {
        let idMax = Math.max.apply(
            Math,
            gioithieuCV.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: idMax + 1,
            gt: "Thêm thông tin giới thiệu",
        };
        setgioithieuCV([...gioithieuCV, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = gioithieuCV.filter(function (element) {
            return element.id != indexRemove;
        });
        setgioithieuCV(newGT);
    };
    const [ten, setTen] = useState("Emily Jones");

    const [setting, setSetting] = useState(true);

    function handle1(e) {
        let id = e.target.id;
        if (id == 1) {
            var skill = document.getElementById("sample3_skill");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 2) {
            var skill = document.getElementById("sample3_inter");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 3) {
            var skill = document.getElementById("sample3_test");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 4) {
            var skill = document.getElementById("Sample3_sumary");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 5) {
            var skill = document.getElementById("Sample3_edu");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 6) {
            var skill = document.getElementById("Sample3_exp");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        }
    }

    return (
        <div className="relative">
            <header
                id="Sample2__header"
                className={`w-full flex flex-col grid justify-items-start justify-center text-white${
                    Home ? null : " header-top"
                }`}
            >
                <div
                    className={`container bg-transparent flex  ${
                        Home ? " flex-col" : " flex-row justify-between"
                    }`}
                >
                    <h1 className={`mb-2${Home ? " text-5xl" : " text-3xl"}`}>
                        {/* <span className={class1} contentEditable
                    suppressContentEditableWarning={true}>Emily Jones </span> */}

                        <span
                            className={class1}
                            contentEditable
                            suppressContentEditableWarning={true}
                            onInput={(e) => {
                                let ten1 = e.currentTarget.textContent;
                                setTen(ten1);
                                console.log(ten);
                            }}
                        >
                            {ten}
                        </span>
                    </h1>

                    {gioithieuCV.map((item, index) => (
                        <h2
                            data-key={item.id}
                            key={index}
                            className={`congviec relative text-white/80 leading-8 pt-4${
                                Home ? null : " hidden"
                            }`}
                        >
                            <p
                                className="py-2 "
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                {" "}
                                {item.gt}
                            </p>
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien top-0 opacity-0 -left-7"}
                                onClickfuncADD={ADDElement}
                                onClickfuncDELETE={DELETEElement}
                            />
                        </h2>
                    ))}

                    <nav
                        className={`navbar ${
                            Home ? " mt-8" : " mb-auto mt-auto"
                        }`}
                    >
                        <ul className="flex ">
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(false);
                                    setResume(false);
                                    setService(false);
                                    setPortfolio(false);
                                    setContact(false);
                                    setHome(true);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        Home ? " active" : null
                                    }`}
                                    href="#home"
                                >
                                    Home
                                </a>{" "}
                            </li>
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(true);
                                    setResume(false);
                                    setService(false);
                                    setPortfolio(false);
                                    setContact(false);
                                    setHome(false);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        About ? " active" : null
                                    }`}
                                    href="#about"
                                >
                                    About
                                </a>{" "}
                            </li>
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(false);
                                    setResume(true);
                                    setService(false);
                                    setPortfolio(false);
                                    setContact(false);
                                    setHome(false);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        Resume ? " active" : null
                                    }`}
                                    href="#resume"
                                >
                                    Resume
                                </a>{" "}
                            </li>
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(false);
                                    setResume(false);
                                    setService(true);
                                    setPortfolio(false);
                                    setContact(false);
                                    setHome(false);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        Service ? " active" : null
                                    }`}
                                    href="#service"
                                >
                                    Service
                                </a>{" "}
                            </li>
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(false);
                                    setResume(false);
                                    setService(false);
                                    setPortfolio(true);
                                    setContact(false);
                                    setHome(false);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        Portfolio ? " active" : null
                                    }`}
                                    href="#portfolio"
                                >
                                    Portfolio
                                </a>{" "}
                            </li>
                            <li
                                className="pl-4"
                                onClick={(e) => {
                                    setAbout(false);
                                    setResume(false);
                                    setService(false);
                                    setPortfolio(false);
                                    setContact(true);
                                    setHome(false);
                                }}
                            >
                                {" "}
                                <a
                                    className={`nav-link${
                                        Contact ? " active" : null
                                    }`}
                                    href="#contact"
                                >
                                    Contact
                                </a>{" "}
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <div
                        className={`pt-8 social-links flex mt-6${
                            Home ? null : " hidden"
                        }`}
                    >
                        <p className="twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </p>
                        <p className="facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </p>
                        <p className="instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </p>
                        <p className="linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </p>
                    </div>
                </div>
            </header>

            <section
                id="sample3 about"
                className={`about flex items-center  text-white w-full  px-12 mt-36${
                    About ? " section-show" : " hidden opacity-0"
                }`}
            >
                <About3 />
            </section>

            <section
                id="sample3 resume"
                className={`resume flex items-center  text-white w-full px-12 mt-36${
                    Resume ? " section-show" : " hidden opacity-0"
                }`}
            >
                <Resume3 />
            </section>

            <section
                id="sample3 services"
                className={`services flex items-center  text-white w-full px-12 mt-36${
                    Service ? " section-show" : " hidden opacity-0"
                }`}
            >
                <Services3 />
            </section>

            <section
                id="sample3 portfolio"
                className={`portfolio flex items-center  text-white w-full px-12 mt-36${
                    Portfolio ? " section-show" : " hidden opacity-0"
                }`}
            >
                <Portfolio3 />
            </section>

            <section
                id="sample3 contact"
                className={`contact flex items-center  text-white w-full px-12 mt-36${
                    Contact ? " section-show" : " hidden opacity-0"
                }`}
            >
                <Contact3 />
            </section>

            <div className="credits">
                Designed by <span style={{ color: "#18d26e" }}>T-Simple</span>
            </div>

            <div
                className={`text-white  top-[20%] ml-2 z-20 ${
                    Home ? " hidden" : " fixed"
                }`}
            >
                <AiFillSetting
                    className="cursor-pointer "
                    onClick={(e) => {
                        setSetting(!setting);
                    }}
                />
                <div
                    className={`bg-green-500 px-2 rounded mx-6  py-4 z-50 ${
                        setting ? " hidden" : " block"
                    }`}
                >
                    <span>Block or Hidden</span>

                    <div className="flex flex-col justify-start items-start py-4">
                        <button type="button" className="collapsible">
                            About
                        </button>
                        <div className="flex flex-col items-start pl-6 text-base">
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="1"
                                    name="1"
                                    value={"1"}
                                    onChange={handle1}
                                />
                                <label htmlFor="1"> Skills</label>
                            </div>
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="2"
                                    name="2"
                                    value={"2"}
                                    onChange={handle1}
                                />
                                <label htmlFor="2"> Interests</label>
                            </div>
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="3"
                                    name="3"
                                    value={"3"}
                                    onChange={handle1}
                                />
                                <label htmlFor="3"> Testimonials</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start py-4">
                        <button type="button" className="collapsible">
                            Resume
                        </button>
                        <div className="flex flex-col items-start pl-6 text-base">
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="4"
                                    name="4"
                                    value={"4"}
                                    onChange={handle1}
                                />
                                <label htmlFor="4"> Sumary</label>
                            </div>
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="5"
                                    name="5"
                                    value={"5"}
                                    onChange={handle1}
                                />
                                <label htmlFor="5"> Edu</label>
                            </div>
                            <div>
                                <input
                                    type={"checkbox"}
                                    id="6"
                                    name="6"
                                    value={"6"}
                                    onChange={handle1}
                                />
                                <label htmlFor="6"> Exp</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
