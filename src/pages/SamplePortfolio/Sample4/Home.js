
import { useState, useEffect } from "react";
export default function Home() {
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
        <section id="home" className="home section" spellCheck="false">
            <div className="container-content">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3
                            className="hello"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Hello, We're{" "}
                            <span
                                className="name font-dance"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                T-Simple
                            </span>
                        </h3>
                        <h3
                            className="my-profession py-5"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            We're a web{" "}
                            <span
                                className="typing"
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                develop team
                            </span>
                        </h3>
                        <p
                            className="para"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            We have 4-week experience. Our experience is to
                            design and code software
                        </p>
                        <button className="btn">
                            <p
                                contentEditable
                                suppressContentEditableWarning={true}
                            >
                                Hire us
                            </p>
                        </button>
                    </div>
                    <div className="home-img padd-15 relative">
                        <input
                            className="absolute opacity-0 top-0 left-0 w-full h-full"
                            type={"file"}
                            onChange={handleAva}
                        />
                        <img
                            className="w-[300px]"
                            src={ava}
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
