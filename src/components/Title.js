import React from "react";
import { Link } from "react-router-dom";

//clickable title CityPop
export const Title = () => (
  <div>
    <Link to="/" style={{ color: "black" }}>
      <h1>CityPop</h1>
    </Link>
  </div>
);

export default Title;
