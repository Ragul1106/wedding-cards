import React from "react";
import { useNavigate } from "react-router-dom";

import hinduWed from "../assets/images/hinduwed.png";
import christianWed from "../assets/images/Christian_Wedding.png";
import muslimWed from "../assets/images/Muslim_Wedding.png";
import sikhWed from "../assets/images/Sikh_Wedding.png";
import interfaithWed from "../assets/images/interfaith_wed.png";
import exclusiveWed from "../assets/images/exclusive_wed.png";
import traditionalWed from "../assets/images/Traditional_wed.png";
import allWeddingCards from "../assets/images/All_wedding_cards.png";
import newStyleWed from "../assets/images/new_style_wed.png";
import envelopeWed from "../assets/images/envelope_wed.png";
import elegantFaithWed from "../assets/images/elegant_faith_wed.png";
import nepaliWed from "../assets/images/Nepali_Wedding.png";

const cards = [
  { title: "Hindu Wedding Cards", src: hinduWed, path: "/hindu-wedding-cards" },
  { title: "Christian Wedding Cards", src: christianWed, path: "/wedding/christian" },
  { title: "Muslim Wedding Cards", src: muslimWed, path: "/wedding/muslim" },
  { title: "Sikh Wedding Cards", src: sikhWed, path: "/wedding/sikh" },
  { title: "Interfaith Wedding Cards", src: interfaithWed, path: "/wedding/interfaith" },
  { title: "Exclusive Wedding Cards", src: exclusiveWed, path: "/wedding/exclusive" },
  { title: "Traditional Wedding Cards", src: traditionalWed, path: "/wedding/traditional" },
  { title: "All Wedding Cards", src: allWeddingCards, path: "/wedding/all" },
  { title: "New Style Wedding Cards", src: newStyleWed, path: "/wedding/new-style" },
  { title: "Envelope Wedding Cards", src: envelopeWed, path: "/wedding/envelope" },
  { title: "Elegant Faith Wedding Cards", src: elegantFaithWed, path: "/wedding/elegant-faith" },
  { title: "Nepali Wedding Cards", src: nepaliWed, path: "/wedding/nepali" },
];

export default function WeddingCards() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#E6E6FA] py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-10 tracking-wide">
        WEDDING CARDS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 gap-8">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(card.path)}
            className="bg-[#FFF8EB] shadow-md rounded-md cursor-pointer px-[6px] py-4 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-200"
          >
            <img
              src={card.src}
              alt={card.title}
              className="h-48 w-auto object-contain mb-4"
            />
            <h3 className="text-sm font-semibold text-center text-black">
              {card.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
}
