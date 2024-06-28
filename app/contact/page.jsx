"use client"
import { IoIosMail } from 'react-icons/io';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Icon = ({ children }) => {
    return (
        <div className="text-orange-custom m-2 transition-transform duration-200 hover:scale-110">
            {children}
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="p-2 rounded-xl mx-auto max-w-screen-xl">
            <div className="relative flex flex-col items-center p-2 mx-auto bg-light-blueish-gray shadow-2xl rounded-xl">
                <h1 className="text-3xl m-2 font-bold text-orange-custom">Connect with Me!</h1>
                <div className="flex gap-4 mt-4 mb-8">
                    <a href="mailto:amitkiit1994@gmail.com" target='_blank'>
                        <Icon>
                            <IoIosMail />
                        </Icon>
                    </a>
                    <a href='https://twitter.com/AmitKdas94' target='_blank'>
                        <Icon>
                            <FaTwitter />
                        </Icon>
                    </a>
                    <a href="https://www.facebook.com/david.byron.509" target='_blank'>
                        <Icon>
                            <FaFacebook />
                        </Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/amitkiit1994/" target='_blank'>
                        <Icon>
                            <FaLinkedin />
                        </Icon>
                    </a>
                    <a href="https://github.com/amitkiit1994/" target='_blank'>
                        <Icon>
                            <FaGithub />
                        </Icon>
                    </a>
                    <a href="https://www.instagram.com/amyth2.0/" target='_blank'>
                        <Icon>
                            <FaInstagram />
                        </Icon>
                    </a>
                </div>
                <p className="text-gray-600">&#169; 2024 Copyright Amit Kumar Das - All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Contact;