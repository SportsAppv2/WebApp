import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupActions } from "../../store/setupSlice";

const SuggestedTag = (props) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.setup.profileInfo);
  return (
    <div className="flex rounded-md w-fit shadow-md text-md mx-2 h-fit">
      <div
        className="suggestedTagItem bg-gray-600 hover:bg-blue-60 hover:bg-opacity-20 hover:cursor-pointer rounded-md max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap h-fit"
        onClick={() =>
          dispatch(
            setupActions.profileInfoAdded({
              userName: profileData.userName,
              country: profileData.country,
              region: profileData.region,
              tags: [
                ...profileData.tags,
                { id: profileData.tags.length, tagName: props.name },
              ],
            })
          )
        }
      >
        {props.name}
      </div>
    </div>
  );
};

export default SuggestedTag;
