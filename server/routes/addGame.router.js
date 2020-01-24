const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
    console.log('POST Add New Game', req.body);
    const client = await pool.connect()

    try{
        const game = req.body;
        console.log(req.body);
        
        await client.query('BEGIN')
        const queryString = `INSERT INTO "games" ("title", "genre", "players", "desc")
            VALUES ($1, $2, $3, $4) 
            RETURNING "games"."game_id";`
        const result = await client.query(queryString, [game.title, game.genre, game.players, game.description]);
        const queryString2 = `INSERT INTO "user_games"("game_id", "user_id")
        VALUES($1, $2);`;
        await client.query(queryString2, [result.rows[0].game_id, req.user.id])
            console.log('info into user_games', result.rows[0].game_id)
        // const queryString3 = `INSERT INTO "event_games"("game_id", "user_id")
        // VALUES($1, $2);`;
        // await client.query  (queryString3, [result.rows[0].game_id, req.user.id])  
        await client.query('COMMIT')  
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(error);
        
    } finally {
        client.release()
    }     
});


module.exports = router;