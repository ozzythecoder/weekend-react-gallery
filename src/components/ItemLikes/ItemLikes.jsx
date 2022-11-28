import Axios from "axios";
import { useState } from "react";

export default function ItemLikes({imgId, likes, user_liked, getList}) {

  const [ liked, setLike ] = useState(user_liked);

  const handleLike = () => {
    console.log('in handleLike with imgId', imgId);

    const request = `?id=${imgId}&user_liked=${liked}`
    
    Axios.put('/gallery/like/' + request)
      .then(res => {
        console.log('liked successfully');
        getList();
        setLike(!liked);
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