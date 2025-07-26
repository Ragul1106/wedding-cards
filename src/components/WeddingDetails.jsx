import React, { useState } from "react";
import flower from "../assets/images/flower.png";
import weddingRing from "../assets/images/wedding-details.png";
import { Calendar, Clock, MapPin, Pencil } from "lucide-react";

export default function WeddingInvite() {

  const [editing, setEditing] = useState({
    date: false,
    time: false,
    location: false,
  });

  const [info, setInfo] = useState({
    date: "2025-07-28",
    time: "18:00",
    location: "Chennai, Tamil Nadu",
  });

  const handleEdit = (key) => {
    setEditing((prev) => ({ ...prev, [key]: true }));
  };

  const handleChange = (e, key) => {
    setInfo((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleBlur = (key) => {
    setEditing((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="relative min-h-screen bg-[#ffe5b4] flex flex-col items-center justify-center px-4 py-10 text-center text-black">

      <img src={flower} className="absolute top-0 left-0 w-32 rotate-0" alt="" />
      <img src={flower} className="absolute top-0 right-0 w-32 rotate-90" alt="" />
      <img src={flower} className="absolute bottom-0 left-0 w-32 -rotate-90" alt="" />
      <img src={flower} className="absolute bottom-0 right-0 w-32 rotate-180" alt="" />


      <div className="relative w-40 h-40 mx-auto">
        <img
          src={weddingRing}
          alt="Wedding Ring"
          className="w-full h-full object-contain absolute inset-0 z-0"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-sm font-serif leading-tight z-10">
          <p>Groom Name</p>
          <p>&</p>
          <p>Bride Name</p>
        </div>
      </div>


      <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold z-10">
        Together with their families, joyfully<br /> invite you to their wedding
      </h2>

      <div className="mt-6 bg-trasnparent border border-black-400 rounded-xl px-6 py-6 text-left w-full max-w-md space-y-6 shadow-md z-10">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-5 h-5" />
            {editing.date ? (
              <input
                type="date"
                value={info.date}
                onChange={(e) => handleChange(e, "date")}
                onBlur={() => handleBlur("date")}
                autoFocus
                className="border-b border-gray-400 focus:outline-none bg-transparent"
              />
            ) : (
              <span>{new Date(info.date).toLocaleDateString()}</span>
            )}
          </div>
          <Pencil
            className="w-4 h-4 text-gray-500 cursor-pointer"
            onClick={() => handleEdit("date")}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-5 h-5" />
            {editing.time ? (
              <input
                type="time"
                value={info.time}
                onChange={(e) => handleChange(e, "time")}
                onBlur={() => handleBlur("time")}
                autoFocus
                className="border-b border-gray-400 focus:outline-none bg-transparent"
              />
            ) : (
              <span>{info.time}</span>
            )}
          </div>
          <Pencil
            className="w-4 h-4 text-gray-500 cursor-pointer"
            onClick={() => handleEdit("time")}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            {editing.location ? (
              <input
                type="text"
                value={info.location}
                onChange={(e) => handleChange(e, "location")}
                onBlur={() => handleBlur("location")}
                autoFocus
                className="border-b border-gray-400 focus:outline-none bg-transparent"
              />
            ) : (
              <span>{info.location}</span>
            )}
          </div>
          <Pencil
            className="w-4 h-4 text-gray-500 cursor-pointer"
            onClick={() => handleEdit("location")}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-4">
          <button className="bg-amber-400 px-6 py-2 rounded-full font-medium shadow-md hover:bg-amber-500 transition">View map</button>
          <button className="bg-amber-400 px-6 py-2 rounded-full font-medium shadow-md hover:bg-amber-500 transition">Add to calendar</button>
        </div>
      </div>

      <div className="mt-8 text-center z-10 space-y-2">
        <p className="text-lg font-medium">Reception to Follow</p>
        <p className="text-black-600">
          Dress Code: <span className="italic text-gray-500">“Any Dress Code”</span>
        </p>
        <p className="text-black-600">
          Kindly <span className="font-bold">RSVP</span> by <span className="italic text-gray-500">“Wedding Date”</span>
        </p>
        <button className="mt-4 bg-amber-400 text-black px-6 py-2 rounded-full text-base font-semibold shadow-md hover:bg-amber-500 transition">
          RSVP Now
        </button>
      </div>



    </div>
  );
}
