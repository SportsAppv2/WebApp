import React, { useRef } from "react";
import SingleNewsBlock from "./SingleNewsBlock";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Room.css";
import {data} from "../../datafiles/Room/TopNewsData.js"

const   TopNews = () => {
  const slider = useRef("");
  // console.log('Data is ', data);
  // const hs = useRef("");
  // const scrollHs = (event) => {
  //   console.log(event.target);
  //   let maxScrollWidth =
  //     hs.current.scrollWidth - hs.current.clientWidth / 2 - 10;
  //   console.log(event.target.classList.contains("scroll-right"));
  //   if (event.target.classList.contains("scroll-right")) {
  //     //rightscroll
  //     let x = hs.current.offsetWidth / 2 + hs.current.scrollLeft - 10;
  //     console.log(hs.current.right);
  //     hs.current.scrollTo({
  //       left: x,
  //     });
  //     if (x < maxScrollWidth - hs.current.offsetWidth / 2) {
  //       event.target.classList.add("hidden");
  //     }
  //     if(hs.current.children[0].classList.contains("hidden")){
  //       hs.current.children[0].classList.remove("hidden");
  //     }
  //   } else {
  //     //leftscroll
  //     let x = hs.current.offsetWidth / 2 - hs.current.scrollLeft - 10;
  //     hs.current.scrollTo({
  //       left: -x,
  //     });
  //     if (x < maxScrollWidth - hs.current.offsetWidth / 2) {
  //       event.target.classList.add("hidden");
  //     }
  //     if(hs.current.children[1].classList.contains("hidden")){
  //       hs.current.children[1].classList.remove("hidden");
  //     }
  //   }
  //   console.log(
  //     hs.current.clientWidth,
  //     hs.current.scrollLeft,
  //     hs.current.scrollWidth
  //   );
  // };
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
        {/* <ul className="hs m-0" ref={hs}>
          <div
            className="left cursor-pointer absolute z-[1000] top-0 left-0 bg-[#00000077] h-[250px] flex items-center w-[80px] justify-center scroll-left hidden"
            onClick={scrollHs}
          >
            <BsChevronCompactLeft className="text-white-100 text-[48px]" />
          </div>
          <div
            className="right cursor-pointer absolute z-[1000] top-0 right-0 bg-[#00000077] h-[250px] flex items-center w-[80px] justify-center scroll-right"
            onClick={scrollHs}
          >
            <BsChevronCompactRight className="text-white-100 text-[48px]" />
          </div>
        </ul> */}
      </div>
    </>
  );
};

export default TopNews;
