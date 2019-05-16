const express = require('express');

const router = express.Router();

const knex = require('./knexfile');



router.get('/', (req,res) => {
    res.status(200).json({message: 'you have hit the /lambda endpoint'});
});


module.exports = router;



