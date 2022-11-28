import Axios from "axios"
import { useEffect, useState } from "react"

import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

export default function GalleryList() {

  useEffect(() => {
    getList();
  }, [])

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

  const galleryItems = content.map(item => {
      return (
        <GalleryItem
          className="flex-child"
          key={item.id}
          imgId={item.id}
          path={item.path}
          description={item.description}
          likes={item.likes}
          user_liked={item.user_liked}
          getList={getList} />
      )
    })

  return (
    <div>
      <div className="gallery-list">
        {galleryItems}
      </div>
    </div>
  )
}