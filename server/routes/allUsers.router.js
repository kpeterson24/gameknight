const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Gets all user for Id + username columns alphabetical ASC/ DESC
router.get('/', (req, res) => {
    // const user = [req.user]
    let queryText = `SELECT "user"."id", "user"."username", "user"."profile_image" FROM "user";`;
    pool.query( queryText ).then(result => 
      res.send(result.rows))
    .catch(error => {
      console.log('error getting all users', error);
      res.sendStatus(500);
    });
  });

module.exports = router;