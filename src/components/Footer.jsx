import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import '../assets/styles/navbar.css';
import logo from "../assets/images/logo.png";
import logotext from "../assets/images/logotext.png";
import insta from "../assets/images/insta.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import whatsapp from "../assets/images/whatsapp.png";


const Footer = () => {
    return (
        <footer className="bg-[#FFE5B4] font-[Poppins] text-black py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">

                    <div className="w-46 h-46 mb-2 relative">
                        <img src={logo} alt="Wed Knot Craft" className="w-full h-full object-contain" />
                        <img
                            src={logotext}
                            alt="logotext"
                            className="absolute top-3/4 left-1/2 transform right-1/4 -translate-x-1/2 h-12 z-20"
                        />

                        <div className="absolute image-text inset-0 mr-6 font-semibold flex flex-col items-center justify-center text-[16px] sm:text-[20px] text-black  leading-tight pointer-events-none">
                            <span className="pl-0">Wed</span>
                            <span className="pl-6">Knot</span>
                            <span className="pl-12">Craft</span>
                        </div>
                    </div>

                    <p className="text-sm font-semibold">
                        Largest Wedding <br />
                        Cards Collections in <br />
                        Chennai
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Information</h3>
                    <ul className="space-y-4 font-semibold cursor-pointer">
                        <li>
                            <Link to="/about" className="hover:text-white transition-colors duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition-colors duration-300">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:text-white transition-colors duration-300">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/how-to-order" className="hover:text-white transition-colors duration-300">
                                How to order wedding invitation online?
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Quick Access</h3>
                    <ul className="space-y-4 font-semibold cursor-pointer">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/wedding-cards" className="hover:text-white transition-colors duration-300">
                                Wedding Cards
                            </Link>
                        </li>
                        <li>
                            <Link to="/hindu-wedding-cards" className="hover:text-white transition-colors duration-300">
                                Hindu Wedding Cards
                            </Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold mb-5">Contact Us</h3>
                    <p className="flex font-semibold items-center gap-2 mb-5"><FiPhone /> +91 9876543210</p>
                    <p className="flex font-semibold items-center gap-2 mb-5"><FiMail /> wedtype@weddingcards.com</p>
                    <p className="mb-5 font-semibold">Operating hours: 10.00Am to 10.00Pm</p>
                    <p className="mb-5 font-semibold">Monday - Sunday</p>
                </div>

            </div>

            <div className="mt-10 ml-5 flex justify-start items-center gap-3 flex-wrap px-6 font-semibold">
                <span>Follow us with</span>
                <img src={insta} alt="Instagram" className="w-5" />
                <img src={facebook} alt="Facebook" className="w-5" />
                <img src={youtube} alt="YouTube" className="w-5" />
                <img src={whatsapp} alt="WhatsApp" className="w-5" />
            </div>

            <div className="mt-6 border-t border-black pt-4 w-full">
                <p className="text-center text-sm font-semibold px-6">
                    &copy; Wed Knot Craft India Private Limited. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;