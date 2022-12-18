import H from "./H";
import P from "./P";
import Span from "./Span";
import Plusbin from "../Plusbin/Plusbin";

import { useState } from "react";

function Exp({item}) {

  
    const [kn, setkn] = useState(item.kinhnghien);

    const ADDElement5 = () => {
        
        const newGT = "thêm thông tin";
        setkn([...kn, newGT ]);
      };

      const DELETEElement5 = (e) => {
        let indexRemove= e.target.parentElement.parentElement.getAttribute("data-key");
        console.log(indexRemove);
        // if(indexRemove == 0){
        //     return;
        // }
        const newarr = []
        for(let i = 0; i < kn.length; i++){
            if(i != indexRemove){
                newarr.push(kn[i]);
            }   
        }
        setkn(newarr);
        
        // var newGT = Testtimo.filter(function(element){
        //     return element.id != indexRemove;
        // });
        // setTesttimo(newGT);
        
      };

    return ( 
        <div>
            <H className={"py-2  text-xl text-green-500 "} children={item.nghe}/>
                            <H className={"py-2 ml-4 p-4 bg-white/10 w-60 text-center "} children={item.nam}/>
                            <P className={"py-2 text-base"} children = {item.noilam}/>
                                <ul className="py-2 p-4 text-base ">
                                {kn.map((item, index) => (
                        
                                        <li key={index} data-key={index} className="px-6 py-4 relative congviec">
                                            <i className="fa-solid fa-circle pr-2 text-xs"></i> <Span children={item}/>
                                            <Plusbin keyIndex={index} classname={'dieukhien top-0 opacity-0 -left-7'}  onClickfuncADD={ADDElement5} onClickfuncDELETE={DELETEElement5}/>
                                        </li>

                                        
                                        
                                    ))}
                                
                                </ul>
        </div>
     );
}

export default Exp;