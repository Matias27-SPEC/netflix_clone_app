import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./header.module.css";

function Header() {
  const [search, setSearch] = useState(false);
  const [dropDown, setDrop]= useState(false);
  const [scroll, setScroll]=useState(false);

useEffect(()=>{

const scrollHandler= ()=>{
  if (window.scrollY > 50){
setScroll(true)
  }else{
    setScroll(false)
  }
}
window.addEventListener("scroll",scrollHandler)

return () => {
    window.removeEventListener("scroll", scrollHandler);
  };

},[])

  return (
    <>
      <header className={`${styles.header} ${scroll ?styles.blackBg:''}`}  >
        {/* left Section  */}
        <div className={styles.left_section}>
          {/* logo */}
          <div>
            <img src={logo} className={styles.img} />
          </div>

          {/* nav links */}
          <div>
            <nav className={styles.nav}>
              <Link className={styles.nav_link}>TVShow</Link>
              <Link className={styles.nav_link}>Home</Link>
              <Link className={styles.nav_link}>Movies</Link>
              <Link className={styles.nav_link}>New & Popular</Link>
              <Link className={styles.nav_link}>My List</Link>
              <Link className={styles.nav_link}>Browse My Language</Link>
            </nav>
          </div>
        </div>
        {/* Right section */}
        <div className={styles.right_section}>
          <div>
            {/* search button */}
            <button
              className={`${styles.btn} ${styles.search}`}
              onClick={() => setSearch(!search)}
            >
              <div>
                <Search size={20} />
              </div>
              {search && (
                <input
                  type="text"
                  placeholder="Search Moive"
                  className={styles.input}
                ></input>
              )}
            </button>
          </div>
          <div className={styles.notification}>
            {/* notification button */}
            <button className={`${styles.btn} ${styles.notification_btn}`}>
              <Bell size={20} />
            </button>
            <span className={styles.span}>1</span>
          </div>

          <div>
            {/* Profile User */}
            <button
              className={`${styles.btn1}`}
              onClick={() => setDrop(!dropDown)}
            >
              <div className={styles.user}>
                <User size={20} />
              </div>
              <ChevronDown size={20} color="white" />
            </button>

            {dropDown && (
              <div className={styles.drop_Down}>
                <Link className={styles.items}>Account</Link>
                <Link className={styles.items}>Help Center</Link>
                <button className={styles.items}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
