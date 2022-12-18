import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Header() {
    const [navColor, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    const color = navColor ? "bg-black" : "bg-none";
    const [isOpen, setIsOpen] = useState(false);
    // const currentUser = false;
    const navigations = [
        {
            id: 1,
            title: "See Sample",
            link: "/SamplePortfolio",
        },
        {
            id: 2,
            title: "Build website",
            link: "/CreatePortfolio",
        },
        {
            id: 3,
            title: "Contact Us",
        },
    ];
    return (
        <div className={`w-full fixed z-10 ${color}`}>
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-16">
                        <div className="inline-block align-middle text-white">
                            <h1 className="font-dance">
                                T-Simple
                            </h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center justify-between space-x-4">
                                    {navigations.map((items) => (
                                        <div
                                            key={items.id}
                                            className="hover:text-pink-500 text-white px-3 py-2 rounded-md text-2xl font-medium"
                                        >
                                            <p className="font-dance">
                                                <Link to={items.link}>
                                                    {items.title}
                                                </Link>
                                            </p>
                                        </div>
                                    ))}
                                    {/* <div className="ml-10 flex items-center justify-between space-x-4">
                                    <a
                                        href="#"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        <p className="font-dance">Trang chủ</p>
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Mẫu Portfolio
                                    </a>

                                     <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {currentUser ? (
                                            <img
                                                className="rounded-full w-10"
                                                src="https://taimienphi.vn/tmp/cf/aut/ZFmt-I4Z1-cKnU-y1yu-Wg13-M5VG-I9Bw-22ha-5yD8-RfPY-k7jf-8J4u-edAU-X3SQ-ADuI-LoQ6-rxjA-1YEy-cZra-QTBy-kFR7-uqxu-Zku3-kMQr-fiW7-J1Li-byJw-FH8W-AQXZ-yKsx-tnMj-hhg7-hinh-anh-dai-dien-dep-dung-cho-facebook-instagram-zalo-1.jpg"
                                                alt="avt"
                                            />
                                        ) : (
                                            <span> Đăng nhập</span>
                                        )}
                                    </a> 

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Liên hệ
                                    </a> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-slate-500  focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                {navigations.map((items) => (
                                    <div
                                        key={items.id}
                                        className="hover:text-cyan-300 hover:bg-rose-300 text-white px-3 py-2 rounded-md text-2xl font-medium"
                                    >
                                        <p className="font-dance text-center">
                                            <Link to={items.link}>
                                                {items.title}
                                            </Link>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Header;
