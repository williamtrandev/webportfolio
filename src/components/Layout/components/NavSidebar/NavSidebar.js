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
            title: "Trang chủ",
            link: "/",
        },
        {
            id: 2,
            icon: <IoNewspaper size={30} />,
            title: "Tạo mới",
            link: "/CreatePortfolio",
        },
        {
            id: 3,
            icon: <IoReader size={30} />,
            title: "Mẫu",
            link: "/SamplePortfolio",
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[40%] left-0 fixed z-30 opacity-0 hover:opacity-100 transition-all duration-300 ease-linear">
            <ul>
                {navigations.map(({ id, icon, link }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center cursor-pointer p-2 mb-2 h-1/4 hover:scale-105 hover:bg-blue-500 duration-300 bg-gray-500"
                    >
                        <span className="flex justify-between items-center w-full text-xl text-white">
                            <Link to={link}>{icon}</Link>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
