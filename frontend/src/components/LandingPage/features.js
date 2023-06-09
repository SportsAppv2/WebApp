import React from "react";
import frame1 from "../../../src/assets/landing/Frame 12.png";
import frame2 from "../../../src/assets/landing/Frame 14.png";
import frame3 from "../../../src/assets/landing/Frame 15.png";
import frame4 from "../../../src/assets/landing/Frame 16.png";
import SingleFeatureText from "./SingleFeatureText";

const Features = () => {
  return (
    <div className="px-[80px]">
      <div className="feature1 mb-20 flex justify-between items-center  p-5 py-11 px-[50px] ">
        <img src={frame1} alt="img" className="w-1/2 h-[auto]" />
        <SingleFeatureText
          comingSoon={false}
          heading="Create Sports-Related Rooms"
          text="Join or create communities dedicated to your favorite sports, teams, or players. Engage in lively discussions, share news, and connect with like-minded fans."
        />
      </div>
      <div className="feature1 mb-20 flex justify-between items-center p-5">
        <SingleFeatureText
          comingSoon={false}
          heading="Host and Participate in Tournaments"
          text="Step onto the virtual field and compete against fellow sports enthusiasts in thrilling tournaments. Stay up-to-date with live scores, news, and exhilarating match highlights."
        />
        <img src={frame2} alt="img" className="w-1/2 h-[auto]" />
      </div>
      <div className="feature1 mb-20 flex justify-between items-center p-5">
        <img src={frame3} alt="img" className="w-1/2 h-[auto]" />
        <SingleFeatureText
          comingSoon={true}
          heading="Seamlessly Purchase Tickets"
          text="Never miss a moment of your favorite sporting events. Explore and purchase tickets directly through our app, ensuring you have the best seats to witness history in the making."
        />
      </div>
      {/* <div className="feature1 mb-20 flex justify-between items-center p-5">
        <img src={frame3} alt="img" className="w-1/2 h-[auto]" />
        <SingleFeatureText
        comingSoon={true}
          heading="Real-Time News Updates and Scores"
          text="Get instant access to real-time sports news and live scores, keeping you in the heart of the action. Stay connected, stay informed, and never miss a beat on our platform."
        />
      </div> */}
      <div className="feature1 mb-40 flex justify-between items-center p-5">
        <SingleFeatureText
          comingSoon={true}
          heading="Shop the Latest Sports Merchandise"
          text="Gear up like a champion with our curated selection of sports-related items and merchandise. From jerseys and equipment to collectibles and accessories, we've got you covered."
        />
        <img src={frame4} alt="img" className="w-1/2 h-[auto]" />
      </div>
    </div>
  );
};

export default Features;
