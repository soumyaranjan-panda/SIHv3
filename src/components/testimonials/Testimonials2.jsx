import React from "react";
import { useInView } from "react-intersection-observer";
import "./Testimonials.scss";

const Testimonials2 = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div className={` z-10 relative bg-p6 h-full `}>
      <div ref={myRef} class={`testimonials container py-16 mx-auto md:px-6 ${myElementIsVisible ? 'testimonialsA': ''}`}>
        <section class=" pb-16 text-center">
          <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

          <div class="grid gap-x-6 md:grid-cols-6 lg:gap-x-12">
            <div class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Rupali Tripathy</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Leader
              </h6>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="./p2.png"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Sakti</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Hardware
              </h6>
              <p class="mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-0 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Nitish Ranjan Panda</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Hardware
              </h6>
              <p class="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-0 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="./p4.png"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Chinmay</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Hardware
              </h6>
              <p class="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-0 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Swayam</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Software
              </h6>
              <p class="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div class="mb-0">
              <div class="mb-6 flex justify-center">
                <img
                  src="./p6.jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 class="mb-2 text-lg font-bold">Soumyaranjan Panda</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Software
              </h6>
              <p class="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  class="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials2;
