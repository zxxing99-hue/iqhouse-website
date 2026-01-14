CREATE TABLE `successPageConfig` (
	`id` int AUTO_INCREMENT NOT NULL,
	`language` enum('en','zh') NOT NULL DEFAULT 'en',
	`title` varchar(255) NOT NULL,
	`description` text,
	`imageUrl` varchar(512),
	`videoUrl` varchar(512),
	`ctaText` varchar(255),
	`ctaLink` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `successPageConfig_id` PRIMARY KEY(`id`)
);
