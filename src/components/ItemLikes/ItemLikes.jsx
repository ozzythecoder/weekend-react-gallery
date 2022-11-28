import Axios from "axios";
import { useState } from "react";

export default function ItemLikes({imgId, likes, user_liked, getList}) {

  // State variable - whether or not user has liked this photo
  const [ liked, setLike ] = useState(user_liked);

  // Update liked status of image
  const handleLike = () => {

    // Sends id & "liked" status as queries
    const request = `?id=${imgId}&user_liked=${liked}`
    
    Axios.put('/gallery/like/' + request)
      .then(res => {
        console.log('img with id', imgId, 'liked/unliked successfully');
        getList();
        setLike(!liked); // set image as liked/unliked
      })
      .catch(err => {
        console.log('error in axios.put:', err);
      })      

  }

  // Delete request
  const handleDelete = () => {

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

        {/* Like button; conditional rendering to show as liked/unliked */}
        <div
          className={`btn material-symbols-outlined ${liked ? 'clicked': ''}`}
          id="like-btn"
          onClick={handleLike}>
          favorite
        </div>
        
        {/* Like count display; conditional rendering to set plural */}
        <div className="like-count">
          {likes} like{likes !== 1 && 's'}
        </div>
      </div>

      {/* Delete button */}
      <div
        className="btn material-symbols-outlined"
        id="delete-btn"
        onClick={handleDelete}>
          delete
      </div>

    </div>
  )
}