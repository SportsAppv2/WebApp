import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="mx-5">
      <div className="h-[32px]">
        <input
          type="text"
          className="bg-gray-200 w-[250px] px-9 py-1 outline-none rounded-md shadow-md"
        />
        <AiOutlineSearch className="relative top-[-27px] left-[4px] text-[24px]" />
      </div>
    </div>
  );
};

export default Searchbar;
