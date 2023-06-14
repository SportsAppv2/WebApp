import React, { useEffect } from "react";
import Header from "../../components/Home/Header/Header";
import Body from "../../components/Home/Body/Body";
import Rooms from "../../components/Home/Rooms/Rooms";
import Room from "../Room/Room";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { fetchNewsArticles } from "../../store/homeSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchNewsArticles());
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex flex-grow h-full bg-[black]">
          <Rooms />
          <Routes>
            <Route
              path="/room/:roomId/*"
              element={<Room />}
              key="route-room-page"
            />
            <Route path="/*" element={<Body />} key="route-body-page" />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
