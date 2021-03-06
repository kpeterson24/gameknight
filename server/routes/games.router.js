const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // const id = [req.user.id]
    let queryText = `SELECT * FROM "user"
    JOIN "user_games" ON "user_games"."user_id" = "user"."id"
    JOIN "games" ON "games"."game_id" = "user_games"."game_id";`;
    pool.query(queryText ).then( result => {
        res.send(result.rows);
    }).catch( error => {
        console.log('error getting games', error);
        res.sendStatus(500);
    }); 
});

/**
 * delete route
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('In DELETE game');   
    const game = req.params;
    let queryString = `DELETE FROM "games" WHERE game_id=$1;`
    pool.query( queryString, [game.id]).then( (result) => {
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('error deleting game', error);
        res.sendStatus(500); 
    });
});

/**
 * edit route
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in EDIT game');
    const game = req.body;
    const id = req.params.id;
    console.log(game, id);
    
    const queryString = `UPDATE "games"
    SET "title" = $1, "genre" = $2, "players" = $3, "desc" = $4
    WHERE game_id = $5;`;
    pool.query(queryString, [game.title, game.genre, game.players, game.description, id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error updating game', error);
        res.sendStatus(500);   
    });  
});

module.exports = router;