import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = () => {
  const { cartItems, isCartModalOpen, setIsCartModalOpen } = useCart();

  if (!isCartModalOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalTax = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + totalTax).toFixed(2);
  const canCheckout = cartItems.reduce((a, b) => a + b.quantity, 0) >= 100;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex items-center justify-center">
     <div className="bg-white w-[90%] max-w-9xl p-6 rounded-xl overflow-y-auto h-[70vh] relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-xl lg:text-2xl"
          onClick={() => setIsCartModalOpen(false)}
        >
          &times;
        </button>

        {/* Cart Table */}
        <table className="w-full text-left border-collapse text-sm lg:text-base">
          <thead>
            <tr className="border-b border-black">
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Tax</th>
              <th>Price</th>
            </tr>
            
          </thead>
          
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td>
                  <div className="bg-orange-400 px-4 py-4 rounded-md mt-2 w-[150px] my-4">
                    <p className="text-sm lg:text-base font-bold">SKU: {item.sku}</p>
                    <p className="text-xs lg:text-sm">SN ({item.sn || item.id})</p>
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>Rs.{item.price.toFixed(2)}</td>
                <td>18%</td>
                <td>Rs.{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>

          {/* Totals */}
          <tfoot className="text-sm lg:text-base">
            <tr>
              <td colSpan="4" className="text-right font-semibold py-4">Sub Total:</td>
              <td className="font-semibold">Rs.{subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" className="text-right font-semibold">Total Tax (18%):</td>
              <td className="font-semibold">Rs.{totalTax}</td>
            </tr>
            <tr>
              <td colSpan="4" className="text-right font-bold py-4">Total:</td>
              <td className="font-bold">Rs.{total}</td>
            </tr>
          </tfoot>
        </table>

        {/* Warning */}
        {!canCheckout && (
          <p className="text-center text-red-600 font-bold mt-4 text-sm lg:text-base">
            TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART
          </p>
        )}

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold text-sm lg:text-base"
            onClick={() => setIsCartModalOpen(false)}
          >
            Continue Shopping
          </button>
          <button
            disabled={!canCheckout}
            className={`${
              canCheckout ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-400"
            } px-6 py-2 rounded-lg text-white font-semibold text-sm lg:text-base`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
