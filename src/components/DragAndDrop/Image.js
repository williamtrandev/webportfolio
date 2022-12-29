import React from "react";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

function Image({
    parent = "parent",
    width = 160,
    height = 100,
    x = 50,
    y = 50,
    classname = "",
    src,
}) {
    const [ava, setAva] = useState(
        src
            ? src 
            : "https://yesoffice.com.vn/wp-content/themes/zw-theme//assets/images/default.jpg"
    );
    function changeIMG() {
        let input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            const file = e.target.files[0];
            file.preview = URL.createObjectURL(file);
            setAva(file.preview);
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
            bounds={parent}
        >
            <div className="group relative w-full h-full ">
                <label
                    onDoubleClick={changeIMG}
                    htmlFor="img"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                ></label>
                <img
                    src={ava}
                    alt="avatar"
                    className={
                        (ava ? "" : "hidden ") + "h-full w-full object-cover "
                    }
                />
            </div>
        </Rnd>
    );
}

export default Image;
