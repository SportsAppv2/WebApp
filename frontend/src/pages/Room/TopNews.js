import React, { useRef } from "react";
import SingleNewsBlock from "./SingleNewsBlock";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Room.css";
import {data} from "../../datafiles/Room/TopNewsData.js"

const   TopNews = () => {
  const slider = useRef("");
  const slideLeft =() => {
    var s = slider.current;
    s.scrollLeft = s.scrollLeft - 500;
  }
  const slideRight =() => {
    var s = slider.current;
    s.scrollLeft = s.scrollLeft + 500;
  }
  return (
    <>
      <div className="mt-5 relative">
        <div className="relative flex items-center">
          <BsChevronCompactLeft 
            className="text-white-100 text-[36px] opacity-50 hover:opacity-100 cursor-pointer relative right-5" 
            onClick={slideLeft} 
          />
          <div className="hs w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" ref={slider}>
            {data.data.map((item) => (
              <SingleNewsBlock
              key={item.id+"key"}
              id={item.id}
              header={item.header}
              image={item.image}
              />        
            ))}
          </div>
          <BsChevronCompactRight 
            className="text-white-100 text-[36px] opacity-50 hover:opacity-100 cursor-pointer relative left-5" 
            onClick={slideRight}
          />
        </div>
      </div>
    </>
  );
};

export default TopNews;
