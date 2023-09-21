import React from "react";

const T_Cards = ({ ID, name, img, position, desc, github }) => {
  return (
    <div class="mb-12 md:mb-0">
      <div class="mb-6 flex justify-center">
        <a href={github} target="_blank">
          <img
            src={img}
            alt="imgage"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20"
          />
        </a>
      </div>
      <h5 class="mb-2 text-lg font-bold">{name}</h5>
      <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
        {position}
      </h6>

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
  );
};

export default T_Cards;
