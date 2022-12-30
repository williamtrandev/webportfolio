import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Remove from "./Remove";
import Toolbar from "./Toolbar";

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
}) {
    const [enable, setEnable] = useState(false);
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
            bounds={parent}
        >
            {enable && <Toolbar isEnable={true} />}
            <div
                className={`canEdit group w-full h-full border relative ${classname}`}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
                onDoubleClick={() => {
                    setEnable(true);
                }}
            >
                {item}
                <Remove></Remove>
            </div>
        </Rnd>
    );
}
