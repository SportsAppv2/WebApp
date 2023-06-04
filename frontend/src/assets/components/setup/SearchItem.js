import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createroomActions } from "../../store/createroomSlice";
import { setupActions } from "../../store/setupSlice";

const SearchItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex rounded-md w-fit shadow-md text-md mr-3 mb-2">
      <div className="tagItem rounded-l-md max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
        {props.name}
      </div>
      <div className="cancel bg-blue-80 hover:bg-[#5D5FEF] hover:cursor-pointer rounded-r-md px-2 flex items-center">
        {props.cut == "setup" ? (
          <AiOutlineClose
            onClick={() => dispatch(setupActions.tagsRemoved(props.tagId))}
          />
        ) : props.cut == "createroom" ? (
          <AiOutlineClose
            onClick={() => dispatch(createroomActions.tagsRemoved(props.name))}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchItem;
