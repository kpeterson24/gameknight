const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const id = [req.user.id]
    let queryText = `SELECT * FROM "user"
    JOIN "user_games" ON "user_games"."user_id" = "user"."id"
    JOIN "games" ON "games"."game_id" = "user_games"."game_id"
    WHERE "user"."id" = $1;`;
    pool.query(queryText, id ).then( result => {
        res.send(result.rows);
    }).catch( error => {
        console.log('error getting games', error);
        res.sendStatus(500);
    }); 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;