const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  return knex('coffee').select('*')
  .then((coffees) => {
    res.status(200).json({
      status: 'success',
      data: coffees
    });
  })
  .catch((err) => {
    return next(err);
  });
});

router.get('/:id', (req, res, next) => {
  const coffeeId = parseInt(req.params.id);
  return knex('coffee').where('id', coffeeId).first()
  .then((coffees) => {
    res.status(200).json({
      status: 'success',
      data: coffees
    });
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
