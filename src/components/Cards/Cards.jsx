import React from "react";

import Card from "../Card/Card";

import style from "./cards.module.css";

export default function Cards({ cities, closeFunction, isLoading }) {
  return (
    <>
      {isLoading && <span className={style.loading}>CARGANDO...</span>}
      {cities.length < 1 ? (
        <div className={style.searchCard}>
          <h1>Busca una ciudad o país</h1>
        </div>
      ) : (
        <div className={style.container}>
          {cities.map((city) => (
            <Card
              key={city.id}
              id={city.id}
              max={city.max}
              min={city.min}
              name={city.name}
              weather={city.weather}
              img={city.img}
              onClose={() => closeFunction(city.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
