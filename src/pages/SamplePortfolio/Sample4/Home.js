import avatar from "../../../assets/avatar-sample4.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Home() {
    function previewFile(e) {
        // const preview = document.querySelector("img");
        // const file = document.querySelector("input[type=file]").files[0];
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                // convert image file to base64 string
                setAva(reader.result);
                localStorage.setItem("avaHomeSP4", reader.result);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const [ava, setAva] = useState(
        "https://top10camau.vn/wp-content/uploads/2022/10/avatar-meo-cute-1.jpg"
    );
    // Xoa anh trong bo nho moi lan doi anh
    useEffect(() => {
        return () => {
            ava && URL.revokeObjectURL(ava);
        };
    }, [ava]);
    // const handleAva = (e) => {
    //     const file = e.target.files[0];
    //     file.preview = URL.createObjectURL(file);
    //     setAva(file.preview);
    //     localStorage.setItem("avaHomeSP4", file.preview);
    // };
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
                        <Link to="contact" smooth duration={"1000ms"}>
                            <button className="btn">
                                <p
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    Hire us
                                </p>
                            </button>
                        </Link>
                    </div>
                    <div className="home-img padd-15 relative">
                        <div className="wrapper relative w-[250px] z-10">
                            <input
                                className="absolute opacity-0 top-0 left-0 w-full h-full z-10"
                                type={"file"}
                                onChange={previewFile}
                            />
                            <img
                                className="object-cover"
                                src={ava}
                                alt="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
