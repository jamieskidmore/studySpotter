"use server";

import { db } from "@/db";

// import { amenities as amenitiesTable } from "@/db/schema/amenities";
// import { reviews as reviewsTable } from "@/db/schema/reviews";
// import { spots as spotsTable } from "@/db/schema/spots";
// import { db } from "@/db/index";
import { sql, eq } from "drizzle-orm";
import { spots as spotsTable } from "@/db/schema/spots";
// import { amenities as amenitiesTable } from "@/db/schema/amenities";

export async function getSpotsBySearchTerm(term: string) {
  const likeQuery = `%${term.toUpperCase()}%`;
  try {
    console.log("in");
    const result = await db
      .select({
        id: spotsTable.id,
        name: spotsTable.name,
        address: spotsTable.address,
        building: spotsTable.building,
        description: spotsTable.description,
        image: spotsTable.image,
      })
      .from(spotsTable)
      .where(sql`UPPER(${spotsTable.name}) LIKE ${likeQuery}`) // Convert content to uppercase
      .all();
    return result;
  } catch {
    return { message: "No spots found" };
  }
}

// export async function getSpotsWithAmenities(
//   searchQuery: string,
//   selectedAmenities: string[]
// ) {
//   let spotsQuery = db
//     .select({
//       id: spotsTable.id,
//       name: spotsTable.name,
//       address: spotsTable.address,
//       building: spotsTable.building,
//       description: spotsTable.description,
//       image: spotsTable.image,
//     })
//     .from(spotsTable);

//   // Filter search query
//   if (searchQuery) {
//     spotsQuery = spotsQuery.where(like(spotsTable.name, `%${searchQuery}%`));
//   }

//   // Execute the spots query
//   const spots = await spotsQuery.all();

//   // Get all amenities for the spots to allow filtering in JavaScript later
//   const amenitiesForSpots = await db
//     .select({
//       spot_id: amenitiesTable.spot_id,
//       amenity: amenitiesTable.amenity,
//     })
//     .from(amenitiesTable)
//     .whereIn(
//       amenitiesTable.spot_id,
//       spots.map((spot) => spot.id)
//     )
//     .all();

//   // Convert the list of amenities into a dictionary for easy lookup
//   const amenitiesLookup = amenitiesForSpots.reduce((lookup, record) => {
//     if (!lookup[record.spot_id]) {
//       lookup[record.spot_id] = [];
//     }
//     lookup[record.spot_id].push(record.amenity);
//     return lookup;
//   }, {});

//   // Filter spots to include only those that have at least one of the searched amenities
//   const filteredSpots = spots.filter((spot) => {
//     const spotAmenities = amenitiesLookup[spot.id] || [];
//     return selectedAmenities.some((amenity) => spotAmenities.includes(amenity));
//   });

//   return filteredSpots;
// }
