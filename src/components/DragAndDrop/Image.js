import React from "react";
import { useState } from "react";
import { Rnd } from "react-rnd";
import Plusbin from "../Plusbin/Plusbin";

function Image({
    parent = "parent",
    width = 160,
    height = 100,
    x = 50,
    y = 50,
    classname = "",
    datakey = localStorage.getItem("id_element"),
    src,
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
                localStorage.setItem("avaHomeSP4", reader.result);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const [ava, setAva] = useState(
        src
            ? src
            : "https://yesoffice.com.vn/wp-content/themes/zw-theme//assets/images/default.jpg"
    );
    var id = localStorage.getItem("id_element") - 1;
    localStorage.setItem("id_element", id + 3);
    function changeIMG() {
        let input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            previewFile(e);
        };
        input.accept = "image/*";
        input.click();
    }

    const style1 = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        // background: "#f0f0f0"
        borderradius: "10px",
    };

    function handledelete(e) {
        // const list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        // const child = e.target.parentElement.parentElement.parentElement.parentElement;
        // console.log(child);
        // child.style.display = "none";
        const id =
            e.target.parentElement.parentElement.getAttribute("data-key");
        const data = document.getElementById(id);
        data.remove();
    }

    return (
        <Rnd
            default={{
                x: x,
                y: y,
                width: width,
                height: height,
            }}
            style={style1}
            minWidth={10}
            minHeight={10}
            bounds={parent.parent}
            id={datakey}
        >
            <div
                keyIndex={datakey}
                className="group  congviec relative w-full h-full "
            >
                <label
                    onDoubleClick={changeIMG}
                    htmlFor="img"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                ></label>
                <img
                    src={ava}
                    alt="avatar"
                    className={
                        (ava ? "" : "hidden ") + "h-full   w-full object-cover "
                    }
                />
                <Plusbin
                    keyIndex={datakey}
                    hiddenPlus="hidden"
                    classname="dieukhien top-0 opacity-0 -left-7"
                    onClickfuncDELETE={handledelete}
                />
            </div>
        </Rnd>
    );
}

export default Image;
