import { useState } from "react";

export default function ItemImage({path, description}) {

  // State variable to show description
  const [ showDescription, setShowDesc ] = useState(false);

  // Toggle visibility of description
  const toggleDescription = () => {
    setShowDesc(!showDescription)
  }

  return (
    <div className="img-holder">
      
      {/* Post image, and show description on click */}
      <img src={path} onClick={toggleDescription} />

      {/* Show "read more" prompt on hover, if description is not already displayed */}
      {!showDescription && <div className="show-desc-text">Read More</div>}
      
      {/* Show description and close button */}
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