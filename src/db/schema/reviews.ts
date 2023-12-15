import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { spots } from "./spots";
export const reviews = sqliteTable("reviews", {
  id: integer("id").notNull().primaryKey(),
  spot_id: text("text_modifiers")
    .notNull()
    .references(() => spots.id),
  anonymous: integer("int_modifiers", { mode: "boolean" }).notNull(),
  authour: text("authour"),
  rating: integer("rating").notNull(),
  body: text("body"),
});
