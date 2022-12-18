

function Skills({item}) {
    return ( 
        <div className="flex flex-col  items-start mb-8 p-2 rounded bg-white/10 ">
            <h4  contentEditable
                    suppressContentEditableWarning={true}   className="py-2 mb-2">{item.ngonngu} <span>( {item.phantram} %)</span></h4>
            <progress id="file" value={item.phantram} max="100" className="w-full h-3"> {item.phantram}% </progress>
            <p className="text-lg my-2" contentEditable
                    suppressContentEditableWarning={true}>{item.mota}</p>
        </div>  
     );
}

export default Skills;