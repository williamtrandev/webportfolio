import React from "react";
import { FaMapMarkerAlt, FaShareAlt, FaMailBulk, FaPhoneVolume, FaTwitter, FaFacebookSquare, FaInstagramSquare, FaSkype, FaLinkedin } from "react-icons/fa";

import "./Sample3.css";

export default function Contact3() {
    return (
        <div className="bg-black/90 w-full">
            {/* 111111111111111111111  */}
            <div className="title">
                <h2 className="px-6 text-xl pb-4">CONTACT</h2>
                <p className="px-6 font-bold pb-4 text-4xl">CONTACT ME</p>
            </div>
            {/* 22222222222222222 */}
            <div className="px-6 flex flex-col">

            <div className="py-6 flex  my-4  p-8 bg-white/10 px-4">
                        <div className="pt-6 text-green-500 px-2 mr-6 rounded-full bg-white/20 "><FaMapMarkerAlt/></div>
                        <div className="">
                            <h3 className="py-3 text-xl " contentEditable suppressContentEditableWarning={true}> My Address</h3>
                            <p className="text-sm" contentEditable suppressContentEditableWarning={true}>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>  

<div className="py-6 flex  my-4 p-8 bg-white/10 px-4">
                        <div className="pt-6 text-green-500 px-2 mr-6 rounded-full bg-white/20"><FaShareAlt/></div>
                        <div  className="">
                            <h3 className="py-3 text-xl "> Social Profiles</h3>
                            <div className=" flex">
                            <a href="#" className="px-2" ><FaTwitter className="hover:text-green-500"/></a>
                            <a href="#" className="px-2" ><FaFacebookSquare className="hover:text-green-500"/></a>
                            <a href="#" className="px-2" ><FaInstagramSquare className="hover:text-green-500"/></a>
                            <a href="#" className="px-2" ><FaSkype className="hover:text-green-500"/></a>
                            <a href="#" className="px-2" ><FaLinkedin className="hover:text-green-500"/></a>
                        </div>
                        </div>
                    </div>

<div className="py-6 flex  my-4  p-8 bg-white/10 px-4">
                        <div className="pt-6 text-green-500 px-2 mr-6 rounded-full bg-white/20"><FaMailBulk/></div>
                        <div className="">
                            <h3 className="py-3 text-xl "> Email Me</h3>
                            <p className="text-sm" contentEditable suppressContentEditableWarning={true}>contact@example.com</p>

                        </div>
                    </div>  

<div className="py-6 flex  my-4  p-8 bg-white/10 px-4">
                        <div className="pt-6 text-green-500 px-2 mr-6 rounded-full bg-white/20"><FaPhoneVolume/></div>
                        <div className="">
                            <h3 className="py-3 text-xl "> Call Me</h3>
                            <p className="text-sm" contentEditable suppressContentEditableWarning={true}>+1 5589 55488 55</p>
                        </div>
                    </div>

            </div>

            {/* 33333333333  */}

            <form className="flex flex-col px-6 bg-white/10 mx-6 p-4 my-4">
  

                <input className="bg-white/20 my-2 h-8 p-4 text-base" placeholder="Your name" type="text" name="name" />
                <input className="bg-white/20 my-2 h-8 p-4 text-base" placeholder="Your email" type="text" name="mail" />
                <input className="bg-white/20 my-2 h-8 p-4 text-base" placeholder="Subject" type="text" name="subject" />
                <textarea className="bg-white/20 my-2 h-30 p-4 text-base" placeholder="Message" rows="4" cols="100" name="message"></textarea>
                <input type="submit" value="Send message" className ="my-6 p-2 text-lg bg-green-500 text-center w-48 rounded"/>
                
            </form>
            
        </div>
    );
}
