import Axios from "axios";
import { useState } from "react";

import './PostItemForm.css'

export default function PostItemForm({getList}) {

  // State variables for inputs
  const [ imgUrlIn, setImgUrl ] = useState('')
  const [ imgDescIn, setImgDesc ] = useState('')

  // Handle submit
  const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent form refresh

    // Build object to post
    const postObj = {
      path: imgUrlIn,
      description: imgDescIn
    }

    // Validate inputs
    if (!validateInput(postObj)) return;

    // Post request
    Axios.post('/gallery', postObj)
      .then(res => {
        console.log('posted successfully');
        emptyInputs();
        getList();
      })
      .catch(err => {
        console.error('error adding new post');
        alert('Client error. Please try again later.')
      })
  }

  const validateInput = (postObj) => {

    // Reject input if values are empty
    if (Object.values(postObj).some(e => e == '')) {
      alert('Inputs cannot be empty.')
      return false;
    }

    return true;
  }

  // Empty inputs on submission
  const emptyInputs = () => {
    setImgUrl('');
    setImgDesc('');
  }

  return (
    <div>
      <form>

      {/* Image URL input */}
      <label>
        Image URL
        <input 
        type="text" 
        id="img-url-input" 
        value={imgUrlIn}
        onChange={e => setImgUrl(e.target.value)}
        placeholder="image URL" />
      </label>

      {/* Image description input */}
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

      {/* Submit button */}
      <button
        onClick={handleSubmit}>
          Add Post
        </button>
      </form>

      <div className="divider"></div>
    </div>
  )
}