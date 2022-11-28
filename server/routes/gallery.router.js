const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// POST route
router.post('/', (req, res) => {

  const path = req.body.path;
  const description = req.body.description

  // Set likes to 0 as default
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
}) // END POST route

// PUT Route
router.put('/like/', (req, res) => {

  const id = req.query.id;

  // Set setLike to opposite of current status
  const setLike = (req.query.user_liked === 'true' ? false : true);

  // Add or subtract like count based on the operation being performed
  const likeQuery = (setLike) ? 'likes = likes + 1' : 'likes = likes - 1'

  const queryText =
    `UPDATE react_gallery
    SET user_liked = $1, ${likeQuery}
    WHERE id = $2;`

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
  const queryText = `SELECT * FROM react_gallery ORDER BY id`

  pool.query(queryText)
    .then(dbRes => {
      console.log('got from database');
      res.send(dbRes.rows)
    })
    .catch(err => {
      console.log('router.get:', err);
      res.sendStatus(500)
    })
}); // END GET Route

// DELETE Route
router.delete('/:id', (req, res) => {

  const id = req.params.id;
  const queryText = `DELETE FROM react_gallery WHERE id = $1`

  pool.query(queryText, [id])
    .then(dbRes => {
      console.log('deleted from database');
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('router.delete:', err);
      res.sendStatus(500);
    })
}) // END DELETE route

module.exports = router;