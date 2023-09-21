import React from "react";
import Map from "../utilities/Map";

const Main = () => {
  return (
    <div className="bg-white relative z-20">
      <div className="flex flex-col justify-center items-center">
        <div className=" text-2xl">Map Section</div>
        <div className="m-[15px] p-4 flex flex-row justify-evenly gap-32">
          <div className="h-[60vh] w-[40vw]">
            <img src="accident.png" alt="" />
          </div>
          <div className="flex flex-row gap-5">
            <div className="h-[60vh] w-[20vw] rounded-md bg-p1 flex flex-row justify-center">
              <h1>dfdfd</h1>
            </div>
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
