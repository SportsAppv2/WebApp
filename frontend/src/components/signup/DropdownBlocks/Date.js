import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupActions } from "../../../store/signupSlice";

const Date = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const dateList = [];
    for (let i = 1; i <= 31; i++) {
      dateList.push(i);
    }
    setDates(dateList);
  }, []);
  return (
    <div className="w-1/4">
      <select
        className="text-white-100 bg-[transparent] border-[1px] border-gray-600 px-2 py-1 w-full"
        onChange={(e) => {
          dispatch(signupActions.dateOfBirthChanged({ date: e.target.value }));
        }}
      >
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Date;
