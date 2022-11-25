import ItemImage from '../ItemImage/ItemImage';
import ItemLikes from '../ItemLikes/ItemLikes';
import './GalleryItem.css'

export default function GalleryItem({imgId, path, description, likes, getList}) {

  return (
    <div className="gallery-item">
      <ItemImage path={path} description={description} />
      <ItemLikes likes={likes} getList={getList} imgId={imgId} />
    </div>
  )
}