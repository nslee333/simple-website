import bendjs_photo from "../images/bendjs_meeting_photo.webp";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  .gallery_frame {
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    width: clamp(200px, 100%, 1300px);
  }

  .gallery_image {
    width: clamp(100px, 95%, 1000px);
    height: clamp(100px, 95%, 1300px);
    border-radius: 7px;
  }

  @media (max-width: 550px) {
    margin-top: 1rem;
  }
`;

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