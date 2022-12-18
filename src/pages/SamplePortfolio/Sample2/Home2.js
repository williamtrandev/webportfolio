import { useState, useEffect } from "react";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import sampleBg from "../../../assets/sample-bg-2.jpg";

export default function Home2() {
    const [ava, setAva] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMlLUP8BsN9CK3yP_mbKAJCMVX52SLCbmoNeu9_ai1Bu8UoPO7ffpTDZZ8mFiF-SleIM&usqp=CAU"
    );
    
    // Xoa anh trong bo nho moi lan doi anh
    useEffect(() => {
        return () => {
            ava && URL.revokeObjectURL(ava);
        };
    }, [ava]);
    const handleAva = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAva(file.preview);
    };
    return (
        <section
            name="home"
            className=" my-12   "
            
        >
            <div className="w-full h-[170px]"></div>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-xl sm:text-7xl font-bold text-white" contentEditable
                    suppressContentEditableWarning={true} >
                        Chúng tôi là TSimple.
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md" contentEditable
                    suppressContentEditableWarning={true} >
                        Chúng tôi sử dụng React và Tailwind trong dự án này
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Follow Me
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                ></MdOutlineKeyboardArrowRight>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="relative">
                <input
                            className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%]"
                            type={"file"}
                            onChange={handleAva}
                        />
                    <img
                        src={ava}
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    ></img>
                </div>
            </div>
        </section>
    );
}
