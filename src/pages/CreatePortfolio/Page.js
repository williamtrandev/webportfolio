import { useState } from "react";
import Block1 from "../../components/CreatePortfolio/Block1";
import Block2 from "../../components/CreatePortfolio/Block2";
import Block3 from "../../components/CreatePortfolio/Block3";
import Block4 from "../../components/CreatePortfolio/Block4";
import Heading from "../../components/CreatePortfolio/Heading";
import SubHeading from "../../components/CreatePortfolio/SubHeading";
import TextBox from "../../components/CreatePortfolio/TextBox";
import ImageBox from "../../components/CreatePortfolio/ImageBox";
import Home1 from "../../components/Porfolio1/Home1";
import Image from "../../components/DrapAndDrop/Image";
import Box from "../../components/DrapAndDrop/Box";
import Icon from "../../components/DrapAndDrop/Icon";
import ThanhKE from "../../components/DrapAndDrop/ThanhKe";
import About1 from "../../components/Porfolio1/About1";
import Contact1 from "../../components/Porfolio1/Contact1";

// <Heading />, <SubHeading />, <TextBox />, <ImageBox />
const arr = {
    Sample: [<Home1 />, <About1/>, <Contact1/>],
    Components: [<Block1 />, <Block2 />, <Block3 />, <Block4 />],
    Text: [<Box />,<Box height={65} classname="text-6xl font-bold"/> ,<ThanhKE />, <Image />],
};
export default function Page({ num ,index}) {
    const [ele, setEle] = useState([]);
    const handleDrop = (event) => {
        event.preventDefault();
        var valueId = event.dataTransfer.getData("Text1");
        const [name, id] = valueId.split("_");
        console.log(name, id);
        // const root = ReactDOM.createRoot(document.getElementById(event.target.id))
        // console.log(root);
        // root.render(arr[name][id - 1]);
        console.log(arr[name][id - 1].className);
        setEle([...ele, arr[name][id - 1]]);
    };
    return (
        <div
            id={num}
            className={`w-[90%] max-w-[90%] min-h-[600px] border border-black bg-white ${num}`}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event)}
        >
           {ele.map((item)=>item)}
           {/* <About1 height={h} width={w}/> */}
        </div>
    );
}
