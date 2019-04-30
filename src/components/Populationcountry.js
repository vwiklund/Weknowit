import React from "react";
import { Redirect } from "react-router-dom";

//evaluating population resaults for searchbycountry
const Populationcountry = props => (
  <div>
    {props.error && <p className="weather__error">{props.error}</p>}

    <h1>{props.population}</h1>
    {props.population && (
      <Redirect
        to={{
          pathname: "/searchbycountryresaults",
          state: {
            population: props.population,
            city: props.city,
            country: props.country
          }
        }}
      />
    )}
  </div>
);
export default Populationcountry;
