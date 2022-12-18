import { useState } from "react";

function TESTIMONIALS({id,chamNgon, name, congviec}) {
      const [img, setimg] = useState('https://i.pinimg.com/236x/76/c9/32/76c932f0fcdd308acf94f569480beedf.jpg')
      const onImageChange = (event) => {
            const URLIMAGE = URL.createObjectURL(event.target.files[0]);
            setimg(URLIMAGE);
          };
        
    return (
      <div className="m-6 ">
      <div className="p-5 pb-10 bg-white/10 rounded-md">
          
      <p className="text-base" contentEditable
suppressContentEditableWarning={true}>{chamNgon} </p>
      
      </div>
      <div className="relative w-24">
      <label htmlFor={id+"ok"} className="absolute btn opacity-0  h-[100%] w-[100%]"></label>
                    <input id={id+"ok"}  type="file" onChange={onImageChange}
                    className="  invisible absolute filetype z-0 w-1	 "/>
                  <img className="rounded-full w-20 border-1" src={img} alt=""/>
      </div>
      <h3 className="text-lg" contentEditable
suppressContentEditableWarning={true}>{name}</h3>
      <h4 className="text-base text-slate-200" contentEditable
suppressContentEditableWarning={true}>{congviec}</h4>
  </div>
      );
}

export default TESTIMONIALS;