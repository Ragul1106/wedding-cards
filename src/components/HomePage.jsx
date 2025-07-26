import React from 'react'
import { Link } from 'react-router-dom';
import WeddingCardsSection from "../components/WeddingCardsSection";
import InvitationCardSection from "../components/InvitationCardSection";
import TestimonialSection from "../components/TestimonialSection";
import HowItWorks from "../components/HowItWorks";
import ThemeBasedInvitation from "../components/ThemeBasedInvitation";
import homeBg from '../assets/images/HomeBg.jpg';
import InvitationCollections from '../components/InvitationCollections';
import Promocard1 from '../assets/images/Promocard1.jpg'
import Promocard2 from '../assets/images/Promocard2.jpg'
import sale from '../assets/images/stock-clearance.jpg'
import cardframe from '../assets/images/Card_frame.jpg'

function HomePage() {

  return (
    <div>
      <div className="relative w-full">
        <img
          src={homeBg}
          alt="Home Background"
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-14">
          <div className="max-w-xl w-full text-center sm:text-left">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Your Love Story Begins Here
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black font-medium mb-6 sm:mb-10 leading-relaxed">
              Create stunning wedding invitations that capture the essence of your special day. Elegant designs, heartfelt words, and everything you need to make your first impression unforgettable.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/wedding-cards">
                <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md hover:bg-yellow-500 transition">
                  Get your style
                </button>
              </Link>
            </div>
          </div>
        </div>


      </div>

      <div className="flex justify-center bg-[#E6E6FA]">
        <img
          src={cardframe}
          alt="Home Background"
          className="w-[1100px] h-[500px] mx-auto block object-contain"
        />
      </div>

      <InvitationCardSection />
      <ThemeBasedInvitation />
      <div className="px-2 sm:px-4 md:px-6 py-8 bg-[#E6E6FA]">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1 min-h-[200px] bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <img
              src={Promocard1}
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-h-[200px] bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <img
              src={Promocard2}
              alt="Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <WeddingCardsSection />
      <img
        src={sale}
        alt="Home Background"
        className="w-full h-auto block"
      />
      <InvitationCollections />
      <TestimonialSection />
      <HowItWorks />
    </div>
  )
}

export default HomePage