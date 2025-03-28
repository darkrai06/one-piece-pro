import React from "react";
import Slider from "./Slider";
import Experience from "./Experience";
import { Helmet } from "react-helmet-async";
import AnimatedComponent from "./AnimatedComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home |Forest</title>
      </Helmet>
      <Slider></Slider>
      <AnimatedComponent></AnimatedComponent>
      <Experience></Experience>
      <div className="text-center w-5/6 mt-10 mb-10 mx-auto border rounded-lg p-6">
        <h1 className="text-5xl uppercase">Top Stories</h1>
        <div className="mb-10 mt-5">
        <ol className="list-decimal list-inside">
    <li>
      🌊 **Set sail on an epic voyage across the Grand Line!**  
      Explore three legendary islands where ancient secrets, buried treasures, and mythical creatures await the bravest of pirates!
    </li>
    <li>
      🏴‍☠️ **Mysteries of Laugh Tale – The Ultimate Destination!**  
      As you journey deeper into the New World, the final island calls. Will you uncover the legendary One Piece, or be lost to history like the many before you?
    </li>
  </ol>
        </div>
        <button className="btn btn-primary">More Story</button>
      </div>
      
    </div>
  );
};

export default Home;
