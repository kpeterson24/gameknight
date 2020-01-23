const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
    console.log('POST Add New Event', req.body);
    const client = await pool.connect()

    try{
        const event = req.body;
        const host= req.user;  
        await client.query('BEGIN')
        const queryString = `INSERT INTO "event_detail" ("title", "date", "location", "desc", "host_id")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING "event_id";`
        const result = await client.query(queryString, [event.title, event.date, event.location, event.description, host.id]);
        const queryString2 = `INSERT INTO "event_guests"("guest_id", "event_id" )
        VALUES($1, $2);`;
            for (let i=0; i < req.body.guests.length; i++) {
                console.log('this is guests', req.body.guests[i]);
                await client.query(queryString2, [req.body.guests[i], result.rows[0].event_id])
            }
            console.log('event added', result.rows[0].event_id)
        await client.query('COMMIT')
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(error);
        
    } finally {
        client.release()
    }
});


module.exports = router;