function Service({item}) {
    return ( 
        <div key={item.id} className="p-2 h-full bg-white/10 text-center flex flex-col hover:bg-green-500/40 w-[200px]" >
                            <div className="py-4 px-4 rounded my-0 mx-auto bg-green-500  flex w-[50px] justify-items-center">
                                <item.icon className="text-4xl text-center"/>
                            </div>
                            <h4 className="text-xl py-4" contentEditable suppressContentEditableWarning={true} >{item.title}</h4>
                            <p className="text-base" contentEditable  suppressContentEditableWarning={true} >{item.describe}</p>
                        </div>
     );
}

export default Service;