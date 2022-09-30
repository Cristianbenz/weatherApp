import React from "react";

import Card from "../Card/Card";

import style from "./cards.module.css";

export default function Cards({ cities, closeFunction, isLoading }) {
  return (
    <>
      {cities.length < 1 ? (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <div className={style.searchCard}>
            <h1>Busca una ciudad o país</h1>
          </div>
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
      {isLoading && (
        <div className={style.loading}>
          <div className='spinner-grow text-light' role="status">
            <span className="visually-hidden" role="status" />
          </div>
        </div>
      )}
    </>
  );
}
