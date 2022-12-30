import { BiCurrentLocation, BiMailSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Box from "../DragAndDrop/Box";
import Image from "../DragAndDrop/Image";
import { useState, useEffect } from "react";

export default function Contact1() {
    const wrapper = document.getElementsByClassName("Page")[0];
    const height = window.innerHeight-50 ;
    const width = (window.innerWidth - 348) * 0.9;
    const [state, setState] = useState({
        height: wrapper.offsetHeight,
        width: wrapper.offsetWidth,
    });

    console.log(state.width, state.height);
    return (
        <div
            id="movable"
            className="changeClass flex justify-center items-center w-full h-[600px] text-white"
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
                x={0.1 * state.width}
                y={0.15 * state.height}
            ></Box>
            <Image
                x={0.05 * state.width}
                y={0.25 * state.height}
                width={"300px"}
                height={"300px"}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
            ></Image>
            <Box
                item={"Creative House"}
                parent={"#movable"}
                width="200px"
                x={0.5 * state.width}
                y={0.3 * state.height}
            ></Box>

            <Box
                item={<BiCurrentLocation />}
                parent={"#movable"}
                width="50px"
                x={0.5 * state.width}
                y={0.4 * state.height}
            ></Box>
            <Box
                item={"123 Anywhere St., Any City, ST 12345"}
                classname="text-lg"
                parent={"#movable"}
                width={"450px"}
                x={0.55 * state.width}
                y={0.4 * state.height}
            ></Box>
            <Box
                item={<BiMailSend />}
                parent={"#movable"}
                width="50px"
                x={0.5 * state.width}
                y={0.5 * state.height}
            ></Box>

            <Box
                item={"hello@reallygreatsite.com"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * state.width}
                y={0.5 * state.height}
            ></Box>
            <Box
                item={<BsFillTelephoneFill />}
                parent={"#movable"}
                width="50px"
                x={0.5 * state.width}
                y={0.6 * state.height}
            ></Box>
            <Box
                item={"+123-456-7890"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * state.width}
                y={0.6 * state.height}
            ></Box>
        </div>
    );
}
