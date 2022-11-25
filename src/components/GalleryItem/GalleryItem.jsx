import { useState } from 'react';
import './GalleryItem.css'

export default function GalleryItem({img}) {

  const [ isHover, setIsHover ] = useState(false);
  const [ showDescription, setShowDesc ] = useState(false);
      
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

  return (
    <div className="gallery-item">
      <div className="img-holder">
        <img src={img} 
          onClick={toggleDescription}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
        {!showDescription && <div className="show-desc-text">Show Description</div>}
        {showDescription &&
        <div className="img-description">
          <span className="close-button">&#x2715;</span>
          <span className="description-text">Description</span>
        </div>
        }
      </div>
    </div>
  )
}