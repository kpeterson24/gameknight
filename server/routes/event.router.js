const express = require('express');
const pool = require('../modules/pool');
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */

//This route GETs each events unique information when signed in, is displayed on the Schedule.
router.get('/',  (req, res) => {
    
    
    let queryText = `SELECT "event_detail"."event_id", "event_detail"."host_id", "event_detail"."date", "event_detail"."title", "event_detail"."location", "event_detail"."desc", "user"."id", "user"."username"   FROM "event_detail"
    JOIN "user" ON "event_detail"."host_id" = "user"."id" WHERE "event_detail"."host_id" = $1;`;
    pool.query(queryText, [req.user.id]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting unique user information', error);
        res.sendStatus(500);
    });   
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;