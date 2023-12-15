"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useState } from "react";

export default function AddReview() {
  const [rating, setRating] = useState(0); // State to track selected star rating

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <main
      className="flex min-h-screen flex-col space-y-4 items-center mt-5 max-w-[400px]"
      style={{ color: "#3590F3" }}
    >
      <Link href="/spot/1" className="self-start">
        &#8592; Back
      </Link>
      <h2 className="text-3xl mb-2 font-bold">Review Spot</h2>
      <form action="" method="post" className="text-2xl space-y-4">
        <div className="bg-white w-full rounded-md p-5 ">
          <div className="space-y-4" style={{ borderColor: "#3590F3" }}>
            <div>
              <label htmlFor="reviewText" className="text-2xl">
                Review Text
              </label>
              <div>
                <textarea
                  id="reviewText"
                  name="reviewText"
                  className="w-full text-white p-2 rounded-md"
                  style={{ backgroundColor: "#8FB8ED" }}
                  required
                />
              </div>
            </div>

            <div className="text-2xl">
              <label htmlFor="starRating">Star Rating</label>
              <div className="flex space-x-1 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={star <= rating ? fasStar : farStar}
                    className="h-12 cursor-pointer"
                    style={{ color: "#C2BBF0" }}
                    onClick={() => handleStarClick(star)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="SUBMIT"
            className="w-full rounded-md text-2xl text-white p-2"
            style={{ backgroundColor: "#C2BBF0" }}
          />
        </div>
      </form>
    </main>
  );
}
