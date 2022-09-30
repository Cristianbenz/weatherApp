import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

import sbs from "./sideBar.module.css";

export function SideBar({ onSearch }) {
  const [show, setShow] = useState(false)
  let date = new Date();
  let formatDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
   setShow(false) 
  }, [onSearch])
  
  

  
  return (
    <>
    <div className={`${sbs.buttonContainer} ${show && sbs.buttonContainer_active}`}>
      <button onClick={() => setShow(!show)} className={`${sbs.button} ${show && sbs.button_active}`}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
    <div className={`${sbs.sidebar} ${show && sbs.sidebar_open}`}>
      <div>
        <Link to={'/'}>
          <img
            className={`${sbs.logo}`}
            src="https://i.ibb.co/5FsqkR4/weather-Logo.png"
            alt="logo"
          />
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
      <span className={sbs.date}>{date.toLocaleString("es", formatDate)}</span>
    </div>
    </>
  );
}
