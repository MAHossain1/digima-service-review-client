import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext/UserContext";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, description, img, price } = service;

  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const comment = form.comment.value;

    const review = {
      reviewForService: _id,
      serviceName: title,
      reviewerName: name,
      email,
      photoURL,
      comment,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Add Your Review</h2>
      {user?.email ? (
        <form onSubmit={handleAddReview}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered input-accent w-full mb-2 max-w-xs"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-accent w-full mb-2 max-w-xs"
          />
          <br />
          <input
            type="text"
            name="photoURL"
            placeholder="Your photoURL"
            className="input input-bordered input-accent w-full mb-2 max-w-xs"
          />
          <br />
          <textarea
            placeholder="Write your review"
            name="comment"
            className="textarea textarea-bordered textarea-sm w-full mb-2 max-w-xs"
          ></textarea>
          <br />
          <input
            className="mb-6 btn btn-accent btn-outline"
            type="submit"
            value="Post Your Review"
          />
        </form>
      ) : (
        <h3>
          <Link className="text-danger text-xl" to="/login">
            Please Login to Add Your Review
          </Link>
        </h3>
      )}
    </div>
  );
};

export default AddReview;
