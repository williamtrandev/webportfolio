import Skills from "../../../components/Sample2/Skills";
import { useState } from "react";
import Plusbin from "../../../components/Plusbin/Plusbin";
function Skill2() {
    const skill = [
        {
            id: 1,
            phantram: 10,
            ngonngu: "PHP",
            mota: "Laravel và một số thư viện của nó",
        },
        {
            id: 2,
            phantram: 10,
            ngonngu: "MYSQL",
            mota: "Xây dựng cơ sở dữ liệu",
        },
        {
            id: 3,
            phantram: 10,
            ngonngu: "MYSQL",
            mota: "Xây dựng cơ sở dữ liệu",
        },
        {
            id: 4,
            phantram: 13,
            ngonngu: "HTML5 / CSS3 / JAVASCRIPT",
            mota: "Biết căn bản và biết một số thư viện như bootstrap, tailwind, jQuery, ...",
        },
        {
            id: 5,
            phantram: 12,
            ngonngu: "PHP",
            mota: "Laravel và một số thư viện của nó",
        },
        {
            id: 6,
            phantram: 11,
            ngonngu: "PHP",
            mota: "Laravel và một số thư viện của nó",
        },
    ];

    const [kn2, setkn2] = useState(skill);

    const ADDElement1 = () => {
        let idMax = Math.max.apply(
            Math,
            kn2.map(function (o) {
                return o.id;
            })
        );
        // console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            phantram: 0,
            ngonngu: "...",
            mota: "detail",
        };
        setkn2([...kn2, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement1 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = kn2.filter(function (element) {
            return element.id != indexRemove;
        });
        setkn2(newGT);
    };

    return (
        <section
            name="skills"
            id="skill2"
            className="my-12 pt-[100px] "
            spellCheck="false"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="flex justify-center pb-4 ">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Skills
                    </h4>
                </div>
                <p
                    className="text-center text-lg pb-12"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    {" "}
                    Kĩ năng của tụi mình{" "}
                </p>

                <div>
                    <div className="flex flex-col bg-black/40 p-8 m-4 flex-wrap">
                        {kn2.map((item) => (
                            <div
                                key={item.id}
                                data-key={item.id}
                                className="relative congviec"
                            >
                                <Skills item={item} />
                                <Plusbin
                                    keyIndex={item.id}
                                    classname={
                                        "dieukhien opacity-0 -left-5 -top-0"
                                    }
                                    onClickfuncADD={ADDElement1}
                                    onClickfuncDELETE={DELETEElement1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="flex justify-between text-white pt-2 bg-white/10 py-6 rounded px-4">
                    <div className="flex items-center flex-col ">
                        <FaSmile className="py-1 text-blue-500 text-4xl" />
                        <span
                            contentEditable
                            suppressContentEditableWarning={true}
                            className="py-1"
                        >
                            10
                        </span>
                        <p className="py-1">Hạnh phúc</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <FaRegClock className="py-1 text-blue-500 text-4xl" />
                        <span
                            contentEditable
                            suppressContentEditableWarning={true}
                            className="py-1"
                        >
                            10
                        </span>
                        <p className="py-1">Số giờ làm việc</p>
                    </div>

                    <div className="flex items-center flex-col">
                        <FaAward className="py-1 text-blue-500 text-4xl" />
                        <span
                            contentEditable
                            suppressContentEditableWarning={true}
                            className="py-1"
                        >
                            10
                        </span>
                        <p className="py-1">Giải thưởng</p>
                    </div>

                    <div className="flex items-center flex-col">
                        <FaHeadphones className="py-1 text-blue-500 text-4xl" />
                        <span
                            contentEditable
                            suppressContentEditableWarning={true}
                            className="py-1"
                        >
                            10
                        </span>
                        <p className="py-1">Dự án hoàn thành</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default Skill2;
