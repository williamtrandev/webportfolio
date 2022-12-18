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
    const openToggler = isOpen?"open":""
    return (
        // <div className="h-full w-[270px] bg-[#fdf9ff] fixed left-0 top-0 p-8 z-10 flex justify-center items-center border-r-2 border-gray-500">
        //     <h1 className="font-dance absolute top-10 text-3xl">T-Simple</h1>
        //     <ul className="flex flex-col justify-center">
        //         {components.map((item) => (
        //             <li
        //                 key={item.id}
        //                 className="mb-5 py-1 px-4 font-lobs border-b-2 border-gray-500 hover:cursor-pointer hover:text-orange-600"
        //             >
        //                 <div className="flex justify-start items-center">
        //                     <item.icon></item.icon>
        //                     <span className="ml-3">{item.title}</span>
        //                 </div>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className={`aside ${openToggler}`}>
            <div className="logo">
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
