import Navbar2 from "./Navbar2";
import Home2 from "./Home2";
import About2 from "./About2";
import Portfolio2 from "./Portfolio2";
import Contact2 from "./Contact2";
import Service2 from "./Service2";
import Skill2 from "./Skill2";
import Resume2 from "./Resume2";
import { useState, useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import "../Sample4/style-switcher.css";
// import sampleBg from "../../../assets/sample-bg-2.jpg";
function Sample2() {
    function handleColor(newColor) {
        document.documentElement.style.setProperty("--skin-color", newColor);
        setColor(newColor);
    }
    // Setting color tool
    const [isOpen, setOpen] = useState(false);
    window.addEventListener("scroll", () => {
        setOpen(false);
    });
    // open setting tool
    const toggle = isOpen ? "open" : "";
    const [isDark, setDark] = useState(
        localStorage.getItem("dark-mode") === "true"
    );
    // const [isDark, setDark] = useState(false);
    window.addEventListener("load", () => {
        setDark(!isDark);
    });

    const [color, setColor] = useState(localStorage.getItem("theme-color"));
    useEffect(() => {
        localStorage.setItem("theme-color", color);
        handleColor(color);
    }, [color]);

    useEffect(() => {
        localStorage.setItem("dark-mode", isDark);
    }, [isDark]);
    // update background body
    const bgBody = isDark ? "dark" : "bg-[#f2f2fc]";
    const handleClick = () => {
        const webBody = document.getElementById("SP2").cloneNode(true);
        webBody
            .getElementsByClassName("style-switcher")[0]
            .classList.add("hidden");
        var css = [];

        for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
            var sheet = document.styleSheets[sheeti];
            var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
            for (var rulei = 0; rulei < rules.length; rulei++) {
                var rule = rules[rulei];
                if ("cssText" in rule)
                    css.push(`<style>` + rule.cssText + `</style>`);
                else
                    css.push(
                        rule.selectorText +
                            " {\n" +
                            rule.style.cssText +
                            "\n}\n"
                    );
            }
        }
        css = css.join("\n");
        // var css = [];
        // for (var i = 0; i < document.styleSheets.length; i++) {
        //     var sheet = document.styleSheets[i];
        //     var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
        //     if (rules) {
        //         css.push(
        //             "\n/* Stylesheet : " +
        //                 (sheet.href || "[inline styles]") +
        //                 " */"
        //         );
        //         for (var j = 0; j < rules.length; j++) {
        //             var rule = rules[j];
        //             if ("cssText" in rule) css.push(rule.cssText);
        //             else
        //                 css.push(
        //                     rule.selectorText +
        //                         " {\n" +
        //                         rule.style.cssText +
        //                         "\n}\n"
        //                 );
        //         }
        //     }
        // }
        // var cssInline = css.join("\n") + "\n";
        const data = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Portfolio</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster+Two&family=Merienda&family=Pacifico&family=Playfair+Display&family=Zen+Dots&display=swap');
        ${css}
        </style>

        <body>
            ${webBody.outerHTML}
        </body>
        </html>`;
        const filename = "webportfolio.html";
        const blob = new Blob([data], { type: "text/plain" });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const elem = window.document.createElement("a");
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    };
    function handlehidden(e) {
        let id = e.target.id;
        if (id == 77) {
            var skill = document.getElementById("skill2");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 88) {
            var skill = document.getElementById("Sample2_edu");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 99) {
            var skill = document.getElementById("Sample2_exp");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 10) {
            var skill = document.getElementById("project2");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        } else if (id == 100) {
            var skill = document.getElementById("service2");
            if (e.target.checked) {
                skill.classList.add("hidden");
            } else {
                skill.classList.remove("hidden");
            }
        }
    }
    return (
        <div id="SP2" className="relative font-mono">
            <Navbar2></Navbar2>
            <div className="absolute w-full bg-stone-800 text-white pt-[40px] top-[80px]">
                <div>
                    <Home2></Home2>
                    <About2></About2>
                    <Skill2></Skill2>
                    <Service2></Service2>
                    <Portfolio2></Portfolio2>
                    <Resume2></Resume2>
                    <Contact2></Contact2>
                </div>

                <div className={`style-switcher !top-[20%] ${toggle}`}>
                    <div
                        className="style-switcher-toggler s-icon"
                        onClick={() => {
                            setOpen(!isOpen);
                        }}
                    >
                        <div className="h-full w-full flex justify-center items-center">
                            <AiFillSetting className="fas fa leading-[40px]"></AiFillSetting>
                        </div>
                    </div>

                    <h4 className="py-2">Block or Hidden</h4>
                    <div className="ml-8">
                        <input
                            type={"checkbox"}
                            id="77"
                            name="77"
                            value={"77"}
                            onChange={handlehidden}
                        />
                        <label className="text-base text-black" htmlFor="77">
                            {" "}
                            Skills
                        </label>
                    </div>
                    <div className="ml-8">
                        <input
                            type={"checkbox"}
                            id="88"
                            name="88"
                            value={"88"}
                            onChange={handlehidden}
                        />
                        <label className="text-base text-black" htmlFor="88">
                            {" "}
                            Edu
                        </label>
                    </div>
                    <div className="ml-8">
                        <input
                            type={"checkbox"}
                            id="99"
                            name="99"
                            value={"99"}
                            onChange={handlehidden}
                        />
                        <label className="text-base text-black" htmlFor="99">
                            {" "}
                            Exp
                        </label>
                    </div>
                    <div className="ml-8">
                        <input
                            type={"checkbox"}
                            id="10"
                            name="10"
                            value={"10"}
                            onChange={handlehidden}
                        />
                        <label className="text-base text-black" htmlFor="10">
                            {" "}
                            Project
                        </label>
                    </div>
                    <div className="ml-8">
                        <input
                            type={"checkbox"}
                            id="100"
                            name="100"
                            value={"100"}
                            onChange={handlehidden}
                        />
                        <label className="text-base text-black" htmlFor="100">
                            {" "}
                            Service
                        </label>
                    </div>

                    <h4 className="pt-2">Download Portfolio</h4>
                    <button className="ml-8" onClick={handleClick}>
                        <BsDownload className="iconDownload"></BsDownload>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sample2;
