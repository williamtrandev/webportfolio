import "./style.css";
import { FaMobileAlt, FaGlobeAsia } from "react-icons/fa";
import { IoLocationSharp, IoMailUnreadOutline } from "react-icons/io5";
export default function Contact() {
    return (
        <section id="contact" className="contact section" spellCheck="false">
            <div className="container-content">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2
                        >
                            Contact Us
                        </h2>
                    </div>
                </div>
                <h3
                    className="contact-title padd-15"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    Have You Any Question ?
                </h3>
                <h4
                    className="contact-sub-title padd-15"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    We're at your service
                </h4>
                <div className="row">
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <FaMobileAlt className="fa"></FaMobileAlt>
                        </div>
                        <h4
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Call us
                        </h4>
                        <p
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            0923189183
                        </p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <IoLocationSharp className="fa"></IoLocationSharp>
                        </div>
                        <h4
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Office
                        </h4>
                        <p
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Ton Duc Thang University
                        </p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <IoMailUnreadOutline className="fa"></IoMailUnreadOutline>
                        </div>
                        <h4
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Mail
                        </h4>
                        <p
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            tsimple@gmail.com
                        </p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <FaGlobeAsia className="fa"></FaGlobeAsia>
                        </div>
                        <h4
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            Website
                        </h4>
                        <p
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            www.tsimple.com
                        </p>
                    </div>
                </div>
                <h3
                    className="contact-title padd-15"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    Send us an email
                </h3>
                <h4
                    className="contact-sub-title padd-15"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    We're very happy to reply you
                </h4>
                <div className="row">
                    <div className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Name"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input
                                        type={"email"}
                                        className="form-control"
                                        placeholder="Email"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Subject"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea
                                        name=""
                                        id=""
                                        className="form-control"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <button
                                        type={"submit"}
                                        className="btn"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
