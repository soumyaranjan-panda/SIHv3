import React from "react";

const Container = () => {
  return (
    <div id="Features" className=" bg-bGround1 bg-no-repeat bg-cover px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            RAKHSAK
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
          Key Features
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our project pioneers two-wheeler road safety, blending tech and
          solutions to enhance security, emergency response, theft prevention,
          and rider experience.
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./t1.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Accident Detection and Emergency Response
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Accident detection alerts authorities, reduces response times, and
            is vital when riders can't call for help.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-blue-900"
          >
            Learn more...
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./t2.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Theft Prevention and Recovery
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            In case of unauthorized access or theft, our system activates
            anti-theft measures, alerts the owner, and provides GPS tracking.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-blue-900"
          >
            Learn more...
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./t3.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Ignition Lock</h6>
          <p className="mb-3 text-sm text-gray-900">
            Intelligent feature confirms owner departure, making post-key
            removal actions invalid access, bolstering security with an
            additional layer.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-blue-900"
          >
            Learn more...
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img
              src="./t4.jpg"
              alt="imgage"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">GPS Tracking</h6>
          <p className="mb-3 text-sm text-gray-900">
            In case of theft, GPS tracking can help locate the stolen bike,
            while anti-theft features such as alarms and immobilizers can deter
            theft attempts.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-blue-900"
          >
            Learn more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
