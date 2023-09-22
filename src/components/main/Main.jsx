import React, { useState } from "react";
import Map from "../utilities/Map";
import GaugeComponent from "react-gauge-component";
import Container from "../container/Container";

const Main = () => {
  const [showPara, setShowPara] = useState(false);
  const [lat, setLat] = useState(20.275327);
  const [log, setLog] = useState(85.776795);
  return (
    <div className="bg-white relative z-20">
      <div className="flex flex-col justify-center items-center">
        <div className=" text-2xl">Map Section</div>
        <div className="m-[15px] p-4 flex flex-row justify-evenly gap-32">
          <div className="h-[60vh] w-[40vw]">
            <img src="accident.png" alt="" />
          </div>
          <div className="flex flex-row gap-[2vw]">
            <div className="  rounded-md flex flex-row justify-center ">
              <div className="block h-[60vh] w-[18vw] rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#FEF2F2]">
                <div className="border-b-2 mx-10 font-bold text-xl border-neutral-100 px-5 py-3 dark:border-gray-300 dark:text-gray-800">
                  Accident Details
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <GaugeComponent
                      arc={{
                        subArcs: [
                          {
                            limit: 20,
                            color: "#5BE12C",
                            showTick: true,
                          },
                          {
                            limit: 40,
                            color: "#F5CD19",
                            showTick: true,
                          },
                          {
                            limit: 60,
                            color: "#F58B19",
                            showTick: true,
                          },
                          {
                            limit: 100,
                            color: "#EA4228",
                            showTick: true,
                          },
                        ],
                      }}
                      value={65}
                      style={{ width: 245 }}
                    />
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-500 dark:text-gray-500">
                      Accident Intensity
                    </h5>
                  </div>

                  <button
                    onClick={() => {
                      setShowPara(true);
                      setLat(20.275327);
                      setLog(85.776795);
                    }}
                    type="button"
                    className=" mt-4 inline-block rounded bg-primary px-3 pb-1 pt-1.5 text-xs font-medium uppercase leading-normal text-gray-800 border-2 border-gray-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Locate
                  </button>
                </div>
                <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-gray-800">
                  <h1 className=" font-semibold text-xl">Address</h1>
                  <p className=" w-56 mx-auto">
                    {showPara
                      ? "Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003"
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className=" shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[60vh] w-[20vw] rounded-md">
              <Map longitude={log} latitude={lat}></Map>
            </div>
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
};

export default Main;
