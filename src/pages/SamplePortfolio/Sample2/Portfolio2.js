import Plusbin from "../../../components/Plusbin/Plusbin";
import Pro2 from "../../../components/Sample2/pro2";
import { useState } from "react";

export default function Portfolio2() {
    const portfolios = [
        {
            id: 1,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
        {
            id: 2,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
        {
            id: 33,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
        {
            id: 321,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
        {
            id: 21,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
        {
            id: 99,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        },
    ];

    const [pro, setpro] = useState(portfolios);

    const ADDElement1 = () => {
        let idMax = Math.max.apply(
            Math,
            pro.map(function (o) {
                return o.id;
            })
        );
        // console.log(idMax);
        const newGT = {
            id: idMax + 1,
            src: "https://i.pinimg.com/736x/aa/97/1c/aa971cbceaa9f9cf6394b61cbd7fc5f1.jpg",
            tenWeb: "Web",
            linkWeb: "https://example.com",
            theloai: "web/app",
            mota: "web dùng để làm gì, công dụng",
            date: "1/1/2002",
            client: "Tran Thanh",
        };
        setpro([...pro, newGT]);
        // console.log(gioithieuCV);
    };

    const DELETEElement1 = (e) => {
        let indexRemove =
            e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if (indexRemove == 1) {
            return;
        }
        var newGT = pro.filter(function (element) {
            return element.id != indexRemove;
        });
        setpro(newGT);
    };

    return (
        <section
            name="portfolio"
            id="project2"
            className=" my-12 pt-[100px]  "
            spellCheck="false"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="flex justify-center pb-8">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Các sản phẩm / dự án
                    </h4>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {pro.map((item) => (
                        <div
                            key={item.id}
                            data-key={item.id}
                            className="relative congviec w-auto shadow-md shadow-gray-600 rounded-lg cursor-pointer"
                        >
                            <Pro2 item={item} />
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
