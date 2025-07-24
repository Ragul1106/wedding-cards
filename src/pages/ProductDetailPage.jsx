import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cards } from "../components/HinduWeddingCardsData";
import { useCart } from "../context/CartContext";
import RelatedCards from "../components/RelatedCards";

const ProductDetailPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = cards.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.src);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="bg-[#E6E6FA] py-10 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 rounded-xl">

          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {product.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  alt=""
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg shadow shrink-0 cursor-pointer ${mainImage === img ? "ring-4 ring-orange-500" : ""
                    }`}
                />
              ))}
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.title}
                className="max-h-[250px] sm:max-h-[300px] md:max-h-[400px] object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div>
              <span className="text-sm sm:text-base lg:text-2xl bg-[#e6c8a8] text-black px-4 sm:px-6 py-2 rounded-md font-semibold">
                SKU Code: {product.sku}
              </span>
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-red-600 font-bold py-2">
                Rs. {product.price.toFixed(2)}{" "}
                <span className="font-normal text-black text-sm sm:text-base">
                  per unit inclusive of all taxes
                </span>
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="font-bold text-sm sm:text-base lg:text-lg">QTY:</span>
                <div className="flex items-center gap-3 py-2 px-2 rounded-xl bg-white">
                  <div
                    onClick={handleDecrease}
                    className="bg-orange-500 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400 text-lg font-bold cursor-pointer hover:bg-orange-600 text-white"
                  >
                    -
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium">{quantity}</span>
                  <div
                    onClick={handleIncrease}
                    className="bg-orange-500 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400 text-lg font-bold cursor-pointer hover:bg-orange-600 text-white"
                  >
                    +
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBuyNow}
                  className="bg-gold-500 cursor-pointer font-semibold px-6 py-2 rounded-lg shadow hover:bg-orange-600 text-base sm:text-lg lg:text-xl"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="bg-gray-200 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-300 text-base sm:text-lg lg:text-xl"
                >
                  Add to Cart
                </button>
              </div>

              {product.variants?.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-xl">
                    Variants (Same size & material but different color/Theme)
                  </h3>
                  <div className="mt-2 flex gap-3 flex-wrap">
                    {product.variants.map((v) => (
                      <img
                        key={v.id}
                        src={v.src}
                        alt={v.title}
                        className="w-20 h-20 object-contain rounded-md shadow"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-black">
          <div>
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold border-b border-black pb-2">
              DESCRIPTION:
            </h3>
            <p className="mt-2 text-sm sm:text-base lg:text-xl whitespace-pre-line">
              {product.description}
            </p>

            <h3 className="mt-6 text-base sm:text-lg lg:text-2xl font-bold border-b border-black pb-2">
              ADDITIONAL COMMENTS
            </h3>
            <p className="mt-2 text-sm sm:text-base lg:text-xl">{product.comments}</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold border-b border-black pb-2">
              ADDITIONAL INFORMATION
            </h3>

            <div className="mt-4 flex flex-row gap-8 items-center text-sm sm:text-base lg:text-lg flex-wrap sm:flex-nowrap">

              <div className="flex items-center gap-2">
                <div className="bg-[#7D0B0B] p-2 rounded">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m-4-4l4 4 4-4m0-8l-4-4-4 4"
                    />
                  </svg>
                </div>
                <span className="font-bold">Height:</span> {product.height} cms
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-[#7D0B0B] p-2 rounded">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h16m-4-4l4 4-4 4"
                    />
                  </svg>
                </div>
                <span className="font-bold">Width:</span> {product.width} cms
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-[#7D0B0B] p-2 rounded">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6h6l3 9H6l3-9zm0 0V4a1 1 0 112 0v2"
                    />
                  </svg>
                </div>
                <span className="font-bold">Weight:</span> {product.weight} grams
              </div>

            </div>

          </div>
        </div>
      </div>
      <RelatedCards />
    </>
  );
};

export default ProductDetailPage;
