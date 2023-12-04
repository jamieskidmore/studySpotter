"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as regularHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Review from "./single-review";
import SingleReview from "./single-review";

export default function SpotDetail() {
  //get spot based on id
  return (
    <main
      className="flex min-h-screen flex-col space-y-4 items-center mt-5 max-w-[400px]"
      style={{ color: "#3590F3" }}
    >
      <Link href="/" className="self-start">
        &#8592; Back
      </Link>
      <h2 className="text-3xl mb-2 font-bold" style={{ color: "#3590F3" }}>
        Spot Name
      </h2>
      <div className="bg-white w-full rounded-md p-5 space-y-4">
        <div className="grid grid-cols-2 text-2xl">
          <div>
            <p>Address</p>
            <p>Distance</p>
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
            src="https://cdn.discordapp.com/attachments/1156321096572866580/1181237006005710988/img-placeholder.webp?ex=658053b0&is=656ddeb0&hm=b61da144f1213218077ef2a7b791f3be008857804c60db28724c75d0ab482ce7&"
            alt="placeholder"
            width="400"
            height="300"
          ></Image>
        </div>
        <div>
          <p>
            Study spots often provide essential amenities to support focused
            work. These may include adjustable tables, comfortable seating,
            power outlets for electronic devices, and good lighting. Access to
            computers, fast Wi-Fi, and other technological resources is also
            beneficial.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <FontAwesomeIcon
            icon={fasStar}
            className="h-12"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={fasStar}
            className="h-12"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={fasStar}
            className="h-12"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={farStar}
            className="h-12"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={farStar}
            className="h-12"
            style={{ color: "#C2BBF0" }}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Reviews</h3>
          <SingleReview></SingleReview>
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
