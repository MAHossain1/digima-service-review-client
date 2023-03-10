import React from "react";

const ReviewRow = ({ review, handleDeleteReview, handleReviewUpdate }) => {
  const {
    reviewForService,
    serviceName,
    reviewerName,
    email,
    photoURL,
    comment,
    _id,
  } = review;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteReview(_id)}
            className="btn btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm">email: {email}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{comment}</td>
      <td>
        <button
          onClick={() => handleReviewUpdate(_id)}
          className="btn btn-outline btn-error"
        >
          Edit Review
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
