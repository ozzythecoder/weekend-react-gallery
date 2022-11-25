import { useState } from 'react';
import './GalleryItem.css'

export default function GalleryItem({img}) {

  const [ showDescription, setShowDesc ] = useState(false);
  const [ liked, setLike ] = useState(false);

  const toggleDescription = () => {
    setShowDesc(!showDescription)
    console.log('in toggleDesc');
  }

  const handleLike = () => {
    setLike(!liked)
  }

  return (
    <div className="gallery-item">
      <div className="img-holder">
        <img src={img} 
          onClick={toggleDescription}
          />
        {!showDescription && <div className="show-desc-text">See Description</div>}
        {showDescription &&
          <div className="img-description">
            <span id="close-button"
              className="material-symbols-outlined">close</span>
            <span className="description-text">Description</span>
          </div>
        }
      </div>
      <div className="img-like-display">
        <div
          className={`material-symbols-outlined ${liked ? 'clicked' : ''}`}
          id="like-button"
          onClick={handleLike}>
          favorite
        </div>
        <div>
          10 likes
        </div>
      </div>
    </div>
  )
}