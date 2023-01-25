import React from "react";
import Header from "../../components/Home/Header/Header";
import Body from "../../components/Home/Body/Body";
import Rooms from "../../components/Home/Rooms/Rooms";
import Room from "../Room/Room";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex flex-grow h-full">
          <Rooms />
          <Routes>
            <Route path="/room" element={<Room />} key="route-room-page" />
            <Route path="/*" element={<Body />} key="route-body-page" />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
