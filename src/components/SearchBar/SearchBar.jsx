import React, {useState} from "react";
import { useLocation } from "react-router-dom";

import sbs from './searchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState('')
  const { pathname } = useLocation()

  function handleChange(e) {
    let inputCity = e.target.value;
    setCity(inputCity)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let input = e.target[0]
    onSearch(city)
    input.value = ''
  }

  if(pathname !== '/') return null

  return (
    <form className={sbs.form} onSubmit={handleSubmit}>
      <input onChange={handleChange} className={`${sbs.input}`} type={"text"} placeholder="🔎 Buscar..." />
      <button className={`${sbs.button}`}>Agregar</button>
    </form>
  );
}