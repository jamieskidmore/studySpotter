"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as regularHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import SingleReview from "./single-review";
import { db, Spot as SpotType } from "../app/fakeDb";
import { useEffect, useState } from "react";

type SpotDetailProps = {
  spotId: number;
};

export default function SpotDetail({ spotId }: SpotDetailProps) {
  const [spot, setSpot] = useState<SpotType | null>(null);

  useEffect(() => {
    // Fetch spot details based on spotId
    const spotDetails = db.spots.find((s) => s.id === +spotId);
    setSpot(spotDetails || null);
  }, []);

  if (!spot) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={fasStar}
          className="h-12"
          style={{ color: "#C2BBF0" }}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars}
          icon={fasStar}
          className="h-12"
          style={{ color: "#C2BBF0", opacity: 0.5 }}
        />
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars + (hasHalfStar ? 1 : 0) + i}
          icon={farStar}
          className="h-12"
          style={{ color: "#C2BBF0" }}
        />
      );
    }

    return stars;
  };

  return (
    <main
      className="flex min-h-screen flex-col space-y-4 items-center mt-5 max-w-[400px]"
      style={{ color: "#3590F3" }}
    >
      <Link href="/" className="self-start">
        &#8592; Back
      </Link>
      <h2 className="text-3xl mb-2 font-bold" style={{ color: "#3590F3" }}>
        {spot.name}
      </h2>
      <div className="bg-white w-full rounded-md p-5 space-y-4">
        <div className="grid grid-cols-2 text-2xl">
          <div>
            <p>{spot.address}</p>
            <p>{`${spot.distance} away`}</p>
          </div>
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={regularHeart}
              className="h-12"
              style={{ color: "#C2BBF0" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={spot.photo}
            alt={spot.name}
            width="400"
            height="300"
          ></Image>
        </div>
        <div>
          <p>{spot.description}</p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          {renderStars(spot.rating)}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Reviews</h3>
          {spot.reviews.map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <button
        className="w-full rounded-md text-2xl text-white p-2"
        style={{ backgroundColor: "#C2BBF0" }}
        onClick={() => (window.location.href = "/review")}
      >
        ADD REVIEW
      </button>
    </main>
  );
}
