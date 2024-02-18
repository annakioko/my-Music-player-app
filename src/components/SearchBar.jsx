import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div
      className="flex items-center bg-white shadow-md rounded-full p-1 mr-4 sm:mr-0 sm:mb-4"
      style={{ maxWidth: "250px" }}
    >
      <FaSearch className="text-gray-500 ml-2 mr-1" />
      <input
        type="text"
        placeholder="Search..."
        className="border-none focus:outline-none w-full rounded-full"
      />
      <button className="bg-blue-300 hover:bg-blue-600 text-white rounded-full px-4 py-1">
        Search
      </button>
    </div>
  );
}
