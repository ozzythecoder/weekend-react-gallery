import './GalleryItem.css'

export default function GalleryItem({img}) {

  const toggleDescription = () => {
    console.log('in toggleDesc');
  }

  return (
    <div>
      <div className="gallery-item">
        <img src={img} 
          onClick={toggleDescription}
        />
      </div>
    </div>
  )
}