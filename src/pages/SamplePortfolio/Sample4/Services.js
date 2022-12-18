import { FaMobileAlt, FaDesktop, FaPaintBrush } from "react-icons/fa";
import Service4 from "../../../components/Sample4/Service4";
import Plusbin from "../../../components/Plusbin/Plusbin";
import { useState } from "react";

export default function Services() {
    const serviceItems = [
        {
            id: 1,
            icon: <FaMobileAlt className="fa"></FaMobileAlt>,
            title: "Mobile App",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
        {
            id: 2,
            icon: <FaDesktop className="fa"></FaDesktop>,
            title: "Desktop App",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
        {
            id: 3,
            icon: <FaPaintBrush className="fa"></FaPaintBrush>,
            title: "Design UI/UX",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
        {
            id: 4,
            icon: <FaMobileAlt className="fa"></FaMobileAlt>,
            title: "Manual Test",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
        {
            id: 5,
            icon: <FaDesktop className="fa"></FaDesktop>,
            title: "Computer Security",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
        {
            id: 6,
            icon: <FaPaintBrush className="fa"></FaPaintBrush>,
            title: "Business Analyst",
            detail: "Dealing with the design, development, testing, and maintenance of software applications.",
        },
    ];

    const [ser, setser] = useState(serviceItems);

    const ADDElement3 = () => {
        let idMax = Math.max.apply(
            Math,
            ser.map(function (o) {
                return o.id;
            })
        );
        console.log(idMax);
        const newGT = {
            id: 1 + idMax,
            icon: <FaMobileAlt className="fa"></FaMobileAlt>,
            title: "Title",
            detail: "Detail",
        };
        setser([...ser, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement3 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = ser.filter(function (element) {
            return element.id != indexRemove;
        });
        setser(newGT);
    };
    return (
        <section id="services" className="service section" spellCheck="false">
            <div className="container-content">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    {ser.map((item) => (
                        <div
                            key={item.id}
                            data-key={item.id}
                            className="service-item padd-15 congviec relative"
                        >
                            <Service4 item={item} />
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien opacity-0 -left-2 -top-0"}
                                onClickfuncADD={ADDElement3}
                                onClickfuncDELETE={DELETEElement3}
                                bgColorChange={"bgColorChange"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
