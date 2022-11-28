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

    Axios.delete('/gallery/' + imgId)
      .then(res => {
        console.log('image deleted successfully');
        getList();
      })
      .catch(err => {
        console.log('error in axios.delete:', err);
        alert('Error deleting post. Try again later.')
      })
  }

  return (
    <div>  
      <div className="img-like-display">
        <div
          className={`btn material-symbols-outlined ${liked && 'clicked'}`}
          id="like-btn"
          onClick={handleLike}>
          favorite
        </div>
        <div className="like-count">
          {likes} like{likes !== 1 && 's'}
        </div>
    </div>
    <div
      className="btn material-symbols-outlined"
      id="delete-btn"
      onClick={handleDelete}>
        delete
    </div>
  </div>
  )
}