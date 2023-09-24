import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Testimonials.scss";
import T_Cards from "../utilities/T_Cards";

const Testimonials3 = () => {
  const [profiles, setProfiles] = useState([]);
  async function fetchTestimonialData() {
    const data = await require("../../data.json");
    setProfiles(data);
  }
  useEffect(() => {
    fetchTestimonialData();
  }, []);
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div id="Testimonials" className={` z-20 relative bg-p6 h-full `}>
      <div
        ref={myRef}
        class={`testimonials container py-16 mx-auto md:px-6 ${
          myElementIsVisible ? "testimonialsA" : ""
        }`}
      >
        <section class=" pb-16 text-center">
          <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

          <div class="grid gap-x-6 md:grid-cols-6 lg:gap-x-12">
            {profiles.map((profile)=>(
                <T_Cards key={profile.ID} name={profile.name} img={profile.img} position={profile.position} desc={profile.description} github={profile.github}></T_Cards>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials3;
