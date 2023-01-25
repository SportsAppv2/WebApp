import React from "react";
import Image from "../../../assets/img-zlatan.png";
import LoginBlock from "../loginBlock/LoginBlock";

const Body = () => {
  return (
    <>
      <section className="body">
        <div className="flex">
          {/* <div className="bodyLeft w-0 hidden bg-red md:block md:w-1/2">
            <div className="imageContainer w-[500px] absolute top-40 right-[48vw] z-10">
              <img src={Image} className="block h-auto w-full" alt="Image" />
            </div>
          </div> */}
          <div className="bodyRight w-screen md:absolute place-content-center h-screen">
            <div className="m-[100px]">
              <LoginBlock />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
