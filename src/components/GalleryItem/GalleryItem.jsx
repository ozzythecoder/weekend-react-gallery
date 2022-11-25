import { useState } from 'react';
import './GalleryItem.css'

export default function GalleryItem({img}) {

  const [ isHover, setIsHover ] = useState(false);
  const [ showDescription, setShowDesc ] = useState(false);
  const [ liked, setLike ] = useState(false)
      
  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

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
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
        {!showDescription && <div className="show-desc-text">See Description</div>}
        {showDescription &&
          <div className="img-description">
            <span className="close-button">&#x2715;</span>
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