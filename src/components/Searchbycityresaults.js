import React from "react";
import { Title } from "./Title";

//resaults page for search by city
const Searchbycityresaults = props => (
  <div className="Center">
    <div className="Title2">
      <Title />
    </div>
    <div className="Subtitle">
      <header>
        <b>{props.location.state.city}</b>
      </header>
    </div>
    <div className="container2">
      <p>Population:</p>
      <p className="population">{props.location.state.population}</p>
    </div>
  </div>
);

export default Searchbycityresaults;
