import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { affordableCards } from "../data/AffordableCardsData";
import { useCart } from "../context/CartContext";
import RelatedCards from "../components/RelatedCards";
import height from "../assets/images/height.png";
import width from "../assets/images/width.png";
import weight from "../assets/images/weight.png";

const AffordableProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const initialProduct = affordableCards.find((p) => p.id === parseInt(id));
  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(initialProduct?.src);
  const totalPrice = quantity * product.price;

  useEffect(() => {
    setMainImage(product?.src);
  }, [product]);

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
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = Math.max(1, parseInt(e.target.value) || 1);
                      setQuantity(val);
                    }}
                    className="w-16 sm:w-20 text-center border border-gray-300 rounded-md text-sm sm:text-base py-1"
                  />
                  <div
                    onClick={handleIncrease}
                    className="bg-orange-500 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400 text-lg font-bold cursor-pointer hover:bg-orange-600 text-white"
                  >
                    +
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/checkout"
                  state={{
                    product,
                    quantity,
                    totalPrice
                  }}
                  onClick={() => {
                    localStorage.setItem("orderedProduct", JSON.stringify({
                      ...product,
                      quantity,
                      totalPrice
                    }));
                  }}
                >

                  <button
                    className="bg-amber-400 w-full font-semibold px-6 py-2 cursor-pointer rounded-lg shadow hover:bg-amber-600 text-base sm:text-lg lg:text-xl">
                    Buy Now
                  </button>
                </Link>

                <button
                  onClick={() => addToCart(product, quantity)}
                  className="bg-gray-200 font-semibold px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-gray-300 text-base sm:text-lg lg:text-xl"
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
            <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center text-sm sm:text-base lg:text-lg">
              <div className="flex items-center gap-1">
                <img src={height} alt="height" className="w-8 h-8 sm:w-5 sm:h-5" />
                <span className="font-bold">Height:</span> {product.height} cms
              </div>

              <div className="flex items-center gap-1">
                <img src={width} alt="width" className="w-8 h-8 sm:w-5 sm:h-5" />
                <span className="font-bold">Width:</span> {product.width} cms
              </div>

              <div className="flex items-center gap-1">
                <img src={weight} alt="weight" className="w-8 h-8 sm:w-5 sm:h-5" />
                <span className="font-bold">Weight:</span> {product.weight} grams
              </div>
            </div>

          </div>
        </div>
      </div>
      <RelatedCards onSelectCard={(card) => {
        setProduct(card);
        setQuantity(1);
      }} />
    </>
  );
};

export default AffordableProductDetailPage;
