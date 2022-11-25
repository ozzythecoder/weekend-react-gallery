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
          img={item.path}
          description={item.description}
          likes={item.likes} />
      )
    })

  return (
    <div>
      <div className="gallery-list">
        <GalleryItem className="flex-child" img="./images/bar_small.jpg" />
        <GalleryItem className="flex-child" img="./images/beach_small.jpg" />
        <GalleryItem className="flex-child" img="./images/parthenon_small.jpg" />
        <GalleryItem className="flex-child" img="./images/winter-city_small.jpg" />
        <GalleryItem className="flex-child" img="./images/soccer_small.jpg" />
        <GalleryItem className="flex-child" img="./images/mountain-goats_small.jpg" />
      </div>
    </div>
  )
}