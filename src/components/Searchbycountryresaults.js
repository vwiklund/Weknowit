import React from "react";
import { Title } from "./Title";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

//resaults for search by country & redirects to search by city if link is clicked
const Searchbycountryresaults = props => (
  <div className="Center">
    <div className="Title2">
      <Title />
    </div>
    <div className="Subtitle">
      <header>
        <b>{props.location.state.country}</b>
      </header>
    </div>

    <div className="box2 showborder">
      <Link
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[0],
            city: props.location.state.city[0]
          }
        }}
      >
        <Button outline color="black" className="Butt">
          <b>{props.location.state.city[0]}</b>
        </Button>
      </Link>
    </div>

    <div className="box2 showborder">
      <Link
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[1],
            city: props.location.state.city[1]
          }
        }}
      >
        <Button outline color="black" className="Butt">
          <b>{props.location.state.city[1]}</b>
        </Button>
      </Link>
    </div>

    <div className="box2 showborder">
      <Link
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[2],
            city: props.location.state.city[2]
          }
        }}
      >
        <Button outline color="black" className="Butt">
          <b>{props.location.state.city[2]}</b>
        </Button>
      </Link>
    </div>
  </div>
);

export default Searchbycountryresaults;
