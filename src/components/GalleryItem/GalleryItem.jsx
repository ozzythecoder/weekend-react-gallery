import ItemImage from '../ItemImage/ItemImage';
import ItemLikes from '../ItemLikes/ItemLikes';
import './GalleryItem.css'

export default function GalleryItem({imgId, path, description, likes, user_liked, getList}) {

  return (
    <div className="gallery-item">
      <ItemImage path={path} description={description} />
      <ItemLikes likes={likes} user_liked={user_liked} getList={getList} imgId={imgId} />
    </div>
  )
}