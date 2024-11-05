import React from "react";
import { useInView } from "react-intersection-observer";
import "./Features.scss";

const Features = () => {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    threshold: 0,
  });
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({
    threshold: 0,
  });

  return (
    <div className="flex flex-col" id="Working">
      <div className="flex justify-center items-center bg-p7 pt-12 p-4 z-10">
        <h1 className="text-3xl font-semibold mb-10">How does it work?</h1>
      </div>
      <div
        ref={myRef1}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <img
          className={`LR_B h-[55vh] ${myElementIsVisible1 ? "LR_A" : ""} `}
          src="./upgradedCar.png"
          alt=""
        />
        <div className="flex flex-col gap-2 ml-[5vw] ">
          <h1
            className={` font-semibold overflow-hidden RL_B  ${
              myElementIsVisible1 ? "RL_A" : ""
            }`}
          >
            Accident Impact Detection and Response
          </h1>
          <p
            className={`overflow-hidden RL_B  ${
              myElementIsVisible1 ? "RL_A" : ""
            }`}
          >
            Our system's pressure sensor detects accident impact by sensing
            rapid pressure changes, accurately gauging accident intensity. This
            data is rapidly transmitted to an integrated microprocessor,
            functioning as the central processing unit. Here, the microprocessor
            analyzes pressure data to assess accident severity and activate the
            appropriate response measures, ensuring swift and effective actions
            in the event of an accident.
          </p>
        </div>
      </div>
      <div
        ref={myRef2}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <div className="flex flex-col gap-2 ml-[5vw] ">
          <h1
            className={` font-semibold overflow-hidden LR_B  ${
              myElementIsVisible2 ? "LR_A" : ""
            }`}
          >
            Real-Time Data Integration and Storage
          </h1>
          <p
            className={`overflow-hidden LR_B  ${
              myElementIsVisible2 ? "LR_A" : ""
            }`}
          >
            In this system, data from the microprocessor seamlessly integrates
            with GSM and GPS modules. These modules collaboratively transmit
            real-time data to a dedicated web server. The GSM module ensures
            reliable cellular communication, while the GPS module provides
            precise location details. This secure centralized storage enhances
            safety and security by enabling comprehensive data analysis,
            reporting, and remote monitoring.
          </p>
        </div>
        <img
          className={`RL_B h-[55vh] ${myElementIsVisible2 ? "RL_A" : ""} `}
          src="./pic2.png"
          alt=""
        />
      </div>
      <div
        ref={myRef3}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <img
          className={`LR_B h-[55vh] ${myElementIsVisible3 ? "LR_A" : ""} `}
          src="./mobile.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2 ml-[5vw] ">
          <h1
            className={` font-semibold overflow-hidden RL_B  ${
              myElementIsVisible3 ? "RL_A" : ""
            }`}
          >
            Web-Based Safety and Security Management
          </h1>
          <p
            className={`overflow-hidden RL_B  ${
              myElementIsVisible3 ? "RL_A" : ""
            }`}
          >
            The website receives longitude and latitude data from the server and
            displays it on an embedded map. It facilitates accident detection,
            emergency response, theft prevention, recovery, ignition lock, and
            smartphone connectivity, offering users a comprehensive platform for
            safety and security management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

{
  /* <div className="bg-p7 relative z-10">
        <div
          ref={myRef4}
          className={` flex flex-col items-center px-auto py-10 pb-20  BT_B ${
            myElementIsVisible4 ? "BT_A" : ""
          }`}
        >
          <p className={` text-2xl font-semibold `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <div className=" flex flex-row gap-20 mt-10 flex-wrap">
            <div className="h-[15vw] w-[15vw]">
              <img src="./gps(3).png" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="h-[15vw] w-[15vw]">
              <img src="./gps(3).png" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="h-[15vw] w-[15vw]">
              <img src="./gps(3).png" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div> */
}

// const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
//   threshold: 0,
// });
