import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as regularHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import SingleReview from "./single-review";
// import { db, Spot as SpotType } from "../app/fakeDb";
import { db } from "@/db";
import {
  getAmenitiesForSpot,
  getReviewsForSpot,
  getSpotById,
} from "@/app/actions";
import { useEffect, useState } from "react";

type SpotDetailProps = {
  spotId: number;
};

export default async function SpotDetail({ spotId }: SpotDetailProps) {
  // const [spot, setSpot] = useState<any>(null);
  // const [reviews, setReviews] = useState<any>([]);
  // const [amenities, setAmenities] = useState<any>([]);

  const spot = await getSpotById(spotId);
  const reviews = await getReviewsForSpot(spotId);
  const amenities = await getAmenitiesForSpot(spotId);
  console.log(amenities);

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
            <p>0km away</p>
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
            src={
              "https://cdn.discordapp.com/attachments/1156321096572866580/1181237006005710988/img-placeholder.webp?ex=658053b0&is=656ddeb0&hm=b61da144f1213218077ef2a7b791f3be008857804c60db28724c75d0ab482ce7&"
            }
            alt={spot.name}
            width="400"
            height="300"
          ></Image>
        </div>
        <div>
          <p>{spot.description}</p>
        </div>
        {amenities.map((amenity: any, index: any) => (
          <div
            key={index}
            className={
              "flex text-lg items-center space-x-2 bg-blue-500 text-white p-2"
            }
          >
            <span>{amenity}</span>
          </div>
        ))}
        <div className="flex justify-center items-center space-x-1">
          {renderStars(4)}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Reviews</h3>
          {reviews.map((review: any) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <button
        className="w-full rounded-md text-2xl text-white p-2"
        style={{ backgroundColor: "#C2BBF0" }}
      >
        ADD REVIEW
      </button>
    </main>
  );
}
