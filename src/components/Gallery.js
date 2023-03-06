import React from 'react';
import styled from "styled-components";
import {Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { urlFor } from "../pages";

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


export default function Gallery(images) {
  const imagesObj = images.props[0];
  return (
    <StyledGallery>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{clickable: true}}
          style={{
            "--swiper-pagination-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bottom": "25px",
            "--swiper-navigation-color": "#0",
          }}
        >
          {Object.entries(imagesObj).map(([key, value]) => {
            return (
              <SwiperSlide key={key}>
                <div className='image-container' key={key}>
                  <Image src={urlFor(value).url()} alt={`bendjs ${key}`} key={key} fill sizes="max-height: 600px" priority />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </StyledGallery>
  );
}