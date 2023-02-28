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
  justify-content: center;
  align-items: center;
  
  display: flex;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  margin-right: 1rem;

  .image-container {
    justify-content: space-evenly;
    
    display: flex;
    border-radius: 10px;
    
    height: clamp(100px, 95%, 700px);
    width: auto;
  }

  img {
    justify-content: center;
    display: flex;

    border: 10px solid #fff;
    border-radius: 7px;
    
    width: clamp(100px, 95%, 1000px);
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
              <Image src={bendjs_photo} alt='Bendjs 1'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 2'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container' >
              <Image src={bendjs_photo} alt='bendjs 3'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 4'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 5'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image-container'>
              <Image src={bendjs_photo} alt='bendjs 6'/>
            </div>
          </SwiperSlide>
        </Swiper>
    </StyledGallery>
  );
}