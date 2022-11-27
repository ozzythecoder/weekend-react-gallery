const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// const galleryItems = require('../modules/gallery.data');

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  let id = req.params.id;
  let queryText = `UPDATE react_gallery
    SET user_liked = true, likes = likes + 1
    WHERE id = $1;`

  pool.query(queryText, [id])
    .then(dbRes => {
      console.log('set image to liked with id', id);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('router.put:', err);
      res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM react_gallery ORDER BY id`

  pool.query(queryText)
    .then(dbRes => {
      console.log('got from server!');
      res.send(dbRes.rows)
    })
    .catch(err => {
      console.log('error in router.get:', err);
      res.sendStatus(500)
    })
}); // END GET Route

module.exports = router;