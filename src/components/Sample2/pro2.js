import { useState } from "react";
function Pro2({ item }) {
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
    const [ava, setAva] = useState(item.src);
    return (
        <>
            <div className="relative">
                <input
                    className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%]"
                    type={"file"}
                    onChange={previewFile}
                />
                <img src={ava} alt="project-img" className="w-full object-cover h-[200px]" />
            </div>
            <div className="flex items-center flex-col justify-center">
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100"
                >
                    {item.tenWeb}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.linkWeb}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.theloai}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.mota}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.client}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.date}
                </p>
            </div>
        </>
    );
}

export default Pro2;
