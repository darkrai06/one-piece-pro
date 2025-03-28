import React from "react";
import "animate.css";

const Slider = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://wallpaperaccess.com/download/one-piece-scenery-1225249"
      className="w-full h-[425px]" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://wallpaperaccess.com/download/one-piece-scenery-6219966"
      className="w-full h-[425px]" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://wallpaperaccess.com/download/one-piece-scenery-8649248"
      className="w-full h-[425px]" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://wallpaperaccess.com/download/one-piece-scenery-8649283"
      className="w-full h-[425px]" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Slider;
