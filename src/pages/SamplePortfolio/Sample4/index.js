import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { AiFillSetting } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./style.css";
import "./style-switcher.css";
import { useState, useEffect } from "react";

function Sample4() {
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
    function handlehidden(e){

        let id = e.target.id;
        if(id == 7){
            var skill = document.getElementById("Skill_Sample4");
            if(e.target.checked){
                
            skill.classList.add("hidden")
            }else{
                skill.classList.remove("hidden")
            }
        }else if(id == 8){
            var skill = document.getElementById("edu_sample4");
            if(e.target.checked){
                
            skill.classList.add("hidden")
            }else{
                skill.classList.remove("hidden")
            }
        }else if(id == 9){
            var skill = document.getElementById("exp_sample4");
            if(e.target.checked){
                
            skill.classList.add("hidden")
            }else{
                skill.classList.remove("hidden")
            }
        }

      }
    return (
        <div className={`w-full h-screen ${bgBody}`}>
            <Sidebar></Sidebar>
            <div className="xl:pl-[270px]">
                <Home></Home>
                <About></About>
                <Services></Services>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </div>
            <div className={`style-switcher ${toggle}`}>
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
                <div
                    className="light-dark s-icon"
                    onClick={() => {
                        setDark(!isDark);
                    }}
                >
                    <div className="h-full w-full flex justify-center items-center">
                        {isDark ? (
                            <MdDarkMode className="fas fa leading-[40px]"></MdDarkMode>
                        ) : (
                            <MdLightMode className="fas fa leading-[40px]"></MdLightMode>
                        )}
                    </div>
                </div>
                <h4>Theme Colors</h4>
                <div className="colors">
                    <span
                        className="color-1 cursor-pointer"
                        onClick={() => {
                            handleColor("rgb(238, 183, 101)");
                        }}
                    ></span>
                    <span
                        className="color-2 cursor-pointer"
                        onClick={() => {
                            handleColor("rgb(51, 164, 110)");
                        }}
                        // onClick={()=>{console.log(2)}}
                    ></span>
                    <span
                        className="color-3 cursor-pointer"
                        onClick={() => {
                            handleColor("rgb(179, 62, 165)");
                        }}
                        // onClick={console.log(3)}
                    ></span>
                    <span
                        className="color-4 cursor-pointer"
                        onClick={() => {
                            handleColor("rgb(45, 102, 137)");
                        }}
                        // onClick={console.log(4)}
                    ></span>
                </div>
                <h4 className="py-2">Block or Hidden</h4>
                <div className="ml-8">
                            <input type={"checkbox"} id="7" name='7' value={'7'} onChange={handlehidden} />
                            <label className="text-base" htmlFor='7'> Skills</label>
                            </div>
                            <div className="ml-8">
                            <input type={"checkbox"} id="8" name='8' value={'8'} onChange={handlehidden} />
                            <label className="text-base" htmlFor='8'> Edu</label>
                            </div>
                            <div className="ml-8">
                            <input type={"checkbox"} id="9" name='9' value={'9'} onChange={handlehidden} />
                            <label className="text-base" htmlFor='9'> Exp</label>
                            </div>

            </div>
        </div>
    );
}

export default Sample4;
