import { FaEnvelope } from "react-icons/fa";
import {
    BsPhone,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
export default function Contact2() {
    return (
        <section
            name="contact"
            className=" my-12 pt-[100px] "
            spellCheck="false"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="flex justify-center pb-8">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Liên hệ
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-[100px] items-center">
                    <div className="w-auto h-full flex flex-col justify-between rounded-[20px] bg-cyan-400 p-5">
                        <div className="w-full flex justify-center">
                            <h2 className="text-center text-white mb-8 pb-2 border-b-2 border-pink-300">
                                Gửi Mail
                            </h2>
                        </div>
                        <form className="flex flex-col w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nhập tên của bạn"
                                className="mb-4 p-4 bg-gray-900 text-[20px] border rounded-md text-gray-700 focus: outline-pink-300"
                            ></input>
                            <input
                                type="text"
                                name="email"
                                placeholder="Nhập email của bạn"
                                className="mb-4 p-4 border text-[20px] rounded-md bg-gray-900 text-gray-700 focus: outline-pink-300"
                            ></input>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Nhập nội dung"
                                className="mb-4 p-4 border rounded-md text-[20px] bg-gray-900 text-gray-700 focus: outline-pink-300"
                            ></textarea>
                        </form>
                        <div className="flex justify-center">
                            <button className="p-4 w-fit flex text-[20px] justify-center border rounded-full bg-pink-300 text-black hover:bg-pink-200 hover:shadow-pink-200 hover:shadow-lg">
                                Gửi lời nhắn
                            </button>
                        </div>
                    </div>
                    <div className="w-auto h-full flex flex-col justify-between rounded-[20px] bg-cyan-400 p-5">
                        <div className="flex w-full justify-center">
                            <h2 className="text-center mb-5 pb-2 border-b-2 border-pink-300">
                                Thông tin liên hệ
                            </h2>
                        </div>
                        <p className="text-slate-600 text-xl inline text-center">
                            Dưới đây là thông tin liên hệ của chúng tôi
                        </p>
                        <div className="flex content-start items-center w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center justify-between">
                                    <FaEnvelope className="text-pink-400"></FaEnvelope>
                                    <p className="text-white ml-5 text-[20px]">
                                        Email:
                                    </p>
                                </div>
                                <p
                                    className="ml-5 text-[20px]"
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    tsimple@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex content-start items-center w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <BsPhone className="text-pink-400"></BsPhone>
                                    <p className="text-white ml-5 text-[20px]">
                                        Điện thoại:
                                    </p>
                                </div>
                                <p
                                    className="ml-5 text-[20px]"
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    0908989123
                                </p>
                            </div>
                        </div>

                        <div className="flex content-start items-center w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <GoLocation className="text-pink-400"></GoLocation>
                                    <p className="text-white ml-5 text-[20px]">
                                        Địa chỉ:
                                    </p>
                                </div>
                                <p
                                    className="ml-5 text-[20px]"
                                    contentEditable
                                    suppressContentEditableWarning={true}
                                >
                                    Quận 7 TP.HCM
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 inline text-[20px] w-full text-center">
                            Các mạng xã hội
                        </p>
                        <div className="w-full flex justify-center">
                            <div className="w-[80%] flex justify-between">
                                <a href="#">
                                    <BsFacebook className="text-pink-400"></BsFacebook>
                                </a>
                                <a href="#">
                                    <BsGithub className="text-pink-400"></BsGithub>
                                </a>
                                <a href="#">
                                    <BsInstagram className="text-pink-400"></BsInstagram>
                                </a>
                                <a href="#">
                                    <BsLinkedin className="text-pink-400"></BsLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
