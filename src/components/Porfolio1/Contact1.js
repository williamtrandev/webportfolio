import { BiCurrentLocation, BiMailSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Box from "../DrapAndDrop/Box";
import Image from "../DrapAndDrop/Image";
export default function Contact1() {
    const heightBox = window.innerHeight;
    const widthBox = (window.innerWidth - 348) * 0.9;
    console.log(heightBox, widthBox);
    return (
        <div
            id="movable"
            className="flex flex-col items-center w-full h-[600px] text-white"
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
                x={0.1 * widthBox}
                y={0.15 * heightBox}
            ></Box>
            <Image
                x={0.05 * widthBox}
                y={0.25 * heightBox}
                width={"300px"}
                height={"300px"}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
            ></Image>
            <Box
                item={"Creative House"}
                parent={"#movable"}
                width="200px"
                x={0.5 * widthBox}
                y={0.3 * heightBox}
            ></Box>

            <Box
                item={<BiCurrentLocation />}
                parent={"#movable"}
                width="50px"
                x={0.5 * widthBox}
                y={0.4 * heightBox}
            ></Box>
            <Box
                item={"123 Anywhere St., Any City, ST 12345"}
                classname="text-lg"
                parent={"#movable"}
                width={"450px"}
                x={0.55 * widthBox}
                y={0.4 * heightBox}
            ></Box>
            <Box
                item={<BiMailSend />}
                parent={"#movable"}
                width="50px"
                x={0.5 * widthBox}
                y={0.5 * heightBox}
            ></Box>

            <Box
                item={"hello@reallygreatsite.com"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * widthBox}
                y={0.5 * heightBox}
            ></Box>
            <Box
                item={<BsFillTelephoneFill />}
                parent={"#movable"}
                width="50px"
                x={0.5 * widthBox}
                y={0.6 * heightBox}
            ></Box>
            <Box
                item={"+123-456-7890"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * widthBox}
                y={0.6 * heightBox}
            ></Box>
        </div>
    );
}
