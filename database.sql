
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "profile_image" VARCHAR(255)
);

CREATE TABLE "games" (
	"game_id" SERIAL PRIMARY KEY,
	"title" VARCHAR (255) NOT NULL,
	"genre" VARCHAR (255) NOT NULL,
	"players" VARCHAR (255) NOT NULL,
	"desc" VARCHAR (255) NOT NULL
);

CREATE TABLE "event_detail" (
	"event_id" SERIAL PRIMARY KEY,
	"date" VARCHAR(255) NOT NULL,
	"time" VARCHAR(255) NOT NULL,
	"host" VARCHAR(255) NOT NULL,
	"location" VARCHAR(255) NOT NULL,
	"guestlist" int,
	"games" INT,
	"desc" VARCHAR(255) NOT NULL,
	"status" BOOLEAN
);

INSERT INTO "user" ("username", "password", "email", "profile_image")
VALUES ('Korey', 'korey', 'korey.t.peterson@gmail.com', 'tbd');

INSERT INTO "games" ("title", "genre", "players", "desc")
VALUES ('Risk', 'Strategy', '6 to 12', 'Risk is a strategy board game of diplomacy, conflict and conquest for two to six players. Players may form and dissolve alliances during the course of the game.');

INSERT INTO "event_detail" ("date", "time", "host", "location", "guestlist", "games", "desc","status")
VALUES ('1/24/2020', '11:00pm', 'Korey', '1234 12th Street, Minneapolis MN, 55403', '8', '4', 'GameKnight will be at my house!', true);
	