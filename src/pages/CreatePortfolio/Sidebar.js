import React, { useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { SiElement } from "react-icons/si";
import { CgComponents } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";
import { GiBlackBook } from "react-icons/gi";
import imgBlock1 from "../../assets/block1.png";
import imgBlock2 from "../../assets/block2.png";
import imgBlock3 from "../../assets/block3.png";
import imgBlock4 from "../../assets/block4.png";
import home1 from "../../assets/hom1.png";
import about1 from "../../assets/about1.png";
import contact1 from "../../assets/contact1.png";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import config from "../../config";
import { BiDownload } from "react-icons/bi";
export default function Sidebar() {
    const sampleItems = [
        {
            id: "Sample_1",
            img: home1,
        },
        {
            id: "Sample_2",
            img: about1,
        },
        {
            id: "Sample_3",
            img: contact1,
        },
    ];
    const componentsItems = [
        {
            id: "Components_1",
            img: imgBlock1,
        },
        {
            id: "Components_2",
            img: imgBlock2,
        },
        {
            id: "Components_3",
            img: imgBlock3,
        },
        {
            id: "Components_4",
            img: imgBlock4,
        },
    ];
    const textItems = [
        {
            id: "Text_1",
            title: "Add Text",
        },
        {
            id: "Text_2",
            title: "Add Heading",
        },
        {
            id: "Text_3",
            title: "Add Ruler",
        },
        {
            id: "Text_4",
            title: "https://static.thenounproject.com/png/3322766-200.png",
        },
    ];
    const handleDragStart = (event) => {
        return event.dataTransfer.setData("Text1", event.target.id);
    };
    const [textOpen, setTextOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = (event, title) => {
        const items = document.getElementsByClassName("li-items");
        const ids = [];
        [...items].forEach((i) => {
            i.classList.remove(
                "rounded-br-[10px]",
                "rounded-tr-[10px]",
                "!text-white",
                "!bg-cyan-800"
            );
            ids.push(i.id);
        });
        const preItems = [...items][ids.indexOf(title) - 1];
        const nextItems = [...items][ids.indexOf(title) + 1];
        preItems && preItems.classList.add("rounded-br-[10px]");
        nextItems && nextItems.classList.add("rounded-tr-[10px]");
        [...items][ids.indexOf(title)].classList.add(
            "!text-white",
            "!bg-cyan-800"
        );
        var images = document.getElementsByClassName("imgNavbar");
        while (images.length > 0) {
            images[0].parentNode.removeChild(images[0]);
        }
        const container = document.getElementById("show-box");
        if (title === "Sample") {
            setTextOpen(false);
            sampleItems.map((items) => {
                var image = new Image();
                image.src = items.img;
                image.id = items.id;
                image.classList.add(
                    "imgNavbar",
                    "h-[150px]",
                    "w-full",
                    "cursor-pointer"
                );
                image.setAttribute("draggable", "true");
                image.addEventListener("dragstart", handleDragStart);
                document.getElementById("show-box").appendChild(image);
            });
        }
        if (title === "Components") {
            setTextOpen(false);
            componentsItems.map((items) => {
                var image = document.createElement("img");
                image.src = items.img;
                image.id = items.id;
                image.classList.add(
                    "imgNavbar",
                    "h-[150px]",
                    "w-full",
                    "cursor-pointer"
                );
                image.setAttribute("draggable", "true");
                image.addEventListener("dragstart", handleDragStart);
                console.log(image);
                container.appendChild(image);
            });
        }
        if (title === "Text & Image") {
            setTextOpen(true);
            textItems.map((items) => {
                var divElement = document.createElement("div");
                divElement.id = items.id;
                divElement.classList.add(
                    "imgNavbar",
                    "w-[90%]",
                    "flex",
                    "items-center",
                    "mb-[20px]",
                    "cursor-pointer",
                    "bg-cyan-700",
                    "rounded-[10px]",
                    "flex",
                    "justify-center",
                    "items-center",
                    "font-dance"
                );
                if (items.title.includes("png")) {
                    var image = document.createElement("img");
                    image.src = items.title;
                    image.id = items.id;
                    image.classList.add("w-[100px]", "h-[100px]");
                    divElement.appendChild(image);
                } else {
                    divElement.innerHTML =
                        "<span class='p-[10px]'>" + items.title + "</span>";
                }
                console.log(divElement);
                divElement.setAttribute("draggable", "true");
                divElement.addEventListener("dragstart", handleDragStart);
                container.appendChild(divElement);
            });
        }
        setOpen(true);
    };
    const handleClose = () => {
        const items = document.getElementsByClassName("li-items");
        [...items].forEach((i) => {
            i.classList.remove(
                "rounded-br-[10px]",
                "rounded-tr-[10px]",
                "!text-white",
                "!bg-cyan-800"
            );
        });
        setOpen(false);
    };
    const handleDownload = () => {
        const webBody = document.getElementById("portfolio").cloneNode(true);
        // const cloneContact = (
        //     <Contact1 width={window.innerWidth} height={window.innerHeight} />
        // );
        // const test = renderToString(cloneContact);
        // console.log("clone ct", test);
        const pages = webBody.getElementsByClassName("Page");
        const editItems = webBody.getElementsByClassName("canEdit");
        [...editItems].forEach((item) => {
            item.removeAttribute("contenteditable");
            item.classList.add("!cursor-default");
        });
        const draggableItems =
            webBody.getElementsByClassName("react-draggable");
        [...draggableItems].forEach((item) => {
            item.classList.add("!cursor-default");
            item.removeChild(item.lastChild);
            [...item.children].forEach((item2) => {
                item2.classList.add("!border-none");
                item2.removeAttribute("contenteditable");
            });
        });
        [...webBody.getElementsByClassName("editableBox")].forEach((item) => {
            item.firstChild.removeAttribute("contenteditable");
        });
        const hiddenAdd = webBody.getElementsByClassName("removeAdd")[0];
        hiddenAdd.classList.add("hidden");
        [...pages].forEach((pageItem) => {
            const div = document.createElement("div");
            div.classList.add("relative", "w-[1100px]", "h-[600px]");
            const childItems = pageItem.getElementsByClassName("changeClass");
            [...childItems].forEach((child) => {
                child.classList.add("!h-screen");
                div.appendChild(child);
            });
            pageItem.classList.add(
                "!w-full",
                "!max-w-full",
                "!h-screen",
                "!mt-0",
                "!border-none",
                "flex",
                "justify-center",
                "items-center"
            );

            [...div.children].forEach((item) => item.classList.add("!bg-none"));
            pageItem.appendChild(div);
        });
        const data = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Portfolio</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                body {
                    font-size: 1.6rem;
                    text-rendering: optimizeSpeed;
                }
            </style>
        </head>
        <body>
            ${webBody.outerHTML}
        </body>
        </html>`;
        const filename = "webportfolio.html";
        const blob = new Blob([data], { type: "text/plain" });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const elem = window.document.createElement("a");
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    };

    const navItems = [
        {
            id: 1,
            title: "Sample",
            icon: <AiOutlineAppstore></AiOutlineAppstore>,
        },
        {
            id: 2,
            title: "Components",
            icon: <CgComponents></CgComponents>,
        },
        {
            id: 3,
            title: "Text & Image",
            icon: <SiElement></SiElement>,
        },
    ];
    useEffect(() => {
        handleOpen(null, "Sample");
    }, []);

    return (
        <div className="min-w-[348px] flex-shrink-0 block">
            <div className="h-screen bg-cyan-900 text-slate-400 pt-[30px] relative overflow-hidden">
                <ul className="absolute bg-cyan-800">
                    <Link to={config.routes.home}>
                        <div className="flex flex-col justify-center items-center bg-cyan-900 h-[98px] cursor-pointer hover:bg-cyan-800 group">
                            <button className="mt-[5px] flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-white">
                                <HiHome className="group-hover:text-black text-[24px]"></HiHome>
                            </button>
                            <span className="text-[15px] group-hover:text-white">
                                Home
                            </span>
                        </div>
                    </Link>
                    <Link to={config.routes.SamplePortfolio}>
                        <div className="flex flex-col justify-center items-center bg-cyan-900 h-[98px] cursor-pointer hover:bg-cyan-800 group">
                            <button className="mt-[5px] flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-white">
                                <GiBlackBook className="group-hover:text-black text-[24px]"></GiBlackBook>
                            </button>
                            <span className="text-[15px] group-hover:text-white">
                                Back Sample
                            </span>
                        </div>
                    </Link>
                    {navItems.map(({ id, title, icon }) => (
                        <li
                            id={title}
                            className="li-items h-[98px] w-[98px] flex flex-col justify-center items-center cursor-pointer hover:text-white bg-cyan-900"
                            onClick={(event) => handleOpen(event, title)}
                            key={id}
                        >
                            {icon}
                            <p className="text-[15px]">{title}</p>
                        </li>
                    ))}
                    <div
                        className="group h-[98px] w-[98px] flex flex-col justify-center items-center bg-cyan-900 cursor-pointer hover:text-white bg-cyan-900"
                        onClick={handleDownload}
                    >
                        <button className="mt-[5px] w-[30px] h-[30px] rounded-[50%] bg-white flex justify-center items-center">
                            <BiDownload className="group-hover:text-black text-[24px]"></BiDownload>
                        </button>
                        <span className="text-[15px]">Download</span>
                    </div>
                </ul>
                <div className="w-[250px] absolute top-0 right-0 bg-cyan-800 h-full">
                    <div
                        id="show-box"
                        className={
                            "flex flex-col items-center h-full justify-around pt-[50px] px-[10px] text-white"
                        }
                    ></div>
                </div>
            </div>
        </div>
    );
}
