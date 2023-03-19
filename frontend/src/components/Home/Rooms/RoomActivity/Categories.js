import React, { useEffect } from "react";
import { MdSportsCricket } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailableSports } from "../../../../store/sportsSlice";
const Categories = () => {
  const dispatch = useDispatch();
  const sportsData = useSelector((state) => state.sports);
  useEffect(() => {
    dispatch(fetchAvailableSports());
  }, []);
  return (
    <div className="h-[150px] overflow-y-scroll mt-2 relative">
      {sportsData.availableSports.map((sport) => {
        return (
          <div
            className="flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2 hover:cursor-pointer hover:bg-gray-20"
            key={sport.name}
          >
            <div className="mx-5">
              {sport.emoji + " "}
              {sport.name}
            </div>
            <IoIosArrowForward className="absolute right-[20px]" />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
