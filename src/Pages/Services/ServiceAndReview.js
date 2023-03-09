import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import bannerImg from "../../assests/banner/slider-4.png";
import Review from "../Review/Review";

const ServiceAndReview = () => {
  const service = useLoaderData();
  const { _id, title, description, img, price } = service;
  const [reviews, setReviews] = useState([]);
  console.log(reviews.length);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  console.log(service);

  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-lg">
      <div className="w-full md:w-3/5 bg-gray-200  md:h-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <img src={img} alt="" />
              <h1 className="text-4xl font-bold">{title}</h1>
              <h3 className="text-2xl font-semibold">Price: ${price}</h3>
              <p className="py-6 text-left">{description}</p>
              <button className="btn btn-success btn-outline">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 bg-base-200 md:h-auto">
        <h2 className="text-center text-3xl my-4">Customers Reviews</h2>
        {reviews.map(review => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
    // <div class="relative">
    //   <img src={bannerImg} alt="Banner" class="w-full h-auto" />
    //   <div class="absolute top-3/4 inset-0 flex justify-center items-center">
    //     <img
    //       src={service.img}
    //       alt="Product "
    //       class="w-1/2 m-3 bg-white border-spacing-2 border-slate-400  h-auto rounded-lg "
    //     />
    //   </div>
    // </div>
  );
};

export default ServiceAndReview;
