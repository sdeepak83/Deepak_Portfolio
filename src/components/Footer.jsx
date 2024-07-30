import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black border-t-2  text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex mb-4">
                    <a href="https://www.facebook.com" className="mx-2 text-xl" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" className="mx-2 text-xl" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="mx-2 text-xl" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.instagram.com" className="mx-2 text-xl" aria-label="Linkdin">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
