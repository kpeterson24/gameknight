const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('POST Add New Game', req.body);
    const game = req.body;
    let queryString = `INSERT INTO "games" ("title", "genre", "players", "desc")
    VALUES ($1, $2, $3, $4) 
    RETURNING "games"."game_id";`
    let queryString2 = `INSERT INTO "user_games"("game_id", "user_id")
    VALUES($1, $2);`
    pool.query( queryString, [game.title, game.genre, game.players, game.description] ).then((result) => {
        pool.query( queryString2, [result.rows[0].game_id, req.user.id] ).then((result) =>{
            console.log('game added');
            res.sendStatus(201)
        })  
    }).catch( (error) =>{
        console.log('error posting new game', error);
        res.sendStatus(500);
    });
});

module.exports = router;