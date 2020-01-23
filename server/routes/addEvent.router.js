const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('POST Add New Event', req.body);
   
    const event = req.body;
    const host= req.user;
    console.log(host);
    

    let queryString = `INSERT INTO "event_detail" ("title", "date", "location", "desc", "guest_id", "host_id")
    VALUES ($1, $2, $3, $4, $5, $6);`
    pool.query( queryString, [event.title, event.date, event.location, event.description, event.guests, host.id] ).then((result) => {
        console.log('event added');
        res.sendStatus(201)
    
    }).catch( (error) =>{
        console.log('error posting new event', error);
        res.sendStatus(500);
    })
});

module.exports = router;