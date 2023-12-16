import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { spots } from "./spots";
export const reviews = sqliteTable("reviews", {
  id: integer("id").notNull().primaryKey(),
  spot_id: integer("spot_id")
    .notNull()
    .references(() => spots.id),
  anonymous: integer("anonymous", { mode: "boolean" }).notNull(),
  authour: text("authour"),
  rating: integer("rating").notNull(),
  body: text("body"),
});
