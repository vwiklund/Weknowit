import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Title from "./components/Title";

//home page with clickable links to searchbycity & searchbycountry
export const Home = () => (
  <div className="Center">
    <div className="Title1">
      <Title />
    </div>
    <div className="container">
      <div className="box showborder">
        <Link to="/searchbycity">
          <Button outline color="black" className="Butt">
            <b>SEARCH BY CITY</b>
          </Button>
        </Link>
      </div>
      <div className="box showborder">
        <Link to="/searchbycountry">
          <Button outline color="black" className="Butt">
            <b>SEARCH BY COUNTRY</b>
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
