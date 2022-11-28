const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// POST route
router.post('/', (req, res) => {
  console.log(req.body);
  const path = req.body.path;
  const description = req.body.description

  const queryText = `INSERT INTO react_gallery (path, description, likes)
    VALUES ($1, $2, 0)`

  pool.query(queryText, [path, description])
    .then(dbRes => {
      console.log('POSTed to database');
      res.sendStatus(201);
    })
    .catch(err => {
      console.error('router.post:', err);
      res.sendStatus(500);
    })

})

// PUT Route
router.put('/like/', (req, res) => {

  const id = req.query.id;
  const setLike = (req.query.user_liked === 'true' ? false : true);
  const likeQuery = (setLike) ? 'likes = likes + 1' : 'likes = likes - 1'

  const queryText =
    `UPDATE react_gallery
    SET user_liked = $1, ${likeQuery}
    WHERE id = $2;`

    console.log(queryText);

  pool.query(queryText, [setLike, id])
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