function Service({item}) {
    return ( 
        <div key={item.id} className="m-2 p-8 bg-white/10 text-center hover:bg-green-500/40">
                            <div className="py-4 px-4 rounded mb-4 ml-24 bg-green-500 w-20 flex w-full justify-items-center">
                                <item.icon className="text-4xl text-center"/>
                            </div>
                            <h4 className="text-xl py-4" contentEditable suppressContentEditableWarning={true} >{item.title}</h4>
                            <p className="text-base" contentEditable  suppressContentEditableWarning={true} >{item.describe}</p>
                        </div>
     );
}

export default Service;