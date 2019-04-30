import React, { Component } from "react";
import Title from "./components/Title";
import Myform from "./components/Myform";
import Population from "./components/Population";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";

const API_KEY = "weknowit"; //ApiKey for url

function formatInput(str) {
  // format input to capitalize first letter and insert %20 instead of blank space to use in api call
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join("%20");
}

function formatOutput(str) {
  // format input to capilatize first letter
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join(" ");
}

class Searchbycity extends Component {
  //state declaration
  state = {
    population: undefined,
    city: undefined,
    error: undefined,
    loading: false
  };

  getPopulation = async e => {
    // getPopulation function with Api Call
    e.preventDefault();
    this.setState({
      loading: true
    });
    const input = e.target.elements.input.value;
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&maxRows=2&username=${API_KEY}`
    );

    const data = await api_call.json(); //format to .json()
    console.log(data);
    const formattedSearchInput = formatInput(input);
    const formattedOutput = formatOutput(input);

    if (input === "") {
      //check if input = null
      console.log(data);
      this.setState({
        population: undefined,
        city: undefined,
        error: "please enter a city...",
        loading: false
      });
    } else if (!data.geonames) {
      //check if geonames exists
      this.setState({
        population: undefined,
        city: undefined,
        error: "Could not fetch data from server, please try again later ",
        type: undefined,
        loading: false
      });
    } else if (data.geonames.length === 0) {
      //check if geonames exists
      this.setState({
        population: undefined,
        city: undefined,
        error: "No search resault found for " + formattedOutput,
        loading: false
      });
    } else if (
      //check if we get a true hit
      formattedSearchInput === data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "city"
    ) {
      console.log(data);
      this.setState({
        population: data.geonames[0].population,
        city: data.geonames[0].name,
        error: "",
        loading: false
      });
    } else if (
      //check if input = country
      formattedOutput === data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "country"
    ) {
      console.log(data);
      this.setState({
        population: undefined,
        city: undefined,
        error:
          formattedOutput +
          " is a country try out our search by country function",
        loading: false
      });
    } else if (
      //check if we get a close call
      input !== data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "city"
    ) {
      console.log(data);
      this.setState({
        population: undefined,
        city: undefined,
        error: "did you mean: " + data.geonames[0].name + "?",
        loading: false
      });
    } else {
      //please try again
      console.log(data.geonames[0].name + " " + formattedOutput);

      this.setState({
        error: "No search resault found for " + formattedOutput
      });
    }
  };
  //render the page searchbycity
  render() {
    return (
      <div className="Center">
        <div className="Title2">
          <Title />
        </div>
        <div className="Subtitle">
          <header>
            <b>SEARCH BY CITY</b>
          </header>
        </div>
        <div className="container">
          <Myform getPopulation={this.getPopulation} ph="Enter a city" />
        </div>
        <div>
          <div>{this.state.loading && <ReactSpinner />}</div>
          <Population
            population={this.state.population}
            city={this.state.city}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default Searchbycity;
