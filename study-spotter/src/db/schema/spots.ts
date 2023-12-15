import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const spots = sqliteTable("spots", {
  id: integer("id").notNull().primaryKey(),
  name: text("int_modifiers").notNull(),
  address: text("authour").notNull(),
  building: text("rating").notNull(),
  description: text("body"),
  image: text("image"),
  amenities: text("amenities", {
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
