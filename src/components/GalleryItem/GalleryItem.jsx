import './GalleryItem.css'

export default function GalleryItem({img}) {

  return (
    <div>
      <div className="gallery-item">
        <img src={img} />
      </div>
    </div>
  )
}