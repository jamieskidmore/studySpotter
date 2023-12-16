import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { spots } from "./spots";

export const amenities = sqliteTable("amenities", {
  id: integer("id").notNull().primaryKey(),
  spot_id: integer("spot_id")
    .notNull()
    .references(() => spots.id),
  amenity: text("amenity", {
    enum: [
      "Adjustable tables",
      "Computers",
      "Fast Wifi",
      "Power outlets",
      "Seat comfort",
      "Temperature Control",
      "Water fountain",
      "Bathrooms",
      "Couches",
      "Natural Lighting",
      "Restaurants",
      "Security",
      "Vending machine",
      "Wheelchair access",
    ],
  }),
});
