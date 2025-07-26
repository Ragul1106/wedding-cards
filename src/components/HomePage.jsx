import React from 'react'
import WeddingCardsSection from "../components/WeddingCardsSection";
import InvitationCardSection from "../components/InvitationCardSection";
import TestimonialSection from "../components/TestimonialSection";
import HowItWorks from "../components/HowItWorks";
import PromoCards from "../components/PromoCards";
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
  <img
    src={homeBg}
    alt="Home Background"
    className="w-full h-auto block"
  />
  <div className="flex justify-center bg-[#EAE6FA]">
 <img
  src={cardframe}
  alt="Home Background"
  className="w-[1100px] h-[500px] mx-auto block object-contain"
/>

</div>

  <InvitationCardSection />
  <ThemeBasedInvitation />
  <div className="px-2 sm:px-4 md:px-6 py-8 bg-[#EAE6FA]">
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
