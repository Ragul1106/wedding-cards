import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlistItem = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((card) => card.title === item.title);
      return exists
        ? prev.filter((card) => card.title !== item.title)
        : [...prev, item];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};
