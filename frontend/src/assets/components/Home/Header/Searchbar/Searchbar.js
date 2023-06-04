import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="mx-5">
      <div className="h-[32px]">
        <input
          type="text"
          placeholder="Search SportsHub"
          className="bg-gray-200 w-[250px] px-9 py-1 outline-none rounded-2xl shadow-md"
        />
        <AiOutlineSearch className="relative top-[-27px] left-[8px] text-[22px]" />
      </div>
    </div>
  );
};

export default Searchbar;
