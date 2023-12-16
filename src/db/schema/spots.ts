import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const spots = sqliteTable("spots", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  building: text("rating").notNull(),
  description: text("body"),
  image: text("image"),
});
