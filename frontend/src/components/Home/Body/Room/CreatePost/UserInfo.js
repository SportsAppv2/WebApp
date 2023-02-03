import React from "react";

const UserInfo = () => {
  return (
    <>
      <div className="flex mt-3 mx-3 text-gray-100">
        <div className="w-1/12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85NmzKR3BCRRt0GDJGaKPZkgfzUKDnNoLs_nQ32mfvg&s"
            alt="Profile Pic"
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
        </div>
        <div className="w-full">
          <div className="w-11/12 flex items-center font-medium ml-3 mb-1 text-[18px]">
            <div className="name mr-2 h-fit">Baibhav Saikia</div>
            <div className="userName italic text-gray-600 text-[18px] h-fit">@hawk123</div>
          </div>
          <select name="visibility" id="visibility" className="bg-[#000000] h-fit ml-3 rounded-3xl font-medium p-[2px] text-[11px] border-gray-600 border-2 text-blue-60">
            <option value="Everyone">Everyone</option>
            <option value="Followers">Followers</option>
            <option value="Only Me">Only Me</option>
          </select>
        </div>
        
        
      </div>
    </>
  );
};

export default UserInfo;
