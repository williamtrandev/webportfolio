import { FaHome, FaUser, FaListUl, FaHdd, FaComment } from "react-icons/fa";
import "./style.css";
import { Link } from "react-scroll";
import { useState } from "react";
export default function Sidebar() {
    const components = [
        {
            id: 1,
            icon: FaHome,
            title: "home",
        },
        {
            id: 2,
            icon: FaUser,
            title: "about",
        },
        {
            id: 3,
            icon: FaListUl,
            title: "services",
        },
        {
            id: 4,
            icon: FaHdd,
            title: "portfolio",
        },
        {
            id: 5,
            icon: FaComment,
            title: "contact",
        },
    ];
    const [isOpen, setOpen] = useState(false);
    const openToggler = isOpen ? "open" : "";
    return (
        <div className={`aside ${openToggler}`}>
            <div
                className="logo"
                contentEditable="true"
                suppressContentEditableWarning="false"
            >
                <a className="font-dance">T-Simple</a>
            </div>
            <div
                className={`nav-toggler ${openToggler}`}
                onClick={() => {
                    setOpen(!isOpen);
                }}
            >
                <span></span>
            </div>
            <ul className="nav">
                {components.map((item) => (
                    <li href={`#${item.title}`} key={item.id}>
                        <Link to={item.title} smooth spy>
                            <div className="flex justify-start items-center cursor-pointer nav-item">
                                <item.icon className="i"></item.icon>
                                <span className="ml-3">{item.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
