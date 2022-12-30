import React from 'react';
import { Rnd } from 'react-rnd';

function ThanhKE({width=700, height=10, x = 50, y = 50, classname=""}) {
    return (
        <Rnd
            default={{
                x: x,
                y: y,
                width: width,
                height: height,
            }}
            minWidth={10}
            minHeight={20}
            grid={[50, 50]}
            bounds="parent"
        >
            <div className="border__full relative w-full h-full">
                <p className="border-t-[3px]"></p>
            </div>
        </Rnd>
    );
}

export default ThanhKE;