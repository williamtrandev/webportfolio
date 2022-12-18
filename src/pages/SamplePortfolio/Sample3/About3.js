import React from "react";
import { useState } from "react";
import P from "../../../components/Sample3/P";
import H from "../../../components/Sample3/H";
import Skill from "../../../components/Sample3/Skill";
import Span from "../../../components/Sample3/Span";
import TESTIMONIALS from "../../../components/Sample3/TESTIMONIALS";
import Plusbin from "../../../components/Plusbin/Plusbin";
import {
    FaSmile,
    FaAddressBook,
    FaHeadphones,
    FaAward,
    FaStoreAlt,
    FaSnapchatGhost,
} from "react-icons/fa";
import "./Sample3.css";

export default function About3() {
    const infor1 = [
        {
            id: 1,
            title: "Birthday: 01/01/2003",
        },
        {
            id: 2,
            title: "Website: www.example.com",
        },
        {
            id: 3,
            title: "Phone: 12121212",
        },
        {
            id: 4,
            title: "City: New York, USA",
        },
        {
            id: 5,
            title: "Age: 30",
        },
        {
            id: 6,
            title: "Degree: Master",
        },
        {
            id: 7,
            title: "PhEmailone: email@example.com",
        },
        {
            id: 8,
            title: "Freelance: Available",
        },
    ];
    const desIn4 = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    const skill = [
        {
            id: 1,
            title: "HTML",
            phantram: 20,
        },
        {
            id: 2,
            title: "CSS",
            phantram: 30,
        },
        {
            id: 3,
            title: "PHP",
            phantram: 69,
        },
    ];
    const test = [
        {
            id: 1,
            chamNgon:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nguyen Tan Thanh",
            congviec: "Freelancer",
        },
        {
            id: 2,
            chamNgon:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nguyen Tan Thanh",
            congviec: "Freelancer",
        },
        {
            id: 3,
            chamNgon:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nguyen Tan Thanh",
            congviec: "Freelancer",
        },
        {
            id: 4,
            chamNgon:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nguyen Tan Thanh",
            congviec: "Freelancer",
        },
        {
            id: 5,
            chamNgon:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nguyen Tan Thanh",
            congviec: "Freelancer",
        },
    ];
    const [itemInfo1, setitemInfo1] = useState(infor1);
    const [moTaInFo4, setmoTaInFo4] = useState(desIn4);
    const [SkillP, setSkill] = useState(skill);
    const [Testtimo, setTesttimo] = useState(test);
    const [img, setimg] = useState(
        "https://bootstrapmade.com/demo/templates/Personal/assets/img/me.jpg"
    );
    const onImageChange = (event) => {
        const URLIMAGE = URL.createObjectURL(event.target.files[0]);
        setimg(URLIMAGE);
    };

    const [tenNganh, setTenNganh] = useState("UI/UX & Graphic Designer");

    const motaAbout = [
        {
            id: 1,
            mota: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    const [cvDES, setCVDES] = useState(motaAbout);
    // 111111111111111111
    const ADDElement1 = () => {
        let idMax = Math.max.apply(
            Math,
            cvDES.map(function (o) {
                return o.id;
            })
        );
        const newGT = {
            id: idMax + 1,
            mota: "Thêm thông tin giới thiệu",
        };
        setCVDES([...cvDES, newGT]);
    };

    const DELETEElement1 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = cvDES.filter(function (element) {
            return element.id != indexRemove;
        });
        setCVDES(newGT);
    };
    //   2222222222222222
    const ADDElement2 = () => {
        let idMax = Math.max.apply(
            Math,
            itemInfo1.map(function (o) {
                return o.id;
            })
        );
        const newGT = {
            id: idMax + 1,
            title: "Thêm thông tin giới thiệu",
        };
        setitemInfo1([...itemInfo1, newGT]);
    };

    const DELETEElement2 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (
            indexRemove == 1 ||
            indexRemove == 2 ||
            indexRemove == 3 ||
            indexRemove == 4 ||
            indexRemove == 5 ||
            indexRemove == 6 ||
            indexRemove == 7 ||
            indexRemove == 8
        ) {
            return;
        }
        var newGT = itemInfo1.filter(function (element) {
            return element.id != indexRemove;
        });
        setitemInfo1(newGT);
    };
    //   33333333333333333333
    const ADDElement3 = () => {
        let idMax = Math.max.apply(
            Math,
            moTaInFo4.map(function (o) {
                return o.id;
            })
        );
        const newGT = {
            id: idMax + 1,
            title: "Thêm thông tin giới thiệu",
        };
        setmoTaInFo4([...moTaInFo4, newGT]);
    };

    const DELETEElement3 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = moTaInFo4.filter(function (element) {
            return element.id != indexRemove;
        });
        setmoTaInFo4(newGT);
    };

    // 4444444444444444444
    const ADDElement4 = () => {
        let idMax = Math.max.apply(
            Math,
            SkillP.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: idMax + 1,
            title: "add something",
            phantram: 0,
        };
        setSkill([...SkillP, newGT]);
    };

    const DELETEElement4 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = SkillP.filter(function (element) {
            return element.id != indexRemove;
        });
        setSkill(newGT);
    };
    const ADDElement5 = () => {
        let idMax = Math.max.apply(
            Math,
            Testtimo.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: idMax + 1,
            chamNgon: "Châm ngôn sống",
            linkimg:
                "https://bootstrapmade.com/demo/templates/Personal/assets/img/testimonials/testimonials-4.jpg",
            name: "Nhập tên của bạn",
            congviec: "Công việc",
        };
        setTesttimo([...Testtimo, newGT]);
    };

    const DELETEElement5 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = Testtimo.filter(function (element) {
            return element.id != indexRemove;
        });
        setTesttimo(newGT);
    };

    return (
        <div className="bg-black/90 w-full">
            {/* 111111111111111111111  */}
            <div className="title">
                <h2 className="px-6 text-xl pb-4">About</h2>
                <p className="px-6 font-bold pb-4 text-4xl">
                    LEARN MORE ABOUT ME
                </p>
            </div>
            {/* 22222222222222222222222222222  */}
            <div className="body px-6 flex grid grid-rows-1 grid-flow-col">
                <div className=" relative lg:w-80 md:w-full w-full h-[250px]">
                    <label
                        htmlFor="img"
                        className="absolute btn h-[100%] opacity-0 w-[100%]"
                    ></label>
                    <input
                        id="img"
                        type="file"
                        onChange={onImageChange}
                        className="  invisible absolute filetype z-0 w-1	 "
                    />
                    <img src={img} alt="avt" />
                </div>
                <div className="w-full md:w-full lg:w-100 pl-10">
                    <H
                        className={"text-green-600 font-medium text-3xl py-2"}
                        children={tenNganh}
                    />

                    {cvDES.map((item, index) => (
                        <div
                            key={index}
                            data-key={item.id}
                            className="relative congviec"
                        >
                            <P
                                key={index}
                                className={"font-normal text-base py-2"}
                                children={item.mota}
                            />
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien top-0 opacity-0 -left-7"}
                                onClickfuncADD={ADDElement1}
                                onClickfuncDELETE={DELETEElement1}
                            />
                        </div>
                    ))}

                    <div className="flex py-2 text-lg">
                        <div className="py-1 pr-12 w-full">
                            <ul className=" grid grid-rows-4 grid-flow-col gap-6">
                                {itemInfo1.map((item, index) => (
                                    <li
                                        data-key={item.id}
                                        key={index}
                                        className="relative congviec py-3"
                                    >
                                        <i className=" fa-solid fa-chevron-right pr-4 text-green-600"></i>
                                        <Plusbin
                                            keyIndex={item.id}
                                            classname={
                                                "dieukhien top-0 opacity-0 -left-7"
                                            }
                                            onClickfuncADD={ADDElement2}
                                            onClickfuncDELETE={DELETEElement2}
                                        />
                                        <Span children={item.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {moTaInFo4.map((item, index) => (
                        <div
                            key={index}
                            data-key={item.id}
                            className="relative congviec"
                        >
                            <P
                                className={"py-2 text-base"}
                                children={item.title}
                            />
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien top-0 opacity-0 -left-7"}
                                onClickfuncADD={ADDElement3}
                                onClickfuncDELETE={DELETEElement3}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* 333333333333333333333333333333333333333 */}
            <div className="flex justify-between px-6 pt-14 py-2">
                <div className="bg-white/10 text-center p-8 relative">
                    <FaSmile className="absolute text-green-600 -top-5 bg-white/20 p-3 text-5xl left-1/3 rounded-full" />
                    <span
                        className="py-2 block"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        232
                    </span>
                    <p contentEditable suppressContentEditableWarning={true}>
                        Happy Clients
                    </p>
                </div>
                <div className="bg-white/10 text-center p-8 relative">
                    <FaAddressBook className="absolute text-green-600 -top-5 bg-white/20 p-3 text-5xl left-1/3 rounded-full" />
                    <span
                        className="py-2 block"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        521
                    </span>
                    <p contentEditable suppressContentEditableWarning={true}>
                        Projects
                    </p>
                </div>
                <div className="bg-white/10 text-center p-8 relative">
                    <FaHeadphones className="absolute text-green-600 -top-5 bg-white/20 p-3 text-5xl left-1/3 rounded-full" />
                    <span
                        className="py-2 block"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        2133
                    </span>
                    <p contentEditable suppressContentEditableWarning={true}>
                        Hours Of Support
                    </p>
                </div>
                <div className="bg-white/10 text-center p-8 relative">
                    <FaAward className="absolute text-green-600 -top-5 bg-white/20 p-3 text-5xl left-1/3 rounded-full" />
                    <span
                        className="py-2 block"
                        contentEditable
                        suppressContentEditableWarning={true}
                    >
                        21
                    </span>
                    <p contentEditable suppressContentEditableWarning={true}>
                        Awards
                    </p>
                </div>
            </div>
            {/* 4444444444444444444444444444444 skill */}

            <div id="sample3_skill" className="px-6 py-4">
                <div className="title py-4">
                    <h2 className="relative text-lg">SKILLS</h2>
                </div>
                <div className="flex justify-between">
                    <div className="lg:w-full">
                        {SkillP.map((item, index) => (
                            // <div key={item.id} data-key={item.id} className="relative congviec">
                            //     <Skill title={item.title} phantram={item.phantram}/>
                            //     <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-7'} onClickfuncADD={ADDElement4} onClickfuncDELETE={DELETEElement4} />
                            // </div>
                            <div
                                key={index}
                                data-key={item.id}
                                className="relative congviec"
                            >
                                <Skill
                                    title={item.title}
                                    phantram={item.phantram}
                                />
                                <Plusbin
                                    keyIndex={item.id}
                                    classname={
                                        "dieukhien top-0 opacity-0 -left-7"
                                    }
                                    onClickfuncADD={ADDElement4}
                                    onClickfuncDELETE={DELETEElement4}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 55555555555555555555555 interests */}
            <div id="sample3_inter" className="px-6 py-4 ">
                <div className="title py-4">
                    <h2 className="relative text-lg">INTERESTS</h2>
                </div>
                <div className="w-full flex justify-between py-4">
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaStoreAlt className="pr-4 text-4xl pb-2 text-orange-500" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaSnapchatGhost className="pr-4 text-4xl pb-2 text-amber-900" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaStoreAlt className="pr-4 text-4xl pb-2 text-lime-500" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaSnapchatGhost className="pr-4 text-4xl pb-2 text-green-400" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between py-4">
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaStoreAlt className="pr-4 text-4xl pb-2 text-emerald-500" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaSnapchatGhost className="pr-4 text-4xl pb-2 text-teal-400" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaStoreAlt className="pr-4 text-4xl pb-2 text-indigo-500" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-white/10 hover:bg-white/20">
                        <div className="flex">
                            <FaSnapchatGhost className="pr-4 text-4xl pb-2" />
                            <span
                                className="text-xl"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Lorem Ipsum
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 666666666666666666666   test*/}
            <div id="sample3_test" className="px-6 py-4 ">
                <div className="title py-4">
                    <h2 className="relative text-lg">TESTIMONIALS</h2>
                </div>
                {/* 21212  */}
                <div className="">
                    <div className="px-6 py-10 grid grid-rows-2 grid-flow-col gap-10">
                        {Testtimo.map((item, index) => (
                            <div
                                key={index}
                                data-key={item.id}
                                className="relative congviec"
                            >
                                <TESTIMONIALS
                                    id={item.id}
                                    key={index}
                                    chamNgon={item.chamNgon}
                                    linkimg={item.linkimg}
                                    name={item.name}
                                    congviec={item.congviec}
                                />
                                <Plusbin
                                    keyIndex={item.id}
                                    classname={
                                        "dieukhien top-0 opacity-0 -left-7"
                                    }
                                    onClickfuncADD={ADDElement5}
                                    onClickfuncDELETE={DELETEElement5}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* 212121 */}
            </div>
        </div>
    );
}
