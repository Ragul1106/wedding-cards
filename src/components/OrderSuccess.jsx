import React from "react";
import mainImage from "../assets/images/orderImage.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedTick from '../components/AnimatedTick';
import { FaUser, FaEnvelope, FaPhone, FaShoppingBag } from "react-icons/fa";

const OrderConfirmed = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const product = location.state?.product || {};
    const cartItems = location.state?.cartItems || [];
    const isFromCart = cartItems.length > 0;
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const userEmail = user.email || "";
    const userName = user.name || (
        userEmail.split('@')[0]?.charAt(0).toUpperCase() + userEmail.split('@')[0]?.slice(1)
    );
    const passedSubtotal = location.state?.subtotal;

    const quantity = product?.quantity || 1;
    const subtotal = passedSubtotal ?? (
        isFromCart
            ? cartItems.reduce((sum, p) => sum + (p.price || 0) * (p.quantity || 1), 0)
            : (product?.price || 0) * quantity
    );
    const taxRate = 0.18;
    const tax = subtotal * taxRate;
    const discount = 5;
    const total = subtotal + tax - discount;

    return (
        <div className="bg-[#e6e6fa] min-h-screen flex flex-col items-center justify-center px-4 py-6">
            <div className="relative flex items-center justify-center">
                <img
                    src={mainImage}
                    alt="Success"
                    className="w-[400px] h-[285px] object-contain"
                />
                <div className="absolute inset-0 flex mb-13 me-6 items-center justify-center">
                    <AnimatedTick />
                </div>
            </div>

            <div className="w-full max-w-7xl bg-[#e6e6fa] px-4 md:px-10 py-6 rounded shadow-md font-sans text-gray-800">
                <div className="grid md:grid-cols-2 gap-20">

                    <div className="p-4 rounded-lg shadow">
                        <h2 className="text-xl lg:text-2xl font-bold mb-4">Your Order</h2>
                        <p className="mb-1 font-bold">Order ID: <strong>{Math.floor(Math.random() * 1000000000)}</strong></p>
                        <p className="mb-6 font-bold">Thank you! Your order has been confirmed.</p>

                        {isFromCart ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
                                    <img
                                        src={item?.src || mainImage}
                                        alt={item?.title}
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                    <div>
                                        <p className="bg-orange-500 text-white px-3 py-1 rounded font-semibold mb-1 inline-block">SKU: {item?.sku}</p>
                                        <p className="font-medium">Qty: {item.quantity}</p>
                                        <p className="font-medium">SN ({item?.serial || "SN 54"})</p>
                                    </div>
                                    <p className="ml-auto font-bold text-lg">Rs. {(item?.price * item?.quantity).toFixed(2)}</p>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center gap-4 border-b pb-4 mb-4">
                                <img
                                    src={product?.src || mainImage}
                                    alt={product?.title}
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <div>
                                    <p className="bg-orange-500 text-white px-3 py-1 rounded font-semibold mb-1 inline-block">SKU: {product?.sku}</p>
                                    <p className="font-medium">Qty: {product?.quantity}</p>
                                    <p className="font-medium">SN ({product?.serial || "SN 54"})</p>
                                </div>
                                <p className="ml-auto font-bold text-lg">Rs. {(product?.price * product?.quantity).toFixed(2)}</p>
                            </div>
                        )}


                        <h3 className="font-bold mb-2 text-xl">Order Summary</h3>
                        <ul className="text-sm space-y-1 mb-2">
                            <li className="flex justify-between font-semibold text-lg">
                                Subtotal <span>Rs. {subtotal.toFixed(2)}</span>
                            </li>
                            <li className="flex justify-between font-semibold text-lg">
                                Shipping Charge <span>Rs. 0.00</span>
                            </li>
                            <li className="flex justify-between font-semibold text-lg">
                                Taxes <span>18%</span>
                            </li>
                            <li className="flex justify-between font-semibold text-lg">
                                Discount <span>Rs. {discount.toFixed(2)}</span>
                            </li>
                        </ul>
                        <hr />
                        <p className="flex justify-between mt-2 font-bold text-lg">
                            Total <span>Rs. {total.toFixed(2)}</span>
                        </p>
                    </div>

                    <div className="p-4 rounded-lg shadow space-y-4">
                        <div>
                            <h4 className="font-semibold mb-1 text-xl">Customer</h4>
                            <p className="flex items-center gap-2 text-lg"><FaUser /> {userName}</p>
                            <p className="flex items-center gap-2 text-lg"><FaShoppingBag /> 1 order</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-xl">Customer Information</h4>
                            <p className="flex items-center gap-2 text-lg"><FaEnvelope /> {userEmail}</p>
                            <p className="flex items-center gap-2 text-lg"><FaPhone /> <strong>{
                                (Math.random() > 0.5 ? '9' : '6') +
                                Math.floor(Math.random() * 100000000).toString().padStart(9, '0')
                            }</strong></p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-xl">Shipping Address</h4>
                            <p className="flex items-center gap-2 text-lg"><FaUser /> {userName}</p>
                            <p className="flex items-center gap-2 text-lg">1/10 west Street</p>
                            <p>Tokyo 12345</p>
                            <p>Japan.</p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-1 text-xl">Billing Address</h4>
                            <p className="mb-1 text-lg">Same as Shipping address</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmed;
