const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('./knexfile').development;
const db = knex(knexConfig);

router.get('/', (req,res) => {
    db('cohorts')
    .then( cohorts => {
        res.status(200).json(cohorts);
    })
    .catch( err => {
        res.status(500).json(err.message);
    })
    // res.status(200).json({message: 'you have hit the /lambda endpoint'});
});

router.get('/:id', (req,res) => {
    db('cohorts')
    .where({id : req.params.id})
    .then( cohort => {
        if (cohort.length) {
            res.status(200).json(cohort);
        } else {
            res.status(404).json({message : `The cohort with id # ${req.params.id} wasn't found...`});
        }
    })
    .catch( err => {
        res.status(500).json(err.message);
    });
});

router.post('/', (req,res) => {
    if (!req.body.cohort) {
        res.status(400).json({message : `cohort key required.`})
    }
    db('cohorts').insert(req.body)
    .then( id => {
        res.status(200).json({message : `cohort with ID # ${id} was added to the database`});
    })
    .catch( err => {
        res.status(500).json(err.message);
    });
});

router.put('/:id', (req,res) => {
    
    db('cohorts')
    .where({id : req.params.id})
    .update(req.body)
    .then( count => {
        if (count) {
            res.status(200).json({message : `${count} ${count === 1 ? 'cohort was' : 'cohorts were'} updated`});
        } else {
            res.status(404).json({message : `cohort with id # ${req.params.id} was not found`});
        }
    })
    .catch( err => {
        res.status(500).json(err.message);
    });
});

router.delete('/:id', (req,res) => {
    db('cohorts')
    .where({id : req.params.id})
    .del()
    .then( count => {
        if (count) {
            res.status(200).json({message : `${count} ${count === 1 ? 'cohort was' : 'cohorts were'} deleted from the database`})
        } else {
            res.status(404).json({message : `cohort with id # ${req.params.id} was not found in the database`})
        }
    })
    .catch( err => {
        res.status(500).json(err.message);
    })
})

module.exports = router;

