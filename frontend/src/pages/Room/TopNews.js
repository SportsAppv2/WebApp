import React, { useRef } from "react";
import SingleNewsBlock from "./SingleNewsBlock";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Room.css";

const TopNews = () => {
  const hs = useRef("");
  const scrollHs = (event) => {
    console.log(event.target);
    let maxScrollWidth =
      hs.current.scrollWidth - hs.current.clientWidth / 2 - 10;
    console.log(event.target.classList.contains("scroll-right"));
    if (event.target.classList.contains("scroll-right")) {
      //rightscroll
      let x = hs.current.offsetWidth / 2 + hs.current.scrollLeft - 10;
      console.log(hs.current.right);
      hs.current.scrollTo({
        left: x,
      });
      if (x < maxScrollWidth - hs.current.offsetWidth / 2) {
        event.target.classList.add("hidden");
      }
    } else {
      //leftscroll
      let x = hs.current.offsetWidth / 2 - hs.current.scrollLeft - 10;
      hs.current.scrollTo({
        left: -x,
      });
    }
    console.log(
      hs.current.clientWidth,
      hs.current.scrollLeft,
      hs.current.scrollWidth
    );
  };
  return (
    <>
      <div className="mt-5 relative">
        <ul className="hs m-0" ref={hs}>
          <div
            className="left cursor-pointer absolute z-[1000] top-0 left-0 bg-[#00000077] h-[300px] flex items-center w-[80px] justify-center scroll-left"
            onClick={scrollHs}
          >
            <BsChevronCompactLeft className="text-white-100 text-[48px]" />
          </div>
          <div
            className="right cursor-pointer absolute z-[1000] top-0 right-0 bg-[#00000077] h-[300px] flex items-center w-[80px] justify-center scroll-right"
            onClick={scrollHs}
          >
            <BsChevronCompactRight className="text-white-100 text-[48px]" />
          </div>
          <SingleNewsBlock
            id="id1"
            header="Manchester United trashes Ronaldo's AL Nasser 8-0 Manchester United trashes Ronaldo's AL Nasser 8-0 Manchester United trashes Ronaldo's AL Nasser 8-0 Manchester United trashes Ronaldo's AL Nasser 8-0Manchester United trashes Ronaldo's AL Nasser 8-0"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Some News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
          <SingleNewsBlock
            id="id2"
            header="Last News"
            image="https://cdn.theathletic.com/app/uploads/2022/10/25020250/BRUNO-FERNANDES-scaled-e1666677796132-1024x684.jpg"
          />
        </ul>
      </div>
    </>
  );
};

export default TopNews;
