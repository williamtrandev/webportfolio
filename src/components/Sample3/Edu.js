import H from "./H";
import P from "./P";
function Edu({item, classname=""}) {
    return ( 
        <div>
            <H className={`py-2 text-xl text-green-500 `} children={item.nganh}/>    
            <H className={"py-2 ml-4 p-4 bg-white/10 w-48"} children={item.nam}/> 
            <P className={"py-2 p-4 text-lg" } children={item.truong}/>
            <P className={"text-lg py-2 p-4" } children={item.mota}/>
        </div>
     );
}

export default Edu;