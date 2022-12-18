import React from "react";
import { useState } from "react";
import Service from "../../../components/Sample3/Service";
import Plusbin from "../../../components/Plusbin/Plusbin";
import { FaXbox, FaFileSignature, FaTachometerAlt, FaFileVideo, FaBroadcastTower, FaCloudMoon } from "react-icons/fa";

import "./Sample3.css";


export default function Services3() {
    const service = [
        {
            id: 1,
            icon: FaXbox,
            title:"Sed ut perspiciatis",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
          
        },
        {
            id: 2,
            icon: FaFileSignature,
            title:"Magni Dolores",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            id: 3,
            icon: FaTachometerAlt,
            title:"Divera don",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            id: 4,
            icon: FaFileVideo,
            title:"Nemo Enim",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            id: 5,
            icon: FaBroadcastTower,
            title:"Dele cardo",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            id: 6,
            icon: FaCloudMoon,
            title:"Divera don",
            describe: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
    ];
    const [sirv, setsirv] = useState(service);
      //   44444444444444444444444444444444444444444444 
      const ADDElement4 = () => {
        let idMax = Math.max.apply(Math, sirv.map(function(o) { return o.id; }))
        // console.log(sumary)
        const newGT = {
            id: idMax+1,
            icon: FaCloudMoon,
            title:"Tiêu đề",
            describe: "Mô tả",
        }
        setsirv([...sirv, newGT ])
      };

    
      const DELETEElement4 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if(indexRemove == 1){
            return;
        }
        var newGT = sirv.filter(function(element){
            return element.id != indexRemove;
        });
        setsirv(newGT);
        
      };
    return ( 
        <div className="bg-black/90 w-full">
        {/* 11111111111111111111  */}
            <div className="title">
                <h2 className="px-6 text-xl pb-4">SERVICES</h2>
                <p className="px-6 font-bold pb-4 text-4xl">MY SERVICES</p>
            </div>

            <div className="px-6 py-10 grid grid-rows-3 grid-flow-row gap-0">
            {sirv.map((item) => (
                        <div  key={item.id} data-key={item.id} className="px-6 py-4 relative congviec">
                            <Service item={item}/>
                            <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-2'} onClickfuncADD={ADDElement4} onClickfuncDELETE={DELETEElement4} />
                    </div>
                    ))}

            </div>

        </div>
     );
}

