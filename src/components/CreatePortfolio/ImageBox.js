import { useState, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
export default function ImageBox({
    basisWidth,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
}) {
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
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const [ava, setAva] = useState();
    // Xoa anh trong bo nho moi lan doi anh
    useEffect(() => {
        return () => {
            ava && URL.revokeObjectURL(ava);
        };
    }, [ava]);
    // const handleAva = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file);
    //     file.preview = URL.createObjectURL(file);
    //     setAva(file.preview);
    // };
    console.log(ava);
    return (
        <div
            id="ImageBox"
            className={`group relative ${minHeight} ${maxHeight} ${minWidth} ${maxWidth} h-[200px] bg-slate-100 flex-grow-0 flex-shrink-0 ${basisWidth} flex justify-center items-center border-2 border-dashed border-slate-300 hover:border-2 hover:border-solid hover:border-blue-400`}
        >
            <div
                className={
                    (ava ? "hidden " : "") +
                    "h-full flex flex-col justify-center items-center"
                }
            >
                <div className="w-[50px] h-[50px] rounded-[50%] bg-slate-200 hidden group-hover:flex group-hover:flex-col justify-center items-center">
                    <BiImageAdd></BiImageAdd>
                </div>
            </div>

            <input
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                type={"file"}
                onChange={previewFile}
            />
            <img
                alt="avatar"
                className={
                    (ava ? "" : "hidden ") + "h-full w-full object-cover"
                }
                src={ava}
            />
        </div>
    );
}
