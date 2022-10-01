import React from "react";
import banner from "../../Utilities/Landing page image.svg";
import { MdCelebration } from "react-icons/md";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:justify-between">
      <div className="order-2 lg:order-2 flex justify-center">
        <img src={banner} alt="" />
      </div>
      <div className="text-center lg:text-right order-1 lg:order-2">
        <div>
          <h1 className="first-last text-2xl md:text-6xl">Imagine if</h1>
          <h1 className="middle text-2xl md:text-6xl">Snapchat</h1>
          <h1 className="first-last text-2xl md:text-6xl">had events</h1>
        </div>
        <div className="mt-4 mb-8">
          <p className="text-xs md:text-lg">
            Easily host and share events with your friends
          </p>
          <p className="text-xs md:text-lg">across any social media.</p>
        </div>
        <Link to="/create" className="order-3 hidden lg:flex justify-end my-2">
          <button className="btn-css w-full md:w-2/4 py-2 text-center">
            <MdCelebration className="text-yellow-400" />
            Create my event
          </button>
        </Link>
      </div>
      <Link to="/create" className="order-3 lg:hidden flex justify-center my-2">
        <button className="btn-css w-full md:w-2/4 py-2 text-center">
          <MdCelebration className="text-yellow-400" />
          Create my event
        </button>
      </Link>
    </div>
  );
};

export default Home;
