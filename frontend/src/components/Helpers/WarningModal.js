import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";

const WarningModal = (props) => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-20 mt-[150px] text-left">
      <div className="bg-black z-20 mx-auto w-[550px]  bg-[black] text-[22px] py-2 px-3 rounded-xl text-gray-200">
        <div className="heading pb-3 font-medium">{props.heading}</div>
        <div className="line h-[1px] bg-gray-600"></div>
        <div className="message text-[18px] py-3">{props.message}</div>
        <div className="buttons text-[18px] text-right mb-2">
          <button
            className="button1 bg-[transparent] border-2 border-[#b43f3f] text-[#e4a9a9] hover:bg-[#a74d4d] hover:text-[#000] rounded-md py-1 px-5 text-[18px] transition-all"
            onClick={() => {
              dispatch(modalActions.toggleShowWarningModal(false));
            }}
          >
            Cancel
          </button>
          <button
            className="mainBtn bg-[#5D5FEF] bg-opacity-20 hover:bg-opacity-50 border-2 border-blue-100 text-gray-200 rounded-md py-1 px-5 text-[18px] transition-all ml-3"
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
