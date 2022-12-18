import "./style.css";
import { useState } from "react";
import Pro from "../../../components/Sample4/Pro";
import Plusbin from "../../../components/Plusbin/Plusbin";

export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
        {
            id: 2,
            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
        {
            id: 3,

            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
        {
            id: 4,
            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
        {
            id: 5,
            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
        {
            id: 6,
            name: "Tên Web",
            Category: "Web design",
            Client: "ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung:
                "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel.",
        },
    ];

    const [pfo, setPfo] = useState(portfolios);
    //   44444444444444444444444444444444444444444444
    const ADDElement4 = () => {
        let idMax = Math.max.apply(
            Math,
            pfo.map(function (o) {
                return o.id;
            })
        );
        // console.log(sumary)
        const newGT = {
            id: idMax + 1,
            name: "Tên Web",
            Category: "Thể loại web",
            Client: "Tên...",
            date: "Ngày",
            url: "www.example.com",
            congdung: "Mô tả về web làm về gì",
        };
        setPfo([...pfo, newGT]);
    };

    const DELETEElement4 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = pfo.filter(function (element) {
            return element.id != indexRemove;
        });
        setPfo(newGT);
    };

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container-content">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Last Projects :</h2>
                    </div>
                </div>
                <div className="row">
                    {pfo.map((item) => (
                        <div className="portfolio-item padd-15 relative congviec">
                            <Pro MenuItem={item} className={"shadow-dark"} colorChange={"colorChange"}/>
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien opacity-0 -left-2 -top-0"}
                                onClickfuncADD={ADDElement4}
                                onClickfuncDELETE={DELETEElement4}
                                bgColorChange={"bgColorChange"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
