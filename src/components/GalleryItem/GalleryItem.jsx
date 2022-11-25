import { useState } from 'react';

import ItemLikes from '../ItemLikes/ItemLikes';
import './GalleryItem.css'

export default function GalleryItem({imgId, path, description, likes, getList}) {

  const [ showDescription, setShowDesc ] = useState(false);

  const toggleDescription = () => {
    setShowDesc(!showDescription)
  }

  return (
    <div className="gallery-item">
      <div className="img-holder">
        <img src={path} 
          onClick={toggleDescription}
          />
        {!showDescription && <div className="show-desc-text">See Description</div>}
        {showDescription &&
          <div className="img-description">
            <span id="close-button"
              className="material-symbols-outlined">close</span>
            <span className="description-text">{description}</span>
          </div>
        }
      </div>
      <ItemLikes likes={likes} getList={getList} imgId={imgId} />
    </div>
  )
}