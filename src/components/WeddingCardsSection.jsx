import React, { useContext } from "react";
import { affordableCards } from "./AffordableCardsData";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const WeddingCardsSection = () => {
  const { addToCart } = useCart();
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="bg-[#EAE6FA] py-12 px-1 sm:px-2 md:px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Simple and Affordable Wedding Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-20 lg:gap-28 max-w-[1300px] mx-auto">
        {affordableCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all relative"
          >
            <img
              src={card.src}
              alt={card.title}
              onClick={() => navigate(`/affordable/${card.id}`)}
              className="w-[250px] h-[250px] object-cover mb-6 rounded-md mx-auto cursor-pointer"
            />
            <h3 className="text-lg font-semibold mb-4 text-center">
              {card.title}
            </h3>
            <div className="flex items-center justify-between px-2">
              <span className="text-[18px] font-medium">
                Rs. {card.price.toFixed(2)}
              </span>
              <div className="flex space-x-4 text-[22px]">
                <FaHeart
                  onClick={() =>
                    toggleWishlistItem({ ...card, type: "affordable" })
                  }
                  className={`cursor-pointer ${
                    isInWishlist(card.id) ? "text-red-500" : "text-gray-600"
                  } hover:text-red-500`}
                />
                <FaShoppingBag
                  onClick={() => addToCart(card, 1)}
                  className="cursor-pointer text-gray-600 hover:text-green-600"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCardsSection;
