import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Remove from "./Remove";
import Toolbar from "./Toolbar";
import Plusbin from "../Plusbin/Plusbin";


const style1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "solid 1px #ddd",
    width: "100%",
    // background: "#f0f0f0"
};

// const size = {
//   width: "50px",
//   height: "50px",
// }

export default function Box({
    parent = "parent",
    item = "Text",
    width = 160,
    height = 50,
    x = 50,
    y = 50,
    classname = "",
    datakey = localStorage.getItem("id_element"),
}) {
    var id=  localStorage.getItem("id_element") - 1;
    localStorage.setItem("id_element", id+3)
    const [enable, setEnable] = useState(false);

    function handledelete(e){
        // const list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        // const child = e.target.parentElement.parentElement.parentElement.parentElement;
        // console.log(child);
        // child.style.display = "none";
        const id = e.target.parentElement.parentElement.getAttribute("data-key");
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
            minHeight={20}
            grid={[50, 50]}
            bounds={parent.parent}
            id= {datakey}
        >
            {enable && <Toolbar isEnable={true} />}
            <div data-key= {datakey}
                className={`congviec group w-full h-full border relative ${classname}`}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
                onDoubleClick={() => {
                    setEnable(true);
                }}
            >
                {item}
                {/* <Remove></Remove> */}
                <Plusbin keyIndex= {datakey} hiddenPlus = "hidden" classname="dieukhien top-0 opacity-0 -left-7" onClickfuncDELETE={handledelete}/>
            </div>
        </Rnd>
    );
}
