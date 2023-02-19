import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className="mx-5">
            <div className="h-[32px]">
                <input
                type="text"
                placeholder="Search"
                className="bg-[#000000] w-[250px] px-9 py-1 outline-none border-gray-600 border-[1px] rounded-2xl shadow-md"
                />
                <AiOutlineSearch className="relative top-[-27px] left-[8px] text-[22px]" />
            </div>
        </div>
    );
};

export default SearchBar;