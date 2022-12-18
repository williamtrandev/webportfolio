import React, { useEffect, useRef } from "react";
import Box from "../DrapAndDrop/Box";
import ThanhKE from "../DrapAndDrop/ThanhKe";
import Image from "../DrapAndDrop/Image";
function About1() {
    const height = window.innerHeight-50 ;
    const width = (window.innerWidth - 348) * 0.9;
    return (
        <div className="w-full h-[600px] relative bg-red-400 text-yellow-200">
            <Box
                item={"By TSIMPLE"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.034}
                classname={"font-bold text-3xl"}
            />
            <Box
                item={"CONTENT CREATOR"}
                width={300}
                height={40}
                x={width * 0.55}
                y={height * 0.034}
                classname={"font-bold text-3xl"}
            />
            <ThanhKE y={width * 0.1} x={height * 0.085} width={825} />
            <Image
                x={width * 0.67}
                y={height * 0.21}
                width={225}
                height={225}
            />
            <Box
                item={"ABOUT"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.32487309644}
                classname={"font-bold text-4xl"}
            />
            <Box
                item={
                    "African Folktales and Myths for children, teachers, librarians and storytellers. Amazing & Inspiring Stories with Lessons for the Young and Old. Non Profit Organization. Support African Education. Types: Animated folktales, Narrated..."
                }
                width={400}
                height={140}
                x={width * 0.034}
                y={height * 0.40947546531}
                classname={"font-bold text-base"}
            />
            <Box
                item={"+521"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.68020304568}
                classname={"font-bold text-3xl"}
            />
            <Box
                item={"Happy"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.75972927242}
                classname={"font-bold text-3xl"}
            />
            <Box
                item={"+521"}
                width={210}
                height={40}
                x={width * 0.58341968911}
                y={height * 0.68020304568}
                classname={"font-bold text-3xl"}
            />
            <Box
                item={"SAD"}
                width={210}
                height={40}
                x={width * 0.58341968911}
                y={height * 0.75972927242}
                classname={"font-bold text-3xl"}
            />
        </div>
    );
}
export default About1;
