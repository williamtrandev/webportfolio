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
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="flex justify-center pb-8">
                    <h4 className="uppercase inline font-bold pb-2 border-b-2 border-pink-300 text-cyan-500">
                        Liên hệ
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div className="w-auto h-full flex flex-col justify-between">
                        <h2 className="text-center text-white mb-8">
                            Gửi Mail
                        </h2>
                        <form className="flex flex-col w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nhập tên của bạn"
                                className="mb-4 p-4 bg-gray-900 border rounded-md text-gray-700 focus: outline-pink-300"
                            ></input>
                            <input
                                type="text"
                                name="email"
                                placeholder="Nhập email của bạn"
                                className="mb-4 p-4 border rounded-md bg-gray-900 text-gray-700 focus: outline-pink-300"
                            ></input>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Nhập nội dung"
                                className="mb-4 p-4 border rounded-md bg-gray-900 text-gray-700 focus: outline-pink-300"
                            ></textarea>
                        </form>
                        <div className="flex justify-center">
                            <button className="p-4 w-fit flex justify-center border rounded-full bg-pink-300 text-black hover:bg-pink-200 hover:shadow-pink-200 hover:shadow-lg">
                                Gửi lời nhắn
                            </button>
                        </div>
                    </div>
                    <div className="w-auto h-full flex flex-col justify-between">
                        <h2 className="text-center text-white mb-8">
                            Thông tin liên hệ
                        </h2>
                        <p className="text-white text-xl inline">
                            Dưới đây là thông tin liên hệ của chúng tôi
                        </p>
                        <div className="flex content-start items-center">
                            <FaEnvelope className="text-cyan-500"></FaEnvelope>
                            <div className="flex flex-col pl-4">
                                <h3 className="text-white">Email</h3>
                                <h4 contentEditable
                    suppressContentEditableWarning={true}>tsimple@gmail.com</h4>
                            </div>
                        </div>

                        <div className="flex content-start items-center">
                            <BsPhone className="text-cyan-500"></BsPhone>
                            <div className="flex flex-col pl-4">
                                <h3 className="text-white">Điện thoại</h3>
                                <h4 contentEditable
                    suppressContentEditableWarning={true}>0908989123</h4>
                            </div>
                        </div>

                        <div className="flex content-start items-center">
                            <GoLocation className="text-cyan-500"></GoLocation>
                            <div className="flex flex-col pl-4">
                                <h3 className="text-white">Địa chỉ</h3>
                                <h4 contentEditable
                    suppressContentEditableWarning={true}>Quận 7 TP.HCM</h4>
                            </div>
                        </div>
                        <p className="text-white inline">Các mạng xã hội</p>
                        <div className="w-1/2 flex justify-between">
                            <a href="#">
                                <BsFacebook className="text-cyan-500"></BsFacebook>
                            </a>
                            <a href="#">
                                <BsGithub className="text-cyan-500"></BsGithub>
                            </a>
                            <a href="#">
                                <BsInstagram className="text-cyan-500"></BsInstagram>
                            </a>
                            <a href="#">
                                <BsLinkedin className="text-cyan-500"></BsLinkedin>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
