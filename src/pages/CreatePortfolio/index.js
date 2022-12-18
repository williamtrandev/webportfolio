import Sidebar from "./Sidebar";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Block1 from "../../components/CreatePortfolio/Block1";
import * as ReactDOMServer from "react-dom/server";
import Block2 from "../../components/CreatePortfolio/Block2";
import Block3 from "../../components/CreatePortfolio/Block3";
import Block4 from "../../components/CreatePortfolio/Block4";
import Heading from "../../components/CreatePortfolio/Heading";
import SubHeading from "../../components/CreatePortfolio/SubHeading";
import TextBox from "../../components/CreatePortfolio/TextBox";
import ImageBox from "../../components/CreatePortfolio/ImageBox";
import Home1 from "../../components/Porfolio1/Home1";
import Image from "../../components/DrapAndDrop/Image";
import Page from "./Page";
import About1 from "../../components/Porfolio1/About1";
import {useContext} from "react";
import { StoreContext } from "../../components/store";

function CreatePortfolio() {
    const [page, setPage] = useState([1]);
    const addNewPage = () => {
        setPage([...page, page[page.length] + 1]);
    };
    // const arr = 
    //     {
    //         Sample: [],
    //         Components: [<Block1/>, <Block2/>, <Block3/>, <Block4/>],
    //         Text: [<Heading/>, <SubHeading/>, <TextBox/>, <ImageBox/>]

    //     }
    // const [ele, setEle] = useState([])
    // const handleDrop = (event) => {
    //     event.preventDefault();
    //     var valueId = event.dataTransfer.getData("Text1");
    //     const [name, id] = valueId.split("_");
    //     console.log( name, id);
    //     // const root = ReactDOM.createRoot(document.getElementById(event.target.id))
    //     // console.log(root);
    //     // root.render(arr[name][id - 1]);
    //     setEle([...ele, arr[name][id - 1]]);
    // };
    return (
        <div className="bg-slate-100 flex">
            <Sidebar></Sidebar>
            <div className="relative flex-grow w-full min-h-0">
                <div className="relative overflow-y-scroll h-full">
                    <div className="absolute min-w-full min-h-full flex flex-col items-center justify-center">
                        <div className="w-[90%] max-w-[90%] border border-black bg-yellow-50 "></div>
                        {page.map((num, index) => (
                            // <div
                            //     key={num}
                            //     id={num}
                            //     className="w-[90%] max-w-[90%] min-h-[600px] border border-black bg-white"
                            //     onDragOver={(event) => event.preventDefault()}
                            //     onDrop={(event) => handleDrop(event)}
                            // >
                            //     {ele.map((item)=>item)}
                            // </div>
                            <Page key={num} index ={index} ></Page>
                            // <About1/>
                        ))}

                        <div className="w-[90%] max-w-[90%] my-[40px] rounded-[5px] flex justify-center items-center bg-slate-300 hover:bg-slate-400">
                            <button
                                className="w-full p-[10px]"
                                onClick={addNewPage}
                            >
                                Add Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePortfolio;
