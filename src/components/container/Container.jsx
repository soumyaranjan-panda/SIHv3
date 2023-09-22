import React from "react";

const Container = () => {
  return (
    <div className=" bg-bGround1 bg-no-repeat bg-cover px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Lorem lorem
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          architecto.
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./p6.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Hela au</h6>
          <p className="mb-3 text-sm text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            placeat facilis? Perspiciatis velit ipsum, fuga fugiat eveniet magni
            aperiam dignissimos, at dolor maxime tempore dolore!
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./p6.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Hela au</h6>
          <p className="mb-3 text-sm text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            sapiente iure molestiae odio totam laboriosam harum quod quisquam
            sunt? Ipsam!
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./p6.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Hela au</h6>
          <p className="mb-3 text-sm text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            laboriosam quo debitis quidem deserunt quae. Quibusdam nostrum
            veniam quisquam quia?
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./p6.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Lorem, ipsum dolor.
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            necessitatibus ratione dignissimos rerum voluptatem non porro quos
            similique deserunt soluta.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
