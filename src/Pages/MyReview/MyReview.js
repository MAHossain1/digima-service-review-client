import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext/UserContext";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setUserReview(data));
  }, [user?.email]);

  const handleDeleteReview = id => {
    const proceed = window.confirm("Are you sure,to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.error("Your review deleted successfully");
            const remaining = userReview.filter(odr => odr._id !== id);
            setUserReview(remaining);
          }
        });
    }
  };

  const handleReviewUpdate = id => {};

  return (
    <div className="my-10">
      <h2 className="text-5xl my-8">
        {" "}
        {userReview.length === 0 ? (
          <>You've no review to shown</>
        ) : (
          <>You've total {userReview.length} Review</>
        )}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service Details</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {userReview.map(review => (
              <ReviewRow
                key={review._id}
                handleDeleteReview={handleDeleteReview}
                handleReviewUpdate={handleReviewUpdate}
                review={review}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
