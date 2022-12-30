import backgroundImg from "../../assets/bg-home.jpg";
// import backgroundImg from "../../assets/bg-sample3.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
    const [isHover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };
    const style = isHover ? "!my-10 scale-110" : "";

    return (
        <>
            <div
                style={{ backgroundImage: `url(${backgroundImg})` }}
                className="w-full h-screen bg-cover flex flex-col"
            >
                <Navbar></Navbar>
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full">
                        <div className="flex justify-center lg:basis-1/2 lg:max-w-[50%] animate-bounce">
                            <p className="font-zendots font-bold text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tr from-[#a3c9e2] to-[#9618f7] text-transparent pl-[20px]">
                                Everything for you
                            </p>
                        </div>
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="flex flex-col justify-center items-center lg:ml-5 lg:basis-1/2 lg:max-w-[50%] cursor-pointer"
                        >
                            <p className="font-zendots font-bold text-4xl lg:text-5xl bg-clip-text bg-gradient-to-t from-[#b60f46] to-[#d592ff] text-transparent">
                                Create your
                            </p>
                            <div>
                                <Link to={"/Background"}>
                                    <button
                                        className={`w-fit lg:px-6 lg:py-3 px-4 py-2 my-2 flex items-center bg-black rounded-md cursor-pointer hover:bg-white font-zendots lg:text-3xl text-xl text-white hover:text-black ease-in-out duration-300 ${style}`}
                                    >
                                        Create your site
                                    </button>
                                </Link>
                            </div>
                            <p className="font-zendots text-center font-bold text-4xl lg:text-5xl bg-clip-text bg-gradient-to-t from-[#b60f46] to-[#d592ff] text-transparent">
                                online portfolio website
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
