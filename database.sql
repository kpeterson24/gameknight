
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

INSERT INTO "event_detail" ("time", "host_id", "location", "desc")
VALUES ('00:00:00', '1', 'Minneapolis', 'Description');

INSERT INTO "games" ("title", "genre", "players", "desc")
VALUES ('Risk', 'Strategy', '6-12', 'Super dope strategy game where you hate your friends.'); 

INSERT INTO "user_games"("game_id", "user_id")
VALUES('1', '2');

SELECT * FROM "user"
LEFT JOIN "user_games" ON "user_games"."user_id" = "user"."id"
LEFT JOIN "games" ON "games"."game_id" = "user_games"."game_id"
WHERE "user"."id" = 2;

INSERT INTO "games" ("title", "genre", "players", "desc")
    VALUES ('1', '2', '3', '4') 
    RETURNING "games"."game_id"
    INSERT INTO "user_games" ("game_id", "user_id")
    VALUES ($1, $2);


	