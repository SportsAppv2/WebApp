import React from "react";
import Image from "../../../assets/img-lebron.png";
import SignupBlock from "../SignupBlock/SignupBlock.js";

const Body = () => {
  return (
    <>
      <section className="body">
        <div className="flex">
          {/* <div className="bodyLeft w-0 hidden bg-red md:block md:w-1/2">
            <div className="imageContainer w-[500px] absolute top-40 right-[48vw] z-10">
              <img src="" className="block h-auto w-full" alt="Image" />
            </div>
          </div> */}
          <div className="bodyRight flex items-center w-screen md:absolute h-screen">            
            <SignupBlock />
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
