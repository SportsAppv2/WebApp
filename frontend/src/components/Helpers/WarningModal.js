import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";

const WarningModal = (props) => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-20 mt-[150px] text-left">
      <div className="bg-black z-20 mx-auto w-[550px]  bg-[#1e1e1e] text-[24px] py-2 px-3 rounded-lg text-gray-200">
        <div className="heading pb-3">{props.heading}</div>
        <div className="line h-[1px] bg-gray-100"></div>
        <div className="message text-[18px] py-3">{props.message}</div>
        <div className="buttons text-[18px] text-right mb-2">
          <button
            className="button1 mx-2 hover:bg-gray-20 px-2 py-1 rounded-md"
            onClick={() => {
              dispatch(modalActions.toggleShowWarningModal(false));
            }}
          >
            Cancel
          </button>
          <button
            className="mainBtn bg-blue-100 px-2 py-1 rounded-md shadow-lg mx-2 hover:bg-blue-80"
            onClick={() => {
              dispatch(modalActions.mainBtnClicked(true));
            }}
          >
            {props.mainBtn}
          </button>
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gray-20 -z-10"
        onClick={() => {
          dispatch(modalActions.toggleShowWarningModal(false));
        }}
      ></div>
    </div>
  );
};

export default WarningModal;
