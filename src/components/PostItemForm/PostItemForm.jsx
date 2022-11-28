import Axios from "axios";
import { useState } from "react";

export default function PostItemForm({getList}) {

  const [ imgUrlIn, setImgUrl ] = useState('')
  const [ imgDescIn, setImgDesc ] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const postObj = {
      path: imgUrlIn,
      description: imgDescIn
    }

    if (!validateInput(postObj)) return;

    Axios.post('/gallery', postObj)
      .then(res => {
        console.log('posted successfully');
        getList();
      })
      .catch(err => {
        console.error('error adding new post');
        alert('Client error. Please try again later.')
      })

    console.log('in handlesubmit');
  }

  const validateInput = (postObj) => {
    if (Object.values(postObj).some(e => e == '')) {
      alert('Inputs cannot be empty.')
      return false;
    }
    return true;
  }

  return (
    <div>
      <form>
      <label>
        Image URL
        <input 
        type="text" 
        id="img-url-input" 
        value={imgUrlIn}
        onChange={e => setImgUrl(e.target.value)}
        placeholder="image URL" />
      </label>
      <label>
        Description
        <input
          type="text"
          id="img-description-input" 
          placeholder="image description" 
          value={imgDescIn}
          onChange={e => setImgDesc(e.target.value)}
          maxLength="200" />
      </label>
      <button
        onClick={handleSubmit}>
          Add Post
        </button><br />
        <p>Img url: {imgUrlIn}</p>
        <p>Img desc: {imgDescIn}</p>
      </form>
    </div>
  )
}