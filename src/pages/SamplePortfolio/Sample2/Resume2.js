// import "./sample2.css"
import Edu from "../../../components/Sample3/Edu";
import Exp from "../../../components/Sample3/Exp";
import Plusbin from "../../../components/Plusbin/Plusbin";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
function Resume2() {
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
    const [edu, setEdu] = useState(education);
    const [exp, setEXP] = useState(EXP);

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
        <section name="resume" className="pt-[100px]  my-12" spellCheck="false">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="flex justify-center pb-4 ">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Resume
                    </h4>
                </div>
                <p
                    className="text-center text-lg pb-12"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    {" "}
                    Các chặng đường của mình^^
                </p>

                <div>
                    {/* 2 */}
                    <div className="" id="Sample2_edu">
                        <h3 className="text-6xl text-pink-300">Education</h3>

                        {edu.map((item, index) => (
                            <div
                                key={index}
                                data-key={item.id}
                                className="px-6 py-4 relative congviec"
                            >
                                <Edu classname={"!text-cyan-500"} item={item} />
                                <Plusbin
                                    keyIndex={item.id}
                                    classname={
                                        "dieukhien top-0 opacity-0 -left-7"
                                    }
                                    onClickfuncADD={ADDElement3}
                                    onClickfuncDELETE={DELETEElement3}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* 22222222222222222 */}
                <div className="" id="Sample2_exp">
                    <h3 className="text-6xl text-pink-300">
                        Professional Experience
                    </h3>
                    {/* 1 */}

                    {/* 2 */}
                    {exp.map((item, index) => (
                        <div
                            key={index}
                            data-key={item.id}
                            className="px-6 py-4 relative congviec"
                        >
                            <Exp item={item} />
                            <Plusbin
                                keyIndex={item.id}
                                classname={"dieukhien top-0 opacity-0 -left-7"}
                                onClickfuncADD={ADDElement4}
                                onClickfuncDELETE={DELETEElement4}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume2;