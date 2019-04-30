import React from "react";
import { Redirect } from "react-router-dom";

//evaluating population resaults for searchbycity
const Population = props => (
  <div>
    {props.error && <p className="weather__error">{props.error}</p>}

    {props.population && (
      <Redirect
        to={{
          pathname: "/searchbycityresaults",
          state: { population: props.population, city: props.city }
        }}
      />
    )}
  </div>
);
export default Population;
