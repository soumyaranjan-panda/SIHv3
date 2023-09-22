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
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    threshold: 0,
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-p7 pt-12 p-4 z-10">
        <h1 className="text-3xl">How does it work?</h1>
      </div>
      <div
        ref={myRef1}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <img
          className={`LR_B h-[55vh] ${myElementIsVisible1 ? "LR_A" : ""} `}
          src="./accident.png"
          alt=""
        />
        <p
          className={`overflow-hidden RL_B ml-[5vw] ${
            myElementIsVisible1 ? "RL_A" : ""
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          eveniet cum, quidem cumque nisi impedit maxime explicabo, similique
          error repellat consectetur, dignissimos voluptates quod ad officiis
          deleniti expedita quasi omnis id neque mollitia nulla iure quibusdam!
          {myElementIsVisible1 ? "yes" : "no"}
        </p>
      </div>
      <div
        ref={myRef2}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <p
          className={`overflow-hidden LR_B ml-[5vw] ${
            myElementIsVisible2 ? "LR_A" : ""
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          eveniet cum, quidem cumque nisi impedit maxime explicabo, similique
          error repellat consectetur, dignissimos voluptates quod ad officiis
          deleniti expedita quasi omnis id neque mollitia nulla iure quibusdam!
          Vel non dolorum quas minima atque, alias totam modi veniam doloribus
          {myElementIsVisible2 ? "yes" : "no"}
        </p>
        <img
          className={`RL_B h-[55vh] ${myElementIsVisible2 ? "RL_A" : ""} `}
          src="./gps(1).png"
          alt=""
        />
      </div>
      <div
        ref={myRef3}
        className="flex flex-row justify-evenly items-center px-[10vw] bg-p7 h-[50vh] relative z-10"
      >
        <img
          className={`LR_B h-[55vh] ${myElementIsVisible3 ? "LR_A" : ""} `}
          src="./gps(3).png"
          alt=""
        />
        <p
          className={` overflow-hidden RL_B ml-[5vw] ${
            myElementIsVisible3 ? "RL_A" : ""
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          eveniet cum, quidem cumque nisi impedit maxime explicabo, similique
          error repellat consectetur, dignissimos voluptates quod ad officiis
          deleniti expedita quasi omnis id neque mollitia nulla iure quibusdam!
          Vel non dolorum quas minima atque, alias totam modi veniam doloribus
          {myElementIsVisible3 ? "yes" : "no"}
        </p>
      </div>
      <div className="bg-p7 relative z-10">
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
      </div>
    </div>
  );
};

export default Features;
