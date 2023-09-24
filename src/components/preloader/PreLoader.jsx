import React, { useEffect } from "react";
import { preLoaderAnim } from "../utilities/loader/Splash";

import "./PreLoader.scss";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader z-50">
      <div className="texts-container">
        <span>Smart</span>
        <span>India</span>
        <span>Hackathon</span>
      </div>
    </div>
  );
};

export default PreLoader;
