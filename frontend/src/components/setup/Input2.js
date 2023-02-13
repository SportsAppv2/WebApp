import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateProfile, setupActions } from "../../store/setupSlice";
import SearchItem from "./SearchItem";
import SuggestedTag from "./SuggestedTag";
import { AiOutlineSearch } from "react-icons/fa";

const Input2 = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.setup.profileInfo);
  const tagsData = profileData.tags;
  console.log(profileData);
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
  const [tag, setTag] = useState("");
  return (
    <div className="text-lg mt-2 md:mt-[25px]">
      <div className="w-[90%] bg-[#1A1C20] rounded-2xl h-[28 0px] md:w-[500px] m-auto py-3">
        <div className="mx-5 ">
          <div className="grid">
            <div className="userId w-full my-1">
              <div className="id text-gray-500">Search News about..</div>
              <input
                type="text"
                className="w-full setupInput bg-[#000000]"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    dataFilled(
                      profileData.userName,
                      profileData.country,
                      profileData.region,
                      [
                        ...profileData.tags,
                        { id: profileData.tags.length, tagName: tag },
                      ]
                    );
                    setTag("");
                  }
                }}
              />
            </div>
            <div className="my-3">
              <div className="flex">
                <div className="text-gray-500">Suggested</div>
                <div className="tags flex w-full flex-wrap items-center">
                  <SuggestedTag name={"CR7"} />
                  <SuggestedTag name={"Messi"} />
                  <SuggestedTag name={"WorldCup"} />
                </div>
              </div>
            </div>
            <div className="my-1 flex w-full flex-wrap">
              {tagsData.map((item, index) => (
                <SearchItem cut="setup" name={item.tagName} tagId={item.id} key={index} />
              ))}
            </div>
            <div className="my-2">
              <button
                className="float-right px-3 py-1 text-lg  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl"
                onClick={() => {
                  dispatch(fetchCreateProfile());
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input2;
