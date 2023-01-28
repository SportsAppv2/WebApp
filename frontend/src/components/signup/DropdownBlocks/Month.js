import React from "react";
import { useDispatch } from "react-redux";
import { signupActions } from "../../../store/signupSlice";
import "./Dropdown.css";

const Month = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-1/3">
      <select
        name=""
        id=""
        className="text-white-100 bg-[transparent] border-[1px] border-gray-600 px-2 py-1 w-full"
        onChange={(e) => {
          dispatch(signupActions.dateOfBirthChanged({ month: e.target.value }));
        }}
      >
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </div>
  );
};

export default Month;
