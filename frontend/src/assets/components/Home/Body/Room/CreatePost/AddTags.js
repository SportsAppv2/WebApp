import React from "react";
import SingleTag from "./SingleTag";

const AddTags = () => {
  return (
    <>
      <div className="flex mt-2">
        <div className="text-blue-70 cursor-pointer">Add Tags</div>
        <div className="mx-2">
          <input type="text" className="rounded-sm" />
        </div>
      </div>
      <div className="tagContainer">
        <SingleTag />
        <SingleTag />
      </div>
    </>
  );
};

export default AddTags;
