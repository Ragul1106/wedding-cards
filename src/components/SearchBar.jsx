import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import search1 from "../assets/images/search1.png";
import search2 from "../assets/images/search2.png";
import search3 from "../assets/images/search3.png";
import search4 from "../assets/images/search4.png";
import search5 from "../assets/images/search5.png";

import search6 from "../assets/images/search6.png";
import search7 from "../assets/images/search7.png";
import search8 from "../assets/images/search8.png";
import search9 from "../assets/images/search9.png";
import search10 from "../assets/images/search10.png";
import search11 from "../assets/images/search11.png";

const initialFilters = [
  "Wedding Cards",
  "Scroll Cards",
  "Theme Cards",
  "Birthday Cards",
  "Engagement Cards"
];

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((f) => f !== filterToRemove));
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
    console.log("Filters:", filters);
  };

  const ideas = [search1, search2, search3, search4, search5];
  const popular = [search6, search7, search8, search9, search10, search11];

  return (
    <section className="bg-[#e7e2f9] text-center py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-3xl font-extrabold mb-2">
        Everything You Need, to Plan your Dream Wedding
      </h2>
      <p className=" text-lg mb-6 text-black-700 font-medium">
        Search for vendors, cards, ideas and real wedding stories and more!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6">
        <button className="bg-pink-400 text-white cursor-pointer font-semibold py-2 px-6 rounded-full hover:bg-pink-500 transition-all">
          All
        </button>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 rounded-full border border-black-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <FaSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <span
            key={filter}
            className="flex items-center bg-white border border-gray-300 text-sm px-3 py-1 rounded-full shadow-sm"
          >
            {filter}
            <IoClose
              className="ml-2 cursor-pointer text-gray-600 hover:text-red-500"
              onClick={() => removeFilter(filter)}
            />
          </span>
        ))}
      </div>

      <div className="text-left max-w-6xl mx-auto mb-10">
        <h3 className="text-xl font-bold mb-4">Ideas for You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ideas.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Idea ${index + 1}`}
              className="w-full h-[150px] object-cover rounded-lg mb-5 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="text-left max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Popular on This</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popular.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Popular ${index + 1}`}
              className="w-full h-[150px] object-cover rounded-lg mb-5 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;