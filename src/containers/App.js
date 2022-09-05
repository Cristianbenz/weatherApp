import React from "react";
import { Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GetWeather from "../services/getWeather";

import { SideBar } from "../components/SideBar/SideBar";
import CityDetails from "./cityDetails";
import Cards from "../components/Cards/Cards";

import "./App.css";

export default function App() {
  const { cities, isLoading, onSearch, deleteCity, selectCity } = GetWeather()

  return (
    <div className="App">
      <Toaster />
      <SideBar onSearch={onSearch} />
      <Switch>
        <Route exact path={'/'}>
          <Cards cities={cities} 
                 closeFunction={deleteCity} 
                 isLoading={isLoading}
          />
        </Route>
        <Route path={'/ciudad/:cityId'}>
          <CityDetails selectCity={selectCity} />
        </Route>
      </Switch>
    </div>
  );
}
