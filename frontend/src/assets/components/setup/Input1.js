import React from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useState } from "react";
import Input2 from "./Input2";
import { useDispatch, useSelector } from "react-redux";
import { setupActions } from "../../store/setupSlice";
const Input1 = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.setup.profileInfo);
  const goToNext = () => {
    dispatch(setupActions.pageChanged({ goTo: 2 }));
  };
  const dataFilled = (userName, country, region, tags) => {
    dispatch(
      setupActions.profileInfoAdded({
        userName,
        country,
        region,
        tags,
      })
    );
  };
  return (
    <div className="text-lg mt-2 md:mt-[25px]">
      <div className="w-[90%] bg-[#1A1C20] rounded-2xl  h-[28 0px] md:w-[500px] m-auto py-3">
        <div className="mx-5 ">
          <div className="grid">
            <div className="userId w-full my-1">
              <div className="id text-gray-500">User Name</div>
              <input
                type="text"
                className="w-full setupInput bg-[#000000]"
                onChange={(e) =>
                  dataFilled(
                    e.target.value,
                    profileData.country,
                    profileData.region,
                    profileData.tags
                  )
                }
              />
            </div>
            <div className="country w-full my-1">
              <div className="countryName text-gray-500">Country</div>
              <CountryDropdown
                value={profileData.country}
                onChange={(country) =>
                  dataFilled(
                    profileData.userName,
                    country,
                    profileData.region,
                    profileData.tags
                  )
                }
                className="w-full setupInput bg-[#000000]"
              />
            </div>
            <div className="region w-full my-1">
              <div className="regionName text-gray-500">Region</div>
              <RegionDropdown
                country={profileData.country}
                value={profileData.region}
                onChange={(region) =>
                  dataFilled(
                    profileData.userName,
                    profileData.country,
                    region,
                    profileData.tags
                  )
                }
                className="w-full setupInput bg-[#000000]"
              />
            </div>
            <div className="my-2">
              <button
                className="float-right px-3 py-1 text-lg font-medium  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200 shadow-md rounded-xl mt-2"
                onClick={goToNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input1;
