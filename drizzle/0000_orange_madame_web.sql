CREATE TABLE `consultation_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`business` text NOT NULL,
	`email` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`website` text DEFAULT '' NOT NULL,
	`service` text DEFAULT 'general' NOT NULL,
	`budget` text DEFAULT '' NOT NULL,
	`business_details` text NOT NULL,
	`challenge` text DEFAULT '' NOT NULL,
	`source` text DEFAULT 'website-contact' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
