const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

//This route GETs each events unique information when signed in, is displayed on the Schedule.
router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM "event" WHERE id=$1;`;
    pool.query(queryText).then(result => {
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