import React from "react";
import { useInView } from "react-intersection-observer";
import './Features.css'

const Features = () => {
  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();
  return (
    <div
      ref={myRef}
      className="flex flex-row justify-evenly items-center p-[450px] bg-slate-600 h-[1000px] relative z-10"
    >
      <p className=''>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        eveniet cum, quidem cumque nisi impedit maxime explicabo, similique
        error repellat consectetur, dignissimos voluptates quod ad officiis
        deleniti expedita quasi omnis id neque mollitia nulla iure quibusdam!
        Vel non dolorum quas minima atque, alias totam modi veniam doloribus
        quis cumque eaque distinctio eligendi in similique. Laborum sapiente
        impedit aperiam repellendus aspernatur aut numquam a sit doloremque
        dolor architecto provident dolore, debitis aliquid inventore eum
        corrupti quisquam rem molestias! Magnam eligendi ducimus quia ut enim.
        Corrupti blanditiis dolorem quidem. Minima eum molestiae iure
        accusantium deserunt error numquam! Dolor commodi quae veniam optio?
        {myElementIsVisible ? "yes" : "no"}
      </p>
      <img className="h-[550px]  " id="slideR" src="./family.jpg" alt="" />
    </div>
  );
};

export default Features;
// my-[200px] mx-[400px]
//` ${myElementIsVisible? slide : ''}`
//{`${myElementIsVisible ? styles.animateRocket : ''}`}