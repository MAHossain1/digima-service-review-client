import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "../Review/AddReview";
import Review from "../Review/Review";

const ServiceAndReview = () => {
  const service = useLoaderData();
  const { _id, title, description, img, price } = service;
  const [reviews, setReviews] = useState([]);
  // console.log(reviews.length);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?reviewForService=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [_id]);

  // console.log(service);

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
      <div className="w-full md:w-2/5 bg-base-200 md:h-auto mr-2">
        <h2 className="text-center text-success text-3xl my-4">
          Customers Reviews for this Service: {title}
        </h2>
        {reviews.map(review => (
          <Review key={review._id} review={review}></Review>
        ))}
        <AddReview></AddReview>
      </div>
    </div>
  );
};

export default ServiceAndReview;
