import { useState, useEffect } from "react";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import sampleBg from "../../../assets/sample-bg-2.jpg";
import { Link } from "react-scroll";

export default function Home2() {
    function previewFile(e) {
        // const preview = document.querySelector("img");
        // const file = document.querySelector("input[type=file]").files[0];
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                // convert image file to base64 string
                setAva(reader.result);
                localStorage.setItem("avaHomeSP4", reader.result);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const [ava, setAva] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66JMH15FJkrsx2JCngUBRsxubwH6yXYTIJg&usqp=CAU"
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
        <section name="home" className=" my-12   " spellCheck="false">
            <div className="w-full h-[170px]"></div>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center w-full h-full">
                    <h2
                        className="text-xl sm:text-7xl font-bold text-white"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        Chúng tôi là TSimple.
                    </h2>
                    <p
                        className="text-gray-500 py-4 w-full"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        Chúng tôi sử dụng React và Tailwind trong dự án này
                    </p>
                    <div>
                        <Link to={"contact"} smooth duration={800}>
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                                Follow Us
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight
                                        size={25}
                                        className="ml-1"
                                    ></MdOutlineKeyboardArrowRight>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative ml-[20px] w-[300px] h-[300px]">
                    <input
                        className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"
                        type={"file"}
                        onChange={previewFile}
                    />
                    <img
                        src={ava}
                        className="rounded-2xl mx-auto w-[300px] md:w-full h-[300px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
