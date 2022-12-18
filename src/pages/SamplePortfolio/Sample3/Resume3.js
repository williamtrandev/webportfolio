import React from "react";
import H from "../../../components/Sample3/H";
import P from "../../../components/Sample3/P";
import Span from '../../../components/Sample3/Span';
import Plusbin from "../../../components/Plusbin/Plusbin";
import Edu from "../../../components/Sample3/Edu";
import Exp from "../../../components/Sample3/Exp";

import { useState } from "react";
import "./Sample3.css";


export default function Resume3() {
    const info = [
        {
            id: 1,
            title: 'Portland par 127,Orlando, FL'
        },
        {
            id: 2,
            title: '(123) 456-7891'
        },
        {
            id: 3,
            title: 'alice.barkley@example.com'
        },
        
    ]
    const [info4, setInfo4] = useState(info)
    const education =[
        {
            id:1,
            nganh:'MASTER OF FINE ARTS & GRAPHIC DESIGN',
            nam: '2015-2020',
            truong:'Rochester Institute of Technology, Rochester, NY',
            mota: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.'
        },
        {
            id:2,
            nganh:'BACHELOR OF FINE ARTS & GRAPHIC DESIGN',
            nam: '2010 - 2014',
            truong:'Rochester Institute of Technology, Rochester, NY',
            mota: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
        },
        
    ]
    const EXP = [
        {
            id:1,
            nghe: "SENIOR GRAPHIC DESIGN SPECIALIST",
            nam : "2019 - Present",
            noilam : "Experion, New York, NY",
            kinhnghien:[
                'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
                 'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
                  'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
                   'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
            ],

        },
        {
            id: 2,
            nghe: "GRAPHIC DESIGN SPECIALIST",
            nam : "2017 - 2018",
            noilam : "Stepping Stone Advertising, New York, NY",
            kinhnghien:[
                'Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).',
                 'Managed up to 5 projects or tasks at a given time while under pressure',
                  'Recommended and consulted with clients on the most appropriate graphic design', 
                  'Created 4+ design presentations and proposals a month for clients and account managers'
            ],

        }
    ]
    const motaSumary=[
        {
            id:1,
            title: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
        }
    ]
    const [sumary, setSumary] = useState(motaSumary);
    const [edu, setEdu] = useState(education);
    const [exp, setEXP] = useState(EXP);

    // 111111111111111111
    const ADDElement1 = () => {
        let idMax = Math.max.apply(Math, sumary.map(function(o) { return o.id; }))
        // console.log(sumary)
        const newGT = {
            id: idMax+1,
            title: "Thêm thông tin giới thiệu",
        }
        setSumary([...sumary, newGT ])
      };

      const DELETEElement1 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if(indexRemove == 1){
            return;
        }
        var newGT = sumary.filter(function(element){
            return element.id != indexRemove;
        });
        setSumary(newGT);
        
      };

      // 2222222222222222222222
    const ADDElement2 = () => {
        let idMax = Math.max.apply(Math, info4.map(function(o) { return o.id; }))
        // console.log(sumary)
        const newGT = {
            id: idMax+1,
            title: "Thêm thông tin giới thiệu",
        }
        setInfo4([...info4, newGT ])
      };

      const DELETEElement2 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if(indexRemove == 1){
            return;
        }
        var newGT = info4.filter(function(element){
            return element.id != indexRemove;
        });
        setInfo4(newGT);
        
      };

      // 3333333333333333333333333333333333333
    const ADDElement3 = () => {
        let idMax = Math.max.apply(Math, edu.map(function(o) { return o.id; }))
        // console.log(sumary)
        const newGT = {
            id:1 + idMax,
            nganh:'Tên Ngành',
            nam: 'năm học',
            truong:'Tên Trường',
            mota: 'Mô tả gì đó'
        }
        setEdu([...edu, newGT ])
      };

      const DELETEElement3 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        if(indexRemove == 1){
            return;
        }
        var newGT = edu.filter(function(element){
            return element.id != indexRemove;
        });
        setEdu(newGT);
        
      };

      //   44444444444444444444444444444444444444444444 
    const ADDElement4 = () => {
        let idMax = Math.max.apply(Math, exp.map(function(o) { return o.id; }))
        // console.log(sumary)
        const newGT = {
            id:1 + idMax,
            nghe: "Tên nghề",
            nam : "năm",
            noilam : "nơi làm",
            kinhnghien:[
                'công việc cụ thể 1',
                 'ông việc cụ thể 2',
                  'ông việc cụ thể 3', 
                  'ông việc cụ thể 4'
            ],
        }
        setEXP([...exp, newGT ])
      };

    
      const DELETEElement4 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        // console.log(indexRemove);
        if(indexRemove == 1){
            return;
        }
        var newGT = exp.filter(function(element){
            return element.id != indexRemove;
        });
        setEXP(newGT);
        
      };
    return ( 
       <div className="bg-black/90 w-full">
        {/* 11111111111111111111  */}
            <div className="title">
                <h2 className="px-6 text-xl pb-4">Resume</h2>
                <p className="px-6 font-bold pb-4 text-4xl">CHECK MY RESUME</p>
            </div>

            {/* 222222222222222222222 */}
            <div className="flex justify-between px-6 pt-14 py-2 ">
                {/* 11111111111111111111 */}
                <div className="w-[]">
                  {/* 1 */}
                  <div className="" id="Sample3_sumary">
                    <h3 className="text-3xl">Sumary</h3>
                    <div className="px-6 py-4">
                    <H className={"py-2 text-xl text-green-500"} children={"ALICE BARKLEY"}/>
                        
                    
                    {sumary.map((item, index) => (
                        
                        <div key={index} data-key={item.id} className="relative congviec">
                            <P className="py-2 text-base" children={item.title}/>
                            <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-7'} onClickfuncADD={ADDElement1} onClickfuncDELETE={DELETEElement1} />
                        </div>
                        
                    ))}

                        <ul className="py-4 text-base ">
                    {info4.map((item, index) => (
                        
                        
                        <div key={index} data-key={item.id} className="relative congviec">
                            <li className="py-2"><i className="fa-solid fa-circle pr-2 text-xs"></i> <Span children={item.title}/></li>
                            <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-7'} onClickfuncADD={ADDElement2} onClickfuncDELETE={DELETEElement2} />
                        </div>
                    ))}
                        </ul>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="" id="Sample3_edu">
                    <h3 className="text-3xl">Education</h3>

                    {edu.map((item, index) => (
                        
                        <div key={index} data-key={item.id} className="px-6 py-4 relative congviec" >
                            <Edu item={item}/>
                            <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-7'} onClickfuncADD={ADDElement3} onClickfuncDELETE={DELETEElement3} />
                        </div>
                        
                    ))}
                    

                  </div>

                </div>
                {/* 22222222222222222 */}
                <div className="" id="Sample3_exp">
                <h3 className="text-3xl">Professional Experience</h3>
                {/* 1 */}
                    
                    {/* 2 */}
                    {exp.map((item, index) => (
                        
                        <div  key={index} data-key={item.id} className="px-6 py-4 relative congviec">
                        <Exp item={item}/>
                        <Plusbin keyIndex={item.id} classname={'dieukhien top-0 opacity-0 -left-7'} onClickfuncADD={ADDElement4} onClickfuncDELETE={DELETEElement4} />
                            
                    </div>
                        
                    ))}

                </div>
            </div>
       </div>
     );
}

