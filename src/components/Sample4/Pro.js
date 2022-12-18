import { useState, useEffect } from "react";

function Pro({ MenuItem, className = "" , colorChange}) {
    const [ava, setAva] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMlLUP8BsN9CK3yP_mbKAJCMVX52SLCbmoNeu9_ai1Bu8UoPO7ffpTDZZ8mFiF-SleIM&usqp=CAU"
    );

    // Xoa anh trong bo nho moi lan doi anh
    useEffect(() => {
        return () => {
            ava && URL.revokeObjectURL(ava);
        };
    }, [ava]);
    const handleAva = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAva(file.preview);
    };
    return (
        <div className={`portfolio-item-inner ${className}`}>
            <div className="relative portfolio-img">
                <input
                    className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%]"
                    type={"file"}
                    onChange={handleAva}
                />
                <img src={ava} alt="project-img" />
            </div>
            <h2
                className={`text-base ${colorChange}   font-bold text-center px-1`}
            >
                {MenuItem.name}
            </h2>
            <h2 className={`text-base ${colorChange}   text-center px-1`}>
                {MenuItem.Category}
            </h2>
            <h2 className={`text-base ${colorChange}   text-center px-1`}>
                {MenuItem.Client}
            </h2>
            <h2 className={`text-base ${colorChange}   text-center px-1`}>
                {MenuItem.date}
            </h2>
            <h2 className={`text-base ${colorChange}   text-center px-1`}>
                {MenuItem.url}
            </h2>
            <h2 className={`text-base ${colorChange}   text-center px-1`}>
                {MenuItem.congdung}
            </h2>
        </div>
    );
}

export default Pro;
