"use server";

import React, { useState, useEffect } from "react";
import SpotPreview from "./spot-preview";
import { getSpotsBySearchTerm } from "./actions";
import { getAllSpots, getAmenitiesForSpot } from "@/app/actions";
import { AnyARecord } from "dns";
import Link from "next/link";

export default async function ResultsList({
  searchTerm,
  amenities,
}: {
  searchTerm: string;
  amenities: any;
}) {
  let spots;
  if (searchTerm) {
    spots = await getSpotsBySearchTerm(searchTerm);
  } else {
    spots = await getAllSpots();
  }

  if ("message" in spots) {
    console.error(spots.message);
    return;
  }

  //   if (requiredAmenities.length <= 0) {
  //     setFinalResults(spots || []);
  //     return;
  //   }

  let filteredSpots: any = [];

  if (amenities) {
    for (let spot of spots) {
      let spotAmenities = await getAmenitiesForSpot(spot.id);
      let matches = spotAmenities.some((amenity) =>
        amenities.includes(amenity)
      );

      if (matches) {
        filteredSpots.push(spot);
      }
    }
  }

  let finalResult;

  if (!amenities) {
    finalResult = spots;
  } else {
    finalResult = filteredSpots;
  }

  if (finalResult.length === 0) {
    return (
      <div style={{ color: "#3590F3" }}>
        <Link href="/" className="self-start">
          &#8592; Back
        </Link>
        <p>No matching spots found.</p>
      </div>
    );
  }

  return (
    <>
      <Link style={{ color: "#3590F3" }} href="/" className="self-start">
        &#8592; Back
      </Link>
      <div className="space-y">
        {finalResult.map((spot: any) => (
          <SpotPreview key={spot.id} spot={spot} />
        ))}
      </div>
    </>
  );
}
