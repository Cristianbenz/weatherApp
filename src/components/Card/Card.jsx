import React from 'react';
import { Link } from 'react-router-dom';

import cs from './card.module.css'

export default function Card({id, min, max, name, weather, img, onClose}) {
  let state = '';

  switch(weather) {
    case 'Drizzle':
      state = cs.drizzle;
      break;
    case 'Clouds':
      state = cs.cloud;
      break;
    default:
      state = cs.sunny
  }

  name = name.length > 17 ? `${name.substring(0, 17)}...` : name

  return (
  <div className={`${cs.card} ${state} `}>
    <button className={`danger ${cs.card_button}`} onClick={onClose}>X</button>
    <h2 className={`${cs.card_h2}`}>{name}</h2>
    <Link className={cs.link} to={`ciudad/${id}`}>
      <ul className={`${cs.card_info}`}>
        <li>
          <h4>Min</h4>
          <span className={`${cs.info_temp}`}>{min}º</span>
        </li>
        <li>
          <h4>Max</h4>
          <span className={`${cs.info_temp}`}>{max}º</span>
        </li>
        <li>
        <img className={`${cs.info_icon}`} src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
        </li>
      </ul>
    </Link>
    
    
  </div>);
}
