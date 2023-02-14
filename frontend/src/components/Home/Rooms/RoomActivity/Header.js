import React from "react";

const Header = (props) => {
  return (
    <div className="text-white-100 m-4 text-center">
      <div className="text-center text-[28px] font-medium mb-2">
        {props.mainHeader}
      </div>
      <div className="text-[16px] text-gray-600">{props.subHeader}</div>
    </div>
  );
};

export default Header;
