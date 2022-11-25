import { useState } from "react";

export default function ItemImage({path, description}) {

  const [ showDescription, setShowDesc ] = useState(false);

  const toggleDescription = () => {
    setShowDesc(!showDescription)
  }

  return (
    <div className="img-holder">
      <img src={path} onClick={toggleDescription} />

      {!showDescription && <div className="show-desc-text">Read More</div>}
      
      {showDescription &&
        <div className="img-description">
          <span id="close-button"
            className="material-symbols-outlined">close</span>
          <span className="description-text">{description}</span>
        </div>
      }
    </div>
  )
}