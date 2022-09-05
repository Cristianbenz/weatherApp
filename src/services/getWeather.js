import { useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

export default function GetWeather() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function onSearch(city) {
    setLoading(true);
    const apiKey = "2da6e283cd50bbbb9f1adb7897591d84";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${apiKey}`;
    axios(API_URL)
      .then( res => res.data)
      .then((data) => {
        if (data.main && !cities.some(el => el.id === data.id)) {
          const NEW_CITY = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          setCities((prevCities) => [...prevCities, NEW_CITY]);
        }
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() =>
        toast.error("No se encontro la ciudad/país", {
          style: { backgroundColor: "black", color: "white" },
          position: "top-right",
        })
      );
  }

  function deleteCity(id) {
    setCities((prevCities) => prevCities.filter((citys) => citys.id !== id));
  }

  function selectCity(id) {
    let city = cities.filter((el) => el.id === parseInt(id));
    if (city.length > 0) return city[0];
    return null;
  }

  return { cities, isLoading, onSearch, deleteCity, selectCity };
}
