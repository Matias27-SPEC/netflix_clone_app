import React from 'react'
import Movie from '../Movie/Movie'
import styles from "./slide.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
function SlideShow({title,movies}) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={5}
        navigation
      >
       
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className={styles.slide}>
            <Movie movies={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SlideShow
