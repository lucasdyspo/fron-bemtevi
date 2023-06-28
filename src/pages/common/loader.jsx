import React from "react";
import "./Loader.css";
// import belle from "./94216003_847113199123818_8528177430386045050_n (1).jpg"
import foto from "../imgs/euzin.jpeg";
import load from "../imgs/23563-bird-loading-animation.gif"
import load2 from "../imgs/137164-bkash-logo-loading-animation.gif"
// import load3 from "../imgs/93684-bird-website-loader.gif"
// import load4 from "../imgs/93684-bird-website-loader.gif"
import load3 from "../imgs/eW8p4iV0cE.gif"
import load4 from "../imgs/JG6qhEWfAy.gif"
import load5 from "../imgs/IeBUPuk7D1.gif"



const Loader = () => {
  return (
    <div className="loader-container">
        <img src={load3} width='100' height='100' alt="pip"></img>
        {/* <img src="../imgs/JG6qhEWfAy.mp4"  width='100' height='100'></img> */}
        <img src={load4}  width='100' height='100' alt="pip"></img>
        <img src={load5}  width='100' height='100' alt="pip"></img>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;