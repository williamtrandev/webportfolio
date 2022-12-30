import {
    IoHomeOutline,
    IoPersonOutline,
    IoReader,
    IoNewspaper,
} from "react-icons/io5";
import { Link } from "react-router-dom";
export default function NavSidebar() {
    const navigations = [
        {
            id: 1,
            icon: <IoHomeOutline size={30} />,
            title: "Home",
            link: "/",
        },
        {
            id: 2,
            icon: <IoNewspaper size={30} />,
            title: "Create",
            link: "/Background",
        },
        {
            id: 3,
            icon: <IoReader size={30} />,
            title: "Sample",
            link: "/SamplePortfolio",
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[50%] -translate-y-1/2 left-0 fixed !z-[100] opacity-0 hover:opacity-100  transition-all duration-300 ease-linear animate-[fadeIn_3s_ease-in-out_alternate_infinite] hover:animate-none">
            <ul>
                {navigations.map(({ id, icon, title, link }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center cursor-pointer p-2 mb-2 h-1/4 hover:scale-105 hover:bg-blue-500 hover:rounded-md duration-300 ml-[-85px] hover:ml-0 bg-gray-500 w-[140px]"
                    >
                        <div className="flex justify-center items-center w-full text-xl text-white">
                            <Link to={link}>
                                <div className="flex justify-between items-center w-[110px]">
                                    <p>{title}</p> {icon}
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
