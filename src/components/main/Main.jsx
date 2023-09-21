import React from "react";
import Map from "../Map";

const Main = () => {
  return (
    <div className="bg-blue-300 h-[70vh] relative">
      <div>Map Section</div>
      <div className="m-[10px]">
        <Map></Map>
      </div>
    </div>
  );
};

export default Main;
