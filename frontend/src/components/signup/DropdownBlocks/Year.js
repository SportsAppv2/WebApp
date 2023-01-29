import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupActions } from "../../../store/signupSlice";

const Year = () => {
  const dispatch = useDispatch();
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearList = [];
    for (let i = currentYear; i >= 1900; i--) {
      yearList.push(i);
    }
    setYears(yearList);
  }, []);
  return (
    <div className="w-1/4">
      <select
        className="text-white-100 bg-[transparent] border-[1px] border-gray-600 px-2 py-1 w-full"
        onChange={(e) => {
          dispatch(signupActions.dateOfBirthChanged({ year: e.target.value }));
        }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Year;
