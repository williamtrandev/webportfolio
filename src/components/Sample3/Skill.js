import { useState } from "react";

function Skill({title, phantram}) {
    const [phantram1,setphantram] = useState(phantram);
    
    return ( 
        <div>
                            <span className="flex justify-between py-2 text-base font font-normal">
                                <span contentEditable
                    suppressContentEditableWarning={true}>{title}</span>
                                <i contentEditable
                    suppressContentEditableWarning={true} onInput={e => {
                        let phanTam = e.currentTarget.textContent.split('%')[0] - 1
                        console.log(phanTam)
                        console.log(typeof(phanTam))
                        setphantram(phanTam)
                        
                    }} >{phantram1}%</i>
                            </span>
                            <progress id="file" value={phantram1} max="100" className="w-full h-3"> {phantram1}% </progress>
        </div>
     );
}

export default Skill;