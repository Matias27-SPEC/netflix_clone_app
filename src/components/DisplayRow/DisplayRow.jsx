import React, { useEffect, useState } from "react";
// import {movies} from "../../Data/Data"
import SlideShow from "../SlideShow/SlideShow";
import styles from "./display.module.css";
import instance from "../../Utility/baseUrl";
import requests from "../../Utility/MovieRequestingUrl";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    orginals: [],
    topRated: [],
    action: [],
    horror: [],
    romance: [],
    doc: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingRes, orginalsRes, topRatedRes, actionRes, horrorRes, romanceRes, docRes] =
          await Promise.all([
            instance.get(requests.fetchTrending),
            instance.get(requests.fetchNetflixOriginals),
            instance.get(requests.fetchTopRatedMovies),
            instance.get(requests.fetchActionMovies),
            instance.get(requests.fetchHorrorMovies),
            instance.get(requests.fetchRomanceMovies),
            instance.get(requests.fetchDocumentaries),
          ]);

        setMovies({
          trending: trendingRes.data.results,
          orginals: orginalsRes.data.results,
          topRated: topRatedRes.data.results,
          action: actionRes.data.results,
          horror: horrorRes.data.results,
          romance: romanceRes.data.results,
          doc: docRes.data.results,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.orginals} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
    </div>
  );
}

export default DisplayRow;
