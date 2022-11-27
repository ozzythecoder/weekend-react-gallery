const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// const galleryItems = require('../modules/gallery.data');

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "react_gallery"`

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