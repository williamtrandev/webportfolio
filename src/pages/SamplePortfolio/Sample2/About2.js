import React from "react";
import { useState, useEffect } from "react";

export default function About2() {
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
        <section name="about" className="" spellCheck="false">
            <div className="max-w-screen-lg p-4 mx-auto my-12 pt-[100px] flex flex-col justify-center w-full h-full">
                <div className="flex justify-center pb-4 ">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        About Me
                    </h4>
                </div>
                <div className="">
                    <p
                        className="text-center text-lg p-[10px]"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        {" "}
                        Là một sinh viên năm 2 tại trường Tôn Đức Thắng
                    </p>
                </div>
                <div className="flex justify-between  items-center">
                    <div className="relative rounded-full w-[1000px] h-[211px] mx-6">
                        <input
                            className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%] cursor-pointer"
                            type={"file"}
                            onChange={previewFile}
                        />
                        <img
                            src={ava}
                            className="rounded-full h-full w-full object-cover"
                        ></img>
                    </div>
                    <div>
                        <p
                            className="py-1 text-4xl"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            TSimple
                        </p>
                        <p
                            className="py-1 text-lg"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Fullstack developer
                        </p>
                        <p
                            className="py-1 text-sm"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
