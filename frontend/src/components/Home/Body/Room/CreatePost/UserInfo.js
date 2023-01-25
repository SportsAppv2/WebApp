import React from "react";

const UserInfo = () => {
  return (
    <>
      <div className="flex justify-center mt-3 text-gray-100">
        <div className="w-1/12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85NmzKR3BCRRt0GDJGaKPZkgfzUKDnNoLs_nQ32mfvg&s"
            alt="Profile Pic"
            className="h-[50px] w-[50px] object-contain rounded-full"
          />
        </div>
        <div className="w-11/12 flex items-center ml-2 text-[24px]">
          <div className="name mr-2 h-fit">Baibhav Saikiaa</div>
          <div className="userName italic text-[18px] h-fit">@hawk123</div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
