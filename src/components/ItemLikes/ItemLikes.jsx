import Axios from "axios";
import { useState } from "react";

export default function ItemLikes({imgId, likes, getList}) {

  const [ liked, setLike ] = useState(false);

  const handleLike = () => {
    console.log('in handleLike with imgId', imgId);
    
    if (liked) return;

    Axios.put('/gallery/like/' + imgId)
      .then(res => {
        console.log('liked successfully');
        getList();
        setLike(true);
      })
      .catch(err => {
        console.log('error in axios.put:', err);
      })

  }

  return (
    <div className="img-like-display">
        <div
          className={`material-symbols-outlined ${liked && 'clicked'}`}
          id="like-button"
          onClick={handleLike}>
          favorite
        </div>
        <div className="like-count">
          {likes} like{likes !== 1 && 's'}
        </div>
    </div>
  )
}