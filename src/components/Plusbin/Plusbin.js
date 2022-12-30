import { BsFillArchiveFill } from "react-icons/bs";
import {FaPlus} from "react-icons/fa";

function Plusbin({hiddenPlus = "", classname = "",onClickfuncDELETE, onClickfuncADD, keyIndex, bgColorChange}) {
    return ( 
        <div data-key={keyIndex} className={`${classname} absolute  w-5.5 rounded-lg text-white/70 text-sm p-1 bg-pink-500/90 ${bgColorChange}` }>
                        <FaPlus className={`cursor-pointer mb-2 ${hiddenPlus}`} onClick={onClickfuncADD}/>

                        <BsFillArchiveFill className="cursor-pointer mt-2" onClick={onClickfuncDELETE}/>
        </div>
     );
}

export default Plusbin;