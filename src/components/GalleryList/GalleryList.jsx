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
      .then(res => {
        console.log('got gallery items');
        setContent(res.data);
      })
      .catch(err => {
        console.log('error getting gallery items');
      })
  }

  const galleryItems = content.map(item => {
      return (
        <GalleryItem
          className="flex-child"
          key={item.id}
          path={item.path}
          description={item.description}
          likes={item.likes} />
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