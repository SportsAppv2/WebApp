import React from "react";
import frame1 from "../../../src/assets/landing/Frame 12.png";
import frame2 from "../../../src/assets/landing/Frame 14.png";
import SingleFeatureText from "./SingleFeatureText";

const Features = () => {
  return <div className="px-[80px]">
    <div className="feature1 flex items-center p-5 py-11 px-[50px] ">
      <img src={frame1} alt="img" className="w-[600px] h-[300px]"/>
      <SingleFeatureText heading="Create Sports-Related Rooms" text="Join or create communities dedicated to your favorite sports, teams, or players. Engage in lively discussions, share news, and connect with like-minded fans." />
    </div>
    <div className="feature1 flex items-center p-5">
      <SingleFeatureText heading="Host and Participate in Tournaments" text="Step onto the virtual field and compete against fellow sports enthusiasts in thrilling tournaments. Stay up-to-date with live scores, news, and exhilarating match highlights." />
      <img src={frame2} alt="img" className="w-[600px] h-[300px]"/>
    </div>
    <div className="feature1 flex items-center p-5">
      <img src={frame1} alt="img" className="w-[600px] h-[300px]"/>
      <SingleFeatureText heading="Real-Time News Updates and Scores" text="Get instant access to real-time sports news and live scores, keeping you in the heart of the action. Stay connected, stay informed, and never miss a beat on our platform." />
    </div>
    <div className="feature1 flex items-center p-5">
      <SingleFeatureText heading="Shop the Latest Sports Merchandise" text="Gear up like a champion with our curated selection of sports-related items and merchandise. From jerseys and equipment to collectibles and accessories, we've got you covered." />
      <img src={frame1} alt="img" className="w-[600px] h-[300px]"/>
    </div>

  </div>;
};

export default Features;
