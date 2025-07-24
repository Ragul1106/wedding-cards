import React from "react";
import mastercard from "../assets/images/mastercard.png";
import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.png";
import upi from "../assets/images/upi.png";
import paytm from "../assets/images/paytm.png";
import gpay from "../assets/images/gpay.png";
import phonepe from "../assets/images/phonepay.png";
import cred from "../assets/images/cred.png";

const CheckoutPage = () => {
    return (
        <div className="min-h-screen bg-[#e6e6fa] p-10 flex flex-col md:flex-row gap-8 justify-center items-start">
 
            <div className="bg-[#ece8f8] rounded-xl border border-gray-400  shadow-md p-6 w-full md:w-[400px]">
                <div className="flex  justify-between mb-6">
                    <img src={mastercard} alt="mastercard" className="h-12 w-20 object-contain" />
                    <img src={visa} alt="visa" className="h-12 w-20 object-contain" />
                    <img src={paypal} alt="paypal" className="h-12 w-20 object-contain" />
                    <img src={upi} alt="upi" className="h-12 w-20 object-contain" />
                </div>

                <div className="space-y-3 border border-gray-200 p-2">
                <h2 className="text-lg font-semibold mb-4">Pay by UPI</h2>

                    <label className="flex items-center justify-between border-b px-4 py-2 cursor-pointer hover:shadow-sm">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="upi" />
                            <span>Paytm</span>
                        </div>
                        <img src={paytm} alt="Paytm" className="h-6" />
                    </label>

                    <label className="flex items-center justify-between border-b px-4 py-2 cursor-pointer hover:shadow-sm">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="upi" />
                            <span>Gpay</span>
                        </div>
                        <img src={gpay} alt="GPay" className="h-6" />
                    </label>

                    <label className="flex items-center justify-between border-b   px-4 py-2 cursor-pointer hover:shadow-sm">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="upi" />
                            <span>PhonePe</span>
                        </div>
                        <img src={phonepe} alt="PhonePe" className="h-6" />
                    </label>

                    <label className="flex items-center justify-between  rounded-lg px-4 py-2 cursor-pointer hover:shadow-sm">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="upi" />
                            <span>Cred</span>
                        </div>
                        <img src={cred} alt="Cred" className="h-6" />
                    </label>
                </div>


                <button className="w-full bg-[#5a5a5a] text-white font-semibold py-3 mt-6 rounded-lg flex items-center justify-center space-x-2">
                    <span>Cash on Delivery</span>
                </button>

                <div className="mt-4 text-sm text-gray-500">
                    <p>* Credit card payments may take up to 24 hours to be processed!</p>
                    <label className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2" />
                        Save my payments details for future purchase
                    </label>
                </div>
            </div>

            <div className="bg-[#ece8f8] rounded-xl border border-gray-400 shadow-md p-6 w-full md:w-[400px]">
                <h2 className="text-xl font-bold text-center underline mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Date:</p>
                    <p>16th Apr</p>
                </div>
                <div className="flex justify-between mb-4">
                    <p className="text-gray-600">Time:</p>
                    <p>5.35pm</p>
                </div>

                <hr className="mb-4" />

                <div className="mb-4">
                    <p className="font-semibold">Products</p>
                    <p className="text-sm">The Blue Wedding Card x 2</p>
                    <p className="text-sm text-gray-500">Added Compliment: Hold Bag</p>
                </div>

                <div className="bg-gray-100 text-sm rounded-lg px-4 py-2 flex justify-between items-center text-green-700 font-semibold mb-4">
                    <span>MAR0057</span>
                    <span>Coupon Applied</span>
                </div>

                <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-orange-500">Rs. 153.40</span>
                </div>
                <div className="flex justify-between text-sm mb-6">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-orange-500">0.00 <span className="text-xs text-gray-400">(Free)</span></span>
                </div>

                <button className="w-full bg-[#f5a623] text-white font-bold py-3 rounded-lg hover:bg-[#e59417] transition">
                    Pay Rs. 153.40
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
