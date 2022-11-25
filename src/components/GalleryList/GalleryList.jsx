import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

export default function GalleryList() {

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