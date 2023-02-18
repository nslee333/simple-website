import bendjs_photo from "../images/bendjs_meeting_photo.webp";
import styled from "styled-components";

const StyledGallery = styled.div`
  justify-content: center;
  display: flex;

  margin-top: 5rem;

  .gallery {
    justify-content: center;
    align-items: center;

    display: flex;

    border-radius: 7px;
    width: clamp(200px, 100%, 1300px);

    background-color: #ffffff;
  }

  .gallery__image {
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
        <div className='gallery'>
          <img className='gallery__image' src={bendjs_photo} />
        </div>
      </StyledGallery>
    </>
  )
}