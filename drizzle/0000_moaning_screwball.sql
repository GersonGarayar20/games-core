CREATE TABLE `games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`description` text,
	`price` real,
	`release_date` integer,
	`developer` text,
	`publisher` text,
	`created_at` integer DEFAULT '"2024-06-11T17:25:18.396Z"'
);
