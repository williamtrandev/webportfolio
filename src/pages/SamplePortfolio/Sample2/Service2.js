import Service from "../../../components/Sample2/Service";
import Plusbin from "../../../components/Plusbin/Plusbin";

import {
    FaXbox,
    FaFileSignature,
    FaTachometerAlt,
    FaFileVideo,
    FaBroadcastTower,
    FaCloudMoon,
} from "react-icons/fa";
import { useState } from "react";

function Service2() {
    const service2 = [
        {
            id: 1,
            icon: FaXbox,
            title: "Web Development",
            describe:
                "Lập trình Web với ngôn ngữ PHP, JS. Sử dụng cơ sở dữ liệu MySQL",
        },
        {
            id: 2,
            icon: FaFileSignature,
            title: "Cách làm việc",
            describe:
                "Biết lắng nghe người khác, làm việc nhóm chưa hiệu quả và có trách nhiệm với công việc.",
        },
        {
            id: 3,
            icon: FaTachometerAlt,
            title: "Kiểm thử phần mềm",
            describe: "Kiểm thử phần mềm theo yêu cầu",
        },
        {
            id: 4,
            icon: FaFileVideo,
            title: "Thứ gì đó khác",
            describe: "Pla pla...",
        },
    ];

    const [ser2, setser2] = useState(service2);
    const ADDElement1 = () => {
        let idMax = Math.max.apply(
            Math,
            ser2.map(function (o) {
                return o.id;
            })
        );
        // console.log(idMax);
        const newGT = {
            id: idMax + 1,
            icon: FaFileVideo,
            title: "...",
            describe: "detail",
        };
        setser2([...ser2, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement1 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = ser2.filter(function (element) {
            return element.id != indexRemove;
        });
        setser2(newGT);
    };

    return (
        <section
            id="service2"
            name="service"
            className="my-12 pt-[100px]  "
            spellCheck="false"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="flex justify-center pb-4 ">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Service
                    </h4>
                </div>
                <p
                    className="text-center text-lg pb-12"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    {" "}
                    Đây là những khả năng khác của mình. ^^
                </p>

                <div className="flex flex-wrap justify-between">
                    {ser2.map((item) => (
                        <div
                            key={item.id}
                            data-key={item.id}
                            className="relative congviec mb-4 rounded"
                        >
                            <Service item={item} />
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien opacity-0 -left-4 -top-0"}
                                onClickfuncADD={ADDElement1}
                                onClickfuncDELETE={DELETEElement1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Service2;
