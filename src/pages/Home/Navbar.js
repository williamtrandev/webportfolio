import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const navigations = [
        {
            id: 1,
            title: "See Sample",
            link: "/SamplePortfolio",
        },
        {
            id: 2,
            title: "Build Website",
            link: "/Background",
        },
    ];
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="w-full fixed z-10">
            <div className="md:flex md:mx-10 items-center justify-between md:my-10 h-16">
                <div className="md:pl-0 pl-9 inline-block align-middle text-white">
                    <h1 className="font-dance">T-Simple</h1>
                </div>
                <div
                    className="absolute right-8 top-[54px] text-white cursor-pointer md:hidden"
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? <MdClose /> : <FiMenu />}
                </div>
                <div
                    className={`md:flex md:items-center md:justify-between md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        isOpen ? "top-20 opacity-100" : "top-[-180px]"
                    }`}
                >
                    {navigations.map((items) => (
                        <div
                            key={items.id}
                            className="hover:text-pink-500 duration-500 text-white md:ml-10 my-7 text-2xl font-medium"
                        >
                            <p className="font-dance">
                                <Link to={items.link}>{items.title}</Link>
                            </p>
                        </div>
                    ))}
                    <div className="hover:text-pink-500 duration-500 text-white md:ml-10 my-7 text-2xl font-medium cursor-pointer">
                        <p className="font-dance" onClick={handleOpen}>
                            Contact Us
                        </p>
                        <Modal
                            open={openModal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className="w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white outline-none rounded-[10px] py-4 px-5">
                                <div className="flex justify-center items-center w-full">
                                    <p className="text-[30px] p-2">
                                        Contact Us
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border-2 outline-none text-[15px] p-3 mb-[22px] transition duration-300 hover:bg-slate-200 focus:border-2 focus:border-blue-400"
                                ></input>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border-2 outline-none text-[15px] p-3 mb-[22px] transition duration-300 hover:bg-slate-200 focus:border-2 focus:border-blue-400"
                                ></input>
                                <input
                                    type="text"
                                    placeholder="Your Phone"
                                    className="w-full border-2 outline-none text-[15px] p-3 mb-[22px] transition duration-300 hover:bg-slate-200 focus:border-2 focus:border-blue-400"
                                ></input>
                                <textarea
                                    placeholder="Message"
                                    className="w-full min-h-[100px] border-2 outline-none text-[15px] p-3 mb-[22px] transition duration-300 hover:bg-slate-200 focus:border-2 focus:border-blue-400"
                                ></textarea>
                                <button class="w-full p-3 bg-pink-400 text-[15px] cursor-pointer transition duration-300 hover:bg-pink-500">Send</button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
