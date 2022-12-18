import { useState } from "react";

function Project({item}) {
    const onImageChange = (event) => {
        console.log(1);
        const URLIMAGE = URL.createObjectURL(event.target.files[0]);
        console.log(URLIMAGE);
        setimg1(URLIMAGE);
      };

      const [img1, setimg1] = useState("https://www.chili.vn/blogs/wp-content/uploads/2021/10/image5-4.jpg");
      
    return ( 
        <div className="bg-white/20 p-4 rounded">
            <div>
            <div  className=" relative md:w-full w-full h-[380px]">
                    <label htmlFor={item.id + "1ok"} className="absolute btn h-[380px] opacity-0  w-[100%]"></label>
                    <input id={item.id + "1ok"}  type="file" onChange={onImageChange}
                    className="  invisible absolute filetype z-0 w-1	 "/>
                    <img className="object-cover w-full h-[380px] hover:opacity-50 cursor-pointer" src={img1} alt=""/>
            </div>
            </div>
        
        <h3 className="text-center my-2 text-green-500" contentEditable suppressContentEditableWarning={true}>{item.name}</h3>
        <ul className="flex flex-col text-sm  justify-center  items-center">
            <li >Category:<span contentEditable suppressContentEditableWarning={true}> {item.Category} </span></li>
            <li >Client:<span contentEditable suppressContentEditableWarning={true}> {item.Client} </span></li>
            <li >Project date:<span contentEditable suppressContentEditableWarning={true}> {item.date} </span></li>
            <li >Project URL:<span contentEditable suppressContentEditableWarning={true}> <a href="/#">{item.url}</a> </span></li>
        </ul>
        <span className="text-sm items-center" contentEditable suppressContentEditableWarning={true}>{item.congdung   }</span>
</div>
     );
}

export default Project;