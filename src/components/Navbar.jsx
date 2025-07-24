import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import '../assets/styles/navbar.css';
import logo from "../assets/images/logo.png";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
    const navigate = useNavigate();
    const { totalItems, setIsCartModalOpen } = useCart();

    const handleSearchClick = () => {
        navigate("/search");
    };
    return (
        <nav className="bg-[#E6E6FA] font-[Poppins] p-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                        <img
                            src={logo}
                            alt="Wed Knot Craft"
                            className="w-full h-full object-contain"
                        />
                        <span className="image-text absolute font-semibold inset-0 flex flex-col items-center justify-center text-[16px] sm:text-[20px] text-black pointer-events-none leading-[1.2]">
                            <span>Cherished</span>
                            <span>By</span>
                        </span>
                    </div>

                    <div className="text-black image-text text-[16px] sm:text-[20px] leading-tight text-center sm:text-left">
                        <div className="pl-0 text-[25px] font-semibold">Wed</div>
                        <div className="pl-6 text-[25px] font-semibold">Knot</div>
                        <div className="pl-12 text-[25px] font-semibold">Craft</div>
                    </div>
                </div>

                <div className="flex items-center gap-6 sm:gap-12 mr-10 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="relative text-black w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            onFocus={handleSearchClick}
                            className="w-full sm:w-64 rounded-2xl px-4 sm:px-16 py-2 border border-gray-800 focus:outline-none   hover:bg-orange-200 hover:text-black transition-colors duration-200"
                        />
                        <FiSearch className="absolute top-2.5 right-4 text-black-500" />
                    </div>

                    <div className="flex gap-10 text-xl text-black">

                        <Link
                            to="/login"
                            className="p-2 rounded-full cursor-pointer hover:bg-purple-800 hover:text-white transition-colors duration-200"
                        >
                            <FiUser />
                        </Link>

                        <Link
                            to="/wishlist"
                            className="p-2 rounded-full no-underline text-black hover:text-white focus:text-black active:text-black hover:bg-purple-800 transition-colors duration-200"
                        >
                            <FiHeart />
                        </Link>

                        <div
                            className="p-2 rounded-full relative cursor-pointer hover:bg-purple-800 hover:text-white transition-colors duration-200"
                            onClick={() => setIsCartModalOpen(true)}
                        >
                            <FiShoppingCart />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full px-[6px]">
                                    {totalItems}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-around gap-4 text-[14px] sm:text-[16px] font-semibold px-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/wedding-cards" className="hover:underline">Wedding Invitation</a>
                <a href="#" className="hover:underline">Special Occasions</a>
                <a href="#" className="hover:underline">Theme Cards</a>
                <a href="#" className="hover:underline">Scroll Invitation</a>
                <a href="#" className="hover:underline">Digital Invitation</a>
            </div>
            <CartModal />
        </nav>
    );
};

export default Navbar;