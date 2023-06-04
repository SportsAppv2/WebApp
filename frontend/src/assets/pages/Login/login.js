import React, { useEffect } from "react";
import Body from "../../components/login/body/body";
import Header from "../../components/login/header/header";
import Image1 from "../../assets/img-zlatan.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const data = useSelector((state) => state.login);
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    if (data.authorized) {
      console.log("Should Route to a new page now");
      navigate("/home");
    } else if (data.setupProfile) {
      navigate("/setup");
    }
  }, [data.authorized, data.setupProfile]);
  return (
    <div className="bg-[#1A1C20] h-screen">
      <Body />
    </div>
  );
};

export default Login;
