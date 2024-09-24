import { pgTable,serial } from "drizzle-orm/pg-core";
import { Schema } from "zod";
export const bids = pgTable("bb_bids", {
id: serial("id").primaryKey(),
});
