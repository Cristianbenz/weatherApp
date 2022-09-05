import React, {useState} from "react";
import sbs from './searchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState('')

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

  return (
    <form className={sbs.form} onSubmit={handleSubmit}>
      <input onChange={handleChange} className={`${sbs.input}`} type={"text"} placeholder="🔎 Buscar..." />
      <button className={`${sbs.button}`}>Agregar</button>
    </form>
  );
}