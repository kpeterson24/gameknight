const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        let event = req.body;
        let host= req.user;
        const queryString = `INSERT INTO "event_detail" ("title", "date", "location", "desc", "host_id", "guest_id")
        VALUES ($1, $2, $3, $4, $5, $6);`;
        let result = await client.query( queryString, [event.title, event.date, event.location, event.description, host.id, event.guest_id] )
        console.log('logging', result);
        // const guestId = result.rows[0].guest_id;
        // const eventId = result.rows[0].event_id;
        // for (let i = 0; i < result.rows.length; i++)
        // let queryString2 = `INSERT INTO "event_guests"("guest_id", "event_id")
        // VALUES($1, $2);`;
        // await client.query(queryString2, [guestId, eventId])
        await client.query('COMMIT')
        res.sendStatus(201);
        }

        catch(error) {
            await client.query('ROLLBACK')
            console.log('logging', error);
            res.sendStatus(500)
        }
          
});

module.exports = router;