import React from "react";
import { Link } from "react-router-dom";
import Computer from "../assets/jessy-smith-computer-unsplash.jpg";
import Mobile from "../assets/pexels-cottonbro-mobile.jpg";

const Home = () => {
  return (
    <div className="h-screen relative">
      <img
        className="h-full w-full object-cover object-center hidden md:block"
        src={Computer}
        alt=""
      />
      <Link to="/desktop">
        <button className="absolute top-1/2 left-1/2 bg-white hidden md:block">
          Click
        </button>
      </Link>

      <img
        className="h-full w-full object-cover md:hidden"
        src={Mobile}
        alt=""
      />

      <Link to="/mobile">
        <button className="absolute top-1/3 left-[40%] bg-white md:hidden">
          Click
        </button>
      </Link>
    </div>
  );
};

export default Home;
