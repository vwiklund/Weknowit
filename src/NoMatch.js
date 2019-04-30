import React from "react";
import Title from "./components/Title";

//if no path found render this page
export const NoMatch = () => (
  <div className="Center">
    <div className="Title2">
      <Title />
    </div>
    <div className="Subtitle">
      <header>
        <b>NO PATH FOUND</b>
      </header>
    </div>
  </div>
);
