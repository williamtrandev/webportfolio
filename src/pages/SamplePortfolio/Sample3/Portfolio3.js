import React from "react";
import { useState } from "react";
import Plusbin from "../../../components/Plusbin/Plusbin";
import Project from "../../../components/Sample3/Project";
import "./Sample3.css";


export default function Portfolio3() {

    const portfolios = [
        {
            id: 1,   
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
        {
            id:2,
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
        {
            id:3,
            
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
        {
            id:4,
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
        {
            id:5,
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
        {
            id:6,
            name: "Tên Web",
            Category:"Web design",
            Client:"ASU company",
            date: "01 March, 2020",
            url: "www.example.com",
            congdung: "Do hiện nay khi buôn bán, ta thường sử dụng phần mềm Excel, hoặc sổ sách để lưu lại những gì ta bán, khách hàng, v/v… Nhận thấy được sự bất tiện nên nhóm mình đã xây dựng dự án này",
        },
    ];

    const [pfo, setPfo] = useState(portfolios);
          //   44444444444444444444444444444444444444444444 
          const ADDElement4 = () => {
            let idMax = Math.max.apply(Math, pfo.map(function(o) { return o.id; }))
            // console.log(sumary)
            const newGT = {
                id:idMax + 1,
                name: "Tên Web",
                Category:"Thể loại web",
                Client:"Tên...",
                date: "Ngày",
                url: "www.example.com",
                congdung: "Mô tả về web làm về gì",
            }
            setPfo([...pfo, newGT ])
          };
    
        
          const DELETEElement4 = (e) => {
            let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
            // console.log(indexRemove);
            if(indexRemove == 1){
                return;
            }
            var newGT = pfo.filter(function(element){
                return element.id != indexRemove;
            });
            setPfo(newGT);
            
          };

    return (
        <div className="bg-black/90 w-full">
            {/* 111111111111111111111  */}
            <div className="title">
                <h2 className="px-6 text-xl pb-4">Portfolio</h2>
                <p className="px-6 font-bold pb-4 text-4xl">MY WORKS</p>
                <p className="px-6 font-bold pb-4 text-base">My projects</p>
            </div>

            {/* 22222222222  */}

            <div className="px-6 py-10 grid grid-rows-4 grid-flow-row gap-10 bg-white/10">
            {pfo.map((item) => (
                        <div  key={item.id} data-key={item.id} className="px-6 py-4 relative congviec">
                        <Project item={item} />
                        <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-2'} onClickfuncADD={ADDElement4} onClickfuncDELETE={DELETEElement4} />
                </div>
                    ))}
            </div>
        </div>
    );
}
