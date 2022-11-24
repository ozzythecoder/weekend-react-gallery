import { useState } from 'react';
import './GalleryItem.css'

export default function GalleryItem({img}) {

  const [ isHover, setIsHover ] = useState(false)
      
  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  const toggleDescription = () => {
    console.log('in toggleDesc');
  }

  return (
    <div>
      <div className="gallery-item">
        <div className="img-holder">
          <img src={img} 
            onClick={toggleDescription}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            />
        </div>
      </div>
    </div>
  )
}