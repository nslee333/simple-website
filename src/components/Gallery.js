import bendjs_photo from "../../public/images/bendjs_meeting_photo.webp";
import React from 'react';
import styled from "styled-components";
import {Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledGallery = styled.div`
  
  margin-top: 3rem;
  margin-left: 5rem;
  margin-bottom: 3rem;
  margin-right: 5rem;

  .image-container {
    border-radius: 10px;
    position: relative;
    
    margin-left: auto;
    margin-right: auto;

    aspect-ratio: 1.3 / 1;
    max-height: 600px;
    
    border: 10px solid #fff;

    @media (max-width: 1190px) {
      margin-left: auto;
      margin-right: auto;

    }
  }

  @media (max-width: 1000px) {
    margin-left: .5rem;
    margin-right: .5rem;
  }
`;

export default function Gallery() {

  return (
    <StyledGallery>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{clickable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('Slide change.')}
          style={{
            "--swiper-pagination-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            // "--swiper-pagination-bullet-horizontal-gap": "10px",
            "--swiper-pagination-bottom": "25px",
            "--swiper-navigation-color": "#0",
          }}
        >
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='Bendjs 1' fill priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 2' fill priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container' >
              <Image src={bendjs_photo} alt='bendjs 3' fill priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 4' fill priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 5' fill priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 6' fill priority />
            </div>
          </SwiperSlide>
        </Swiper>
    </StyledGallery>
  );
}