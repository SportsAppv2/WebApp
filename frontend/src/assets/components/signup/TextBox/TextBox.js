import React from "react";
import { useDispatch } from "react-redux";
import { signupActions } from "../../../store/signupSlice";

const TextBox = (props) => {
  const dispatch = useDispatch();
  const dispatcherName = props.dispatcher;
  return (
    <div className={props.width}>
      <div className={`text-gray-500`}>{props.for}</div>
      <input
        type={props.type}
        className={`w-full text-white-100 bg-[transparent] border-[1px] border-gray-600 px-2 py-1`}
        onChange={(e) => {
          dispatch(signupActions[dispatcherName](e.target.value));
        }}
      />
    </div>
  );
};

export default TextBox;
