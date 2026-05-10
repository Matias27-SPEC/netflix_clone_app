import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";
import logo from "../../assets/image/logo.png";
import {Play, Info } from "lucide-react"
import instance from "../../Utility/baseUrl";
import requests from "../../Utility/MovieRequestingUrl";


function Banner() {
const BANNER_BASE= "https://image.tmdb.org/t/p/original/"
const [banner, setBanner] = useState({});
useEffect(()=>{
  const fetchData= async ()=>{
const res = await instance.get(requests.fetchNetflixOriginals);
// console.log(res)
setBanner(res.data.results[Math.floor(Math.random()*res.data.results.length)])
  }
  fetchData();
},[])

// console.log(banner)

function counter (str,n){
return (str?.length > n ? str.substr(0,n-1)+"...":str)
}
  return (
    <div
      className={styles.container}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${banner.backdrop_path}")`,
      }}
    >
      <div className={styles.all_content}>
        {/* logo */}
        <div>
          <img src={logo} className={styles.img} />
        </div>
        {/* title and Description  */}
        <div>
          <h1 className={styles.title}>{banner.original_name}</h1>
          <p className={styles.description}>{counter(banner.overview, 120)}</p>
        </div>
        <div>
          <button className={styles.btn}>
            <Play />
            Play
          </button>
          <button className={styles.btn}>
            {" "}
            <Info />
            My List
          </button>
        </div>
      </div>
      <div className={styles.fade_bottom}></div>
    </div>
  );
}

export default Banner;
