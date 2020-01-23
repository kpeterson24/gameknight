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
            VALUES ($1, $2, $3, $4, $5);`
        const result = await client.query(queryString, [event.title, event.date, event.location, event.description, host.id])
        console.log('event added')
        res.sendStatus(201) 
        await client.query('COMMIT')
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(error);
        
    } finally {
        client.release()
    }
    // let queryString = `INSERT INTO "event_detail" ("title", "date", "location", "desc", "host_id")
    // VALUES ($1, $2, $3, $4, $5);`
    // pool.query( queryString, [event.title, event.date, event.location, event.description, host.id] ).then((result) => {
    //     console.log('event added');
    //     res.sendStatus(201)
    
    // }).catch( (error) =>{
    //     console.log('error posting new event', error);
    //     res.sendStatus(500);
    // })
});


module.exports = router;