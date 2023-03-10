import React from "react";

const Review = ({ review }) => {
  const { reviewerName, photoURL, comment } = review;
  return (
    <div className="flex flex-col md:flex-row mb-8">
      <div className="md:w-1/5  pl-4">
        <img
          src={photoURL}
          alt=""
          className="w-16 h-16 rounded-full mx-auto md:mx-0"
        />
      </div>
      <div className="md:w-4/5 pl-4 md:pl-4">
        <h3 className="font-semibold text-lg mb-1">{reviewerName}</h3>
        <p className="text-gray-600">{comment}</p>
      </div>
    </div>
  );
};

export default Review;
