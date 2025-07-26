import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import upi from "../assets/images/UPItext.png";
import paytm from "../assets/images/paytm.png";
import gpay from "../assets/images/gpay.png";
import phonepe from "../assets/images/phonepay.png";
import cred from "../assets/images/cred.png";
import allCards from "../assets/images/allCards.png";

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { product, quantity, totalPrice } = location.state || {};

    const [checkoutItems, setCheckoutItems] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
        setCheckoutItems(storedCart);
    }, []);

    const [selectedPayment, setSelectedPayment] = useState("");
    const [error, setError] = useState("");
    const [dateTime, setDateTime] = useState({ date: "", time: "" });

    const fromProductPage = !!product;

    const subtotal = fromProductPage
        ? totalPrice
        : checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.18;
    const tax = +(subtotal * taxRate).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    useEffect(() => {
        if (!fromProductPage) {
            try {
                const storedCart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
                setCheckoutItems(Array.isArray(storedCart) ? storedCart : []);
            } catch (err) {
                console.error("Failed to load cart data from storage", err);
                setCheckoutItems([]);
            }
        }
    }, [fromProductPage]);

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
        const formattedTime = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
        });
        setDateTime({ date: formattedDate, time: formattedTime });
    }, []);

    const handlePay = () => {
        if (!selectedPayment) {
            setError("⚠️ Please select a payment method before proceeding.");
            return;
        }

        setError("");
        localStorage.removeItem("checkoutCart");
        localStorage.setItem("orderedCartItems", JSON.stringify(checkoutItems));
        if (fromProductPage) {
            navigate("/order", {
                state: {
                    product: {
                        ...product,
                        quantity,
                    },
                    subtotal,
                    tax,
                    total,
                    paymentMethod: selectedPayment,
                    dateTime,
                },
            });
        } else {
            navigate("/order", {
                state: {
                    cartItems: checkoutItems,
                    subtotal,
                    tax,
                    total,
                    paymentMethod: selectedPayment,
                    dateTime,
                },
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#e6e6fa] p-10 flex flex-col md:flex-row gap-8 justify-center items-start">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">

                <div className="flex-1 bg-[#ece8f8] rounded-xl border border-gray-400 shadow-md p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center">
                            <img src={allCards} alt="All Cards" className="h-25 object-contain w-full max-w-[360px]" />
                        </div>

                        <div className="space-y-3 border border-gray-200 p-2 mt-4">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">Pay by UPI</h2>
                                <img src={upi} alt="UPI" className="h-15 w-auto" />
                            </div>

                            {[{ name: "Paytm", image: paytm }, { name: "Gpay", image: gpay }, { name: "PhonePe", image: phonepe }, { name: "Cred", image: cred }].map(option => (
                                <label
                                    key={option.name}
                                    className="flex items-center justify-between border-b px-4 py-2 cursor-pointer hover:shadow-sm"
                                >
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="upi"
                                            value={option.name}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            checked={selectedPayment === option.name}
                                        />
                                        <span>{option.name}</span>
                                    </div>
                                    <img src={option.image} alt={option.name} className="h-8" />
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-[#5a5a5a] text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2">
                            <span>Cash on Delivery</span>
                        </button>

                        <div className="mt-4 text-sm text-gray-500">
                            <p>* Credit card payments may take up to 24 hours to be processed!</p>
                            <label className="flex items-center mt-2">
                                <input type="checkbox" className="mr-2" />
                                Save my payment details for future purchase
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-[#ece8f8] rounded-xl border border-gray-400 shadow-md p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-center underline mb-4">Order Summary</h2>

                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Date:</p>
                            <p>{dateTime.date}</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className="text-gray-600">Time:</p>
                            <p>{dateTime.time}</p>
                        </div>

                        <hr className="mb-4" />

                        {fromProductPage ? (
                            <>
                                <div className="flex justify-between">
                                    <p className="font-semibold">Product:</p>
                                    <p>{product?.title}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">SKU:</p>
                                    <p>{product?.sku}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">Price per unit:</p>
                                    <p>Rs. {product?.price?.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">Quantity:</p>
                                    <p>{quantity}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {checkoutItems.map((item) => (
                                    <div key={item.id} className="mb-4">
                                        <img src={item.src} alt={item.title} className="w-24 h-24 object-cover" />
                                        <p>{item.title}</p>
                                        <p>Qty: {item.quantity}</p>
                                        <p>Total: Rs. {(item?.quantity * item?.price || 0).toFixed(2)}</p>

                                    </div>
                                ))}
                            </>
                        )}

                        <div className="flex justify-between mt-4">
                            <p className="font-semibold">Added Compliment:</p>
                            <p>Holdable Bag</p>
                        </div>

                        <hr className="mb-4" />

                        <div className="bg-gray-400 text-sm mt-5 rounded-lg px-4 flex justify-between items-center text-green-400 font-bold mb-10">
                            <span className="font-bold text-black">MAR0057</span>
                            <span>Coupon Applied</span>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-amber-600">Subtotal:</p>
                            <p className="text-lg font-semibold text-amber-600">Rs. {subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-amber-600">Tax (18%):</p>
                            <p className="text-lg font-semibold text-amber-600">Rs. {tax.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-amber-600">Shipping:</p>
                            <p className="text-lg font-semibold text-amber-600">
                                0.00 <span className="text-sm bg-gray-400 rounded-2xl text-black py-1 px-2 ml-2">Free</span>
                            </p>
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 font-medium mt-4 text-center">{error}</div>
                    )}

                    <div className="mt-6">
                        <button
                            onClick={handlePay}
                            className="w-full bg-amber-500 cursor-pointer hover:bg-amber-600 text-white text-lg font-bold py-3 rounded-lg transition-all duration-300"
                        >
                            Pay ₹ {total.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;