// Thanh navbar
import React from "react";
import Button from "../Button";
export default function Navbar() {
    const navigation = [
        { name: "Trang chủ", href: "#", current: false },
        { name: "Tạo Portfolio", href: "#", current: false },
        { name: "Mẫu Portfolio", href: "#", current: false },
    ];
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10">
            <div className="md:flex justify-between bg-white py-4 md:px-10 px-7">
                <div className="curost-pointer flex items-center">
                    <span className="text-indigo-600">T-Simple</span>
                </div>
                <ul className="md:flex md:items-center">
                    {navigation.map((items) => (
                        <li key={items.name} className="md:ml-8">
                            <a
                                href={items.href}
                                className="text-gray-800 text-xl hover:text-gray-400 duration-500"
                            >
                                {items.name}
                            </a>
                        </li>
                    ))}
                    <Button className="bg-green-600 ml-3 hover:text-yellow-400 duration-500">
                        Đăng kí
                    </Button>
                    <Button className="bg-purple-600 mx-3 hover:text-pink-400 duration-500">
                        Đăng nhập
                    </Button>
                </ul>
            </div>
        </div>
    );
}
