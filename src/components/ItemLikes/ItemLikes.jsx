import Axios from "axios";
import { useState } from "react";

export default function ItemLikes({imgId, likes, user_liked, getList}) {

  const [ liked, setLike ] = useState(user_liked);

  const handleLike = () => {

    const request = `?id=${imgId}&user_liked=${liked}`
    
    Axios.put('/gallery/like/' + request)
      .then(res => {
        console.log('img with id', imgId, 'liked/unliked successfully');
        getList();
        setLike(!liked);
      })
        .catch(err => {
        console.log('error in axios.put:', err);
      })      

  }

  const handleDelete = () => {

    console.log('in deletepost');
  }

  return (
    <div>  
      <div className="img-like-display">
        <div
          className={`btn material-symbols-outlined ${liked && 'clicked'}`}
          id="like-button"
          onClick={handleLike}>
          favorite
        </div>
        <div className="like-count">
          {likes} like{likes !== 1 && 's'}
        </div>
    </div>
        <div
          className="btn material-symbols-outlined"
          id="delete-button"
          onClick={handleDelete}>
            delete
        </div>
  </div>
  )
}