import Axios from "axios";
import { useState } from "react";

export default function PostItemForm() {

  const [ imgUrlIn, setImgUrl ] = useState('')
  const [ imgDescIn, setImgDesc ] = useState('')

  const handleSubmit = () => {
    console.log('in handlesubmit');
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