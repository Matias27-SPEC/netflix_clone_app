import React from "react";
import styles from "./movi.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";

function Movie({ movies }) {
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w500"
  const genres = ["Action", "Thriller", " Sci-Fi"];
  return (
    <div className={styles.container}>
      <div>
        {/* img Poster */}
        <img
          src={`${IMAGE_BASE}${movies.poster_path}`}
          className={styles.img_poster}
        />
      </div>
      <div className={styles.card}>
        {/* other info */}
        <img
          src={`${IMAGE_BASE}${movies.poster_path}`}
          className={`${styles.poster}`}
        />
        {/* badge */}
        <span className={styles.badge}>Recently added</span>
        {/* icons */}
        <div className={styles.btn}>
          <div className={styles.left}>
            <FaCirclePlay size={20} color="white" />
            <BsPlusCircle size={20} color="white" />
            <GoCheckCircleFill size={20} color="white" />
          </div>
          <IoIosArrowDropdown size={20} color="white" />
        </div>
        {/* info */}
        <div className={styles.info}>
          <span>U/A 16+</span>
          <span>MOVIE</span>
          <span>HD</span>
        </div>
        <div className={styles.genre_div}>
          {/* genre */}
          {genres.map((genre, index) => {
            return (
              <div key={index}>
                <span>
                  {genre} {index < genres.length - 1 && <span> •</span>}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
