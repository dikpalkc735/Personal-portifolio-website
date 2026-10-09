import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const consultationRequests = sqliteTable("consultation_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  business: text("business").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  website: text("website").notNull().default(""),
  service: text("service").notNull().default("general"),
  budget: text("budget").notNull().default(""),
  businessDetails: text("business_details").notNull(),
  challenge: text("challenge").notNull().default(""),
  source: text("source").notNull().default("website-contact"),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const newsletterSubscribers = sqliteTable("newsletter_subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("website-newsletter"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
