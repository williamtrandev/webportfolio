import { useState, useEffect } from "react";

function Pro({ MenuItem, className = "", colorChange }) {
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq47DlVprbeEcxdYcQYNKwyZ9OOoQmvBSr6A&usqp=CAU"
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
        <div className={`portfolio-item-inner ${className}`}>
            <div className="relative portfolio-img">
                <input
                    className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%]"
                    type={"file"}
                    onChange={previewFile}
                />
                <img src={ava} alt="project-img" className="h-[200px]" />
            </div>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   font-bold text-center px-1`}
            >
                {MenuItem.name}
            </h2>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   text-center px-1`}
            >
                {MenuItem.Category}
            </h2>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   text-center px-1`}
            >
                {MenuItem.Client}
            </h2>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   text-center px-1`}
            >
                {MenuItem.date}
            </h2>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   text-center px-1`}
            >
                {MenuItem.url}
            </h2>
            <h2
                contentEditable
                suppressContentEditableWarning={true}
                className={`text-base ${colorChange}   text-center px-1`}
            >
                {MenuItem.congdung}
            </h2>
        </div>
    );
}

export default Pro;
