import { useState } from "react";
import Axios from "axios";

import GalleryList from "../GalleryList/GalleryList";
import PostItemForm from "../PostItemForm/PostItemForm";

export default function GalleryBody() {

  const [ content, setContent ] = useState([]);

  const getList = () => {
    Axios.get('/gallery')
      .then(({data}) => {
        console.log('got gallery items');
        setContent(data);
      })
      .catch(err => {
        console.log('error getting gallery items');
        alert('Problem getting gallery items. Try again later')
      })
  }

  return (
    <div>
      <PostItemForm getList={getList} />
      <GalleryList getList={getList} content={content} />
    </div>
  )
}