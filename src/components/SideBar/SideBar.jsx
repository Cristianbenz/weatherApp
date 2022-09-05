import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

import sbs from "./sideBar.module.css";

export function SideBar({ onSearch }) {
  let date = new Date();
  let formatDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  
  return (
    <div className={`${sbs.sidebar}`}>
      <div>
        <Link to={'/'}>
          <img
            className={`${sbs.logo}`}
            src="https://i.ibb.co/5FsqkR4/weather-Logo.png"
            alt="logo"
          />
        </Link>
        <SearchBar onSearch={onSearch} />
        <nav>
          <ul>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className={sbs.date}>{date.toLocaleString("es", formatDate)}</span>
    </div>
  );
}
