import React from "react";
import img1 from "../../../assests/banner/slider-1.png";
import img2 from "../../../assests/banner/slider-2.png";
import img3 from "../../../assests/banner/slider-3.png";
import img4 from "../../../assests/banner/slider-4.png";

const Banner = () => {
  return (
    <div className="carousel w-full my-20">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} alt="img1" className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={img2} alt="img1" className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={img3} alt="img1" className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} alt="img1" className="w-full  rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
