-- Create database `react_gallery`

CREATE TABLE react_gallery (
  id SERIAL PRIMARY KEY,
  path VARCHAR(80) NOT NULL,
  description VARCHAR(280) NOT NULL,
  likes INTEGER CHECK (likes >= 0),
  user_liked BOOLEAN DEFAULT FALSE
);

INSERT INTO react_gallery
	(id, path, description, likes)
VALUES
	(1, 'images/bar_small.jpg', 'A warmly lit bar, with many shelves of fine spirits.', 3),
	(2, 'images/beach_small.jpg', 'A beautiful beach, a few hours before sunset.', 10),
	(3, 'images/mountain-goats_small.jpg', 'Three mountain goats at the summit of a large mountain.', 14),
	(4, 'images/parthenon_small.jpg', 'The Greek Parthenon, against a backdrop of a bright blue sky.', 9),
	(5, 'images/soccer_small.jpg', 'A soccer game from the sidelines – the offense is attempting a goal.', 0),
	(6, 'images/winter-city_small.jpg', 'A dense, yet peaceful city block, after a heavy snowfall.', 8);