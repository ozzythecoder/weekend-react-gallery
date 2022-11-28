import Axios from "axios"
import { useEffect, useState } from "react"

import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

export default function GalleryList({getList, content}) {

  useEffect(() => {
    getList();
  }, [])

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