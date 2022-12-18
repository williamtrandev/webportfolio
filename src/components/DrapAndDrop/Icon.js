
import React from 'react';
import { Rnd } from 'react-rnd';
import { ImHappy2 } from 'react-icons/im';


const style1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
//   border: "solid 1px #ddd",
  width: "1000px",
  // background: "#f0f0f0"
};

const size = {
  width: "50px",
  height: "50px",
}


export default ({
    item,
    width = 10,
    height = 10,
    x = 50,
    y = 50,
    classname = "",
}) => (
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
        bounds="parent"
    >
        <div className="group border__full w-full h-full">
            <ImHappy2 className={`w-full h-full border-1 ${classname}`} />
        </div>
    </Rnd>
);