import React from "react";
import Map from "../Map";

const Main = () => {
  return (
    <div className="bg-blue-300 relative ">
      <div className="flex flex-col justify-center items-center">
        <div>Map Section</div>
        <div className="m-[15px] p-4 flex flex-row justify-evenly gap-32">
          <div className="h-[60vh] w-[40vw] bg-p2 "></div>
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
