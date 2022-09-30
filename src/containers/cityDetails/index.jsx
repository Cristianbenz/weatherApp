import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./cityDetails.module.css";

export default function CityDetails({ selectCity }) {
  const { cityId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    let city = selectCity(cityId);
    setDetails(city);
  }, [cityId, selectCity]);

  if(!details) return <div className={styles.notFound}><h1>No se encontro la ciudad</h1></div>

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{details.name}</h1>
      <div className={styles.infoContainer}>
        <div>
          <ul>
            <li>Estado: {details.weather}</li>
            <li>Min: {details.min}º</li>
            <li>Max: {details.max}º</li>
          </ul>
          <ul>
            <li>Nubes: {details.clouds}%</li>
            <li>Viento: {details.wind} m/s</li>
          </ul>
        </div>

        <img
					className={styles.infoImg}
          src={`https://openweathermap.org/img/wn/${details.img}@2x.png`}
          alt="weather icon"
        />
      </div>
    </div>
  );
}
