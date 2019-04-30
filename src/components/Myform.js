import React from "react";
import { Button } from "reactstrap";
import { IoMdSearch } from "react-icons/io";

//Myform used in searchbycity and searchbycountry
const Myform = props => (
  <div className="container">
    <form className="Center" onSubmit={props.getPopulation}>
      <input
        className="input"
        type="text"
        name="input"
        placeholder={props.ph}
      />
      <div className="Center">
        <Button outline color="black">
          <b>
            <IoMdSearch />
          </b>
        </Button>
      </div>
    </form>
  </div>
);
export default Myform;
