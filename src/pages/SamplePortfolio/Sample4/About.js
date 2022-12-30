import Info4 from "../../../components/Sample4/Info";
import { FaBook } from "react-icons/fa";
import Plusbin from "../../../components/Plusbin/Plusbin";
import Skill4 from "../../../components/Sample4/Skill4";
import { useState } from "react";
import "./style.css";
import Edu4 from "../../../components/Sample4/Edu4";
import Exp4 from "../../../components/Sample4/Exp4";
export default function About() {
    const info = [
        {
            id: 1,
            content1: "Birthday",
            content2: 2003,
        },
        {
            id: 2,
            content1: "Age",
            content2: 19,
        },
        {
            id: 3,
            content1: "Location",
            content2: "Ho Chi Minh City",
        },
        {
            id: 4,
            content1: "Phone",
            content2: "090192323",
        },
        {
            id: 5,
            content1: "University",
            content2: "Ton Duc Thang University",
        },
        {
            id: 6,
            content1: "Mail",
            content2: "tsimple@gmail.com",
        },
    ];
    const skillsInfo = [
        {
            id: 1,
            skill: "JS",
            percent: 95,
        },
        {
            id: 2,
            skill: "PHP",
            percent: 60,
        },
        {
            id: 3,
            skill: "HTML",
            percent: 76,
        },
        {
            id: 4,
            skill: "React",
            percent: 67,
        },
    ];
    const educationInfo = [
        {
            id: 1,
            time: "2020-2022",
            title: "Master In Sofware Engineering",
            detail: "Graduated at Ton Duc Thang University with GPA 3.78 (of scale 4.00)",
        },
        {
            id: 2,
            time: "2020-2022",
            title: "Master In Sofware Engineering",
            detail: "Graduated at Ton Duc Thang University with GPA 3.78 (of scale 4.00)",
        },
        {
            id: 3,
            time: "2020-2022",
            title: "Master In Sofware Engineering",
            detail: "Graduated at Ton Duc Thang University with GPA 3.78 (of scale 4.00)",
        },
    ];
    const experienceInfo = [
        {
            id: 1,
            time: "2018-2019",
            title: "Front-end developer (Fresher) at TSimple",
            detail: "Ensuring high performance on mobile and desktop. Proposal new idea and building tool helping internal team and users ",
        },
        {
            id: 2,
            time: "2019-2020",
            title: "Back-end developer at TSimple",
            detail: "Ensuring high performance on mobile and desktop. Proposal new idea and building tool helping internal team and users ",
        },
        {
            id: 3,
            time: "2020-2022",
            title: "Full-Stack developer at TSimple",
            detail: "Ensuring high performance on mobile and desktop. Proposal new idea and building tool helping internal team and users ",
        },
    ];

    const [skill4, setskill4] = useState(skillsInfo);
    const [info4, setinfo4] = useState(info);
    const [edu4, setedu4] = useState(educationInfo);
    const [exp4, setexp4] = useState(experienceInfo);
    // 1111111111111111111
    const ADDElement = () => {
        let idMax = Math.max.apply(
            Math,
            skill4.map(function (o) {
                return o.id;
            })
        );
        // console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            skill: "add",
            percent: 0,
        };
        setskill4([...skill4, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = skill4.filter(function (element) {
            return element.id != indexRemove;
        });
        setskill4(newGT);
    };

    const ADDElement1 = () => {
        let idMax = Math.max.apply(
            Math,
            info4.map(function (o) {
                return o.id;
            })
        );
        // console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            content1: "someting",
            content2: "somthing",
        };
        setinfo4([...info4, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement1 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (
            indexRemove == 1 ||
            indexRemove == 2 ||
            indexRemove == 3 ||
            indexRemove == 4 ||
            indexRemove == 5 ||
            indexRemove == 6
        ) {
            return;
        }
        var newGT = info4.filter(function (element) {
            return element.id != indexRemove;
        });
        setinfo4(newGT);
    };

    const ADDElement2 = () => {
        let idMax = Math.max.apply(
            Math,
            edu4.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            time: "year",
            title: "Major",
            detail: "describe",
        };
        setedu4([...edu4, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement2 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = edu4.filter(function (element) {
            return element.id != indexRemove;
        });
        setedu4(newGT);
    };

    const ADDElement3 = () => {
        let idMax = Math.max.apply(
            Math,
            exp4.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            time: "time",
            title: "job",
            detail: "describe ",
        };
        setexp4([...exp4, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement3 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = exp4.filter(function (element) {
            return element.id != indexRemove;
        });
        setexp4(newGT);
    };

    return (
        <section id="about" className="about section" spellCheck="false">
            <div className="container-content">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>About us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    I'm Thanh and studying Software Engineering
                                    at{" "}
                                    <span
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Ton Duc Thang University
                                    </span>
                                </h3>
                                <p
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    I'm a second-year student and I love dogs
                                    and cats but 1 month ago, a dog bit me.
                                </p>
                            </div>
                        </div>
                        {/* Thong tin ca nhan va ki nang */}
                        <div className="row">
                            {/* Thong tin ca nhan */}
                            <div className="personal-info padd-15">
                                <h2 className="skill-title text-4xl py-2 font-bold text-center">
                                    My Personal Infomation
                                </h2>
                                <div className="row">
                                    {info4.map((item) => (
                                        <div
                                            key={item.id}
                                            data-key={item.id}
                                            className="info-item padd-15 congviec relative "
                                        >
                                            <Info4 item={item} />
                                            <Plusbin
                                                keyIndex={item.id}
                                                classname={
                                                    "dieukhien opacity-0 -left-4 -top-0"
                                                }
                                                onClickfuncADD={ADDElement1}
                                                onClickfuncDELETE={
                                                    DELETEElement1
                                                }
                                                bgColorChange={"bgColorChange"}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Cac ki nang */}
                            <div id="Skill_Sample4" className=" skills padd-15">
                                <h2 className="skill-title text-4xl py-2 font-bold text-center">
                                    My Skills
                                </h2>
                                <div className="row">
                                    {skill4.map((item) => (
                                        <div
                                            key={item.id}
                                            data-key={item.id}
                                            className="skills-item congviec relative padd-15"
                                        >
                                            <Skill4 key={item.id} item={item} />
                                            <Plusbin
                                                keyIndex={item.id}
                                                classname={
                                                    "dieukhien opacity-0 -left-4 -top-0"
                                                }
                                                onClickfuncADD={ADDElement}
                                                onClickfuncDELETE={
                                                    DELETEElement
                                                }
                                                bgColorChange={"bgColorChange"}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Trinh do hoc van va kinh nghiem */}
                        <div className="row">
                            <div
                                id="edu_sample4"
                                className=" education padd-15"
                            >
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        {/* Hoc Van */}
                                        <div className="timeline shadow-dark">
                                            {edu4.map((item) => (
                                                <div
                                                    key={item.id}
                                                    data-key={item.id}
                                                    className="timeline-item congviec relative"
                                                >
                                                    <Edu4 item={item} />
                                                    <Plusbin
                                                        keyIndex={item.id}
                                                        classname={
                                                            "dieukhien opacity-0 -left-6 -top-0"
                                                        }
                                                        onClickfuncADD={
                                                            ADDElement2
                                                        }
                                                        onClickfuncDELETE={
                                                            DELETEElement2
                                                        }
                                                        bgColorChange={
                                                            "bgColorChange"
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="exp_sample4"
                                className=" experience padd-15"
                            >
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        {/* Kinh nghiem */}
                                        <div className="timeline shadow-dark">
                                            {exp4.map((item) => (
                                                <div
                                                    key={item.id}
                                                    data-key={item.id}
                                                    className="timeline-item congviec relative"
                                                >
                                                    <Exp4 item={item} />
                                                    <Plusbin
                                                        keyIndex={item.id}
                                                        classname={
                                                            "dieukhien opacity-0 -left-6 -top-0"
                                                        }
                                                        onClickfuncADD={
                                                            ADDElement3
                                                        }
                                                        onClickfuncDELETE={
                                                            DELETEElement3
                                                        }
                                                        bgColorChange={
                                                            "bgColorChange"
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
