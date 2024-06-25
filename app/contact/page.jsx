'use client'
import { IoIosMail } from 'react-icons/io';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Icon = ({ children }) => {
    return (
        <div className="text-yellow-400 m-2 transition-transform duration-200 hover:scale-110">
            {children}
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact">
            <div className="font-Poppins flex flex-col items-center gap-4 mx-4 lg:mx-40 mt-6 mb-8">
                <h1 className="text-3xl m-2 font-bold text-yellow-400">Connect with Me!</h1>
                <div className="flex gap-4 ">
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
                <p className="text-yellow-400">&#169; 2024 Copyright Amit Kumar Das - All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Contact;