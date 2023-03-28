import React from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { urlFor } from "../pages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledGallery = styled.div`
  .aspect {
    aspect-ratio: 1.3 / 1;
  }
`;

export default function Gallery(images) {
  const imagesArr = images.props;
  return (
    <div className="my-10 flex justify-center ">
      <div
        className="border-white-200
                    rounded-md
                    border-8
                    xs:w-[20rem]
                    sm:w-[30rem]
                    md:w-[40rem]
                    lg:w-[50rem]"
      >
        <StyledGallery>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bottom": "25px",
              "--swiper-navigation-color": "#0",
            }}
          >
            {imagesArr ? (
              imagesArr.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="aspect" key={index}>
                      <Image
                        className=""
                        src={urlFor(imagesArr[index].image).url()}
                        alt={`bendjs ${index}`}
                        key={index}
                        fill
                        priority
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div></div>
            )}
          </Swiper>
        </StyledGallery>
      </div>
    </div>
  );
}
