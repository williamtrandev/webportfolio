import { BiCurrentLocation, BiMailSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Box from "../DragAndDrop/Box";
import Image from "../DragAndDrop/Image";
import { useState, useEffect } from "react";

export default function Contact1({ width, height }) {
    const wrapper = document.getElementsByClassName("Page")[0];

    const [state, setState] = useState({
        height: wrapper.offsetHeight,
        width: wrapper.offsetWidth,
    });
    // const heightBox = wrapper.offsetHeight;
    // const widthBox = wrapper.offsetWidth;
    // console.log(heightBox, widthBox);
    // console.log(dimensions.width, dimensions.height);
    // console.log(typeof(size));
    return (
        <div
            id="movable"
            className="changeClass hasBg flex justify-center items-center w-full h-[600px] text-white"
            style={{
                backgroundImage: `url("https://wallpaperaccess.com/full/3124512.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <Box
                item={"CONTACT US"}
                parent={"#movable"}
                x={0.1 * (width ? width : state.width)}
                y={0.15 * (height ? height : state.height)}
                classname="text-[25px]"
            ></Box>
            <Image
                x={0.05 * (width ? width : state.width)}
                y={0.25 * (height ? height : state.height)}
                width={"300px"}
                height={"300px"}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
            ></Image>
            <Box
                item={"Creative House"}
                parent={"#movable"}
                width="200px"
                x={0.5 * (width ? width : state.width)}
                y={0.3 * (height ? height : state.height)}
                classname="text-[25px]"
            ></Box>

            <Box
                item={<BiCurrentLocation />}
                parent={"#movable"}
                width="50px"
                x={0.5 * (width ? width : state.width)}
                y={0.4 * (height ? height : state.height)}
                classname="text-[30px]"
            ></Box>
            <Box
                item={"123 Anywhere St., Any City, ST 12345"}
                classname="text-lg"
                parent={"#movable"}
                width={"450px"}
                x={0.55 * (width ? width : state.width)}
                y={0.4 * (height ? height : state.height)}
            ></Box>
            <Box
                item={<BiMailSend />}
                parent={"#movable"}
                width="50px"
                x={0.5 * (width ? width : state.width)}
                y={0.5 * (height ? height : state.height)}
                classname="text-[30px]"
            ></Box>

            <Box
                item={"hello@reallygreatsite.com"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * (width ? width : state.width)}
                y={0.5 * (height ? height : state.height)}
            ></Box>
            <Box
                item={<BsFillTelephoneFill />}
                parent={"#movable"}
                width="50px"
                x={0.5 * (width ? width : state.width)}
                classname="text-[30px]"
                y={0.6 * (height ? height : state.height)}
            ></Box>
            <Box
                item={"+123-456-7890"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * (width ? width : state.width)}
                y={0.6 * (height ? height : state.height)}
            ></Box>
        </div>
    );
}
