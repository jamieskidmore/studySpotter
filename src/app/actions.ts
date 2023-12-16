"use server";

import { amenities as amenitiesTable } from "@/db/schema/amenities";
import { reviews as reviewsTable } from "@/db/schema/reviews";
import { spots as spotsTable } from "@/db/schema/spots";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function addSpot(newSpot: any) {
  return await db.insert(spotsTable).values(newSpot).returning();
}

export async function addReview(newReview: any) {
  return await db.insert(reviewsTable).values(newReview).returning();
}

export async function getAllSpots() {
  return db.select().from(spotsTable).all();
}

export async function getSpotById(spotId: number) {
  return db
    .select({
      id: spotsTable.id,
      name: spotsTable.name,
      address: spotsTable.address,
      building: spotsTable.building,
      description: spotsTable.description,
      image: spotsTable.image,
    })
    .from(spotsTable)
    .where(eq(spotsTable.id, spotId))
    .get();
}

export async function getAmenitiesForSpot(spotId: number) {
  try {
    const results = await db
      .select({
        amenity: amenitiesTable.amenity, // select the `amenity` field from `amenities`
      })
      .from(amenitiesTable) // start from the `amenities` table
      .where(eq(amenitiesTable.spot_id, spotId)) // filter for a given `spotId`
      .all();

    return results.map((r) => r.amenity); // return only the list of amenities
  } catch (error) {
    // Handle or throw error
    console.error(error);
    throw error;
  }
}
export async function getReviewsForSpot(spotId: number) {
  return db
    .select({
      id: reviewsTable.id,
      spot_id: reviewsTable.spot_id,
      anonymous: reviewsTable.anonymous,
      author: reviewsTable.authour,
      rating: reviewsTable.rating,
      body: reviewsTable.body,
    })
    .from(reviewsTable)
    .where(eq(reviewsTable.spot_id, spotId))
    .all();
}

type Review = {
  id: number;
  spot_id: number;
  anonymous: boolean;
  author: string;
  rating: number;
  body: string;
};

type Spot = {
  name: string;
  address: string;
  building: string;
  description: string;
  image: string;
  amenities: string[];
}[];

type SpotsWithReviews = {
  id: number;
  name: string;
  address: string;
  building: string;
  description: string;
  image: string;
  amenities: string[];
  reviews: Review[];
}[];
