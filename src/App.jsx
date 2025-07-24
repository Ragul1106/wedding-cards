import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeddingCards from "./components/WeddingCards";
import ContactUs from "./components/ContactUs";
import Wishlist from "./components/Wishlist";
import FAQ from "./components/FAQs";
import About from "./components/AboutUs";
import ProductDetailPage from "./components/ProductDetailPage";
import HinduWeddingCards from "./components/HinduWeddingCards";
import HowToOrder from "./components/HowToOrder";
import ScrollToTop from "./components/ScrollToTop";
import SearchBar from "./components/SearchBar";
import { WishlistProvider } from "./context/WishlistContext";
import HomePage from "./pages/HomePage";
import LoginSignup from "./components/LoginSignup";
import AffordableProductDetailPage from "./components/AffordableProductDetailPage";
import CheckoutPage from "./components/CheckoutPage";


const App = () => {
  return (
     <WishlistProvider>
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-poppins bg-lavender">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/wedding-cards" element={<WeddingCards />} />
          <Route path="/hindu-wedding-cards" element={<HinduWeddingCards />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> 
          <Route path="/affordable/:id" element={<AffordableProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </WishlistProvider>
  );
};

export default App;
