import { StyledGallery } from "../UI/Common";
import bendjs_photo from "../images/bendjs_meeting_photo.webp";

export default function Gallery() {
  return (
    <>
      <StyledGallery>
        <div className='gallery_frame'>
          <img className='gallery_image' src={bendjs_photo} />
        </div>
      </StyledGallery>
    </>
  )
}