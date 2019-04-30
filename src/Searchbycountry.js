import React, { Component } from "react";
import Title from "./components/Title";
import Myform from "./components/Myform";
import Populationcountry from "./components/Populationcountry";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";

const API_KEY = "weknowit";
// function formatInput(str) {
//   var pieces = str.split(" ");
//   for (var i = 0; i < pieces.length; i++) {
//     var j = pieces[i].charAt(0).toUpperCase();
//     pieces[i] = j + pieces[i].substr(1).toLowerCase();
//   }
//   return pieces.join("%20");
// }

function formatOutput(str) {
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join(" ");
}

class Searchbycountry extends Component {
  state = {
    country: undefined,
    population: undefined,
    city: undefined,
    error: undefined,
    loading: false
  };

  getPopulation = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const input = e.target.elements.input.value;
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&orderby=population&maxRows=500&style=LONG&lang=eng&username=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);

    if (input === "") {
      //check if input = null
      this.setState({
        population: undefined,
        city: undefined,
        error: "please enter a country...",
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
    } else if (!data.geonames || data.geonames.length === 0) {
      //check if geonames exists
      this.setState({
        population: undefined,
        city: undefined,
        error: "no search found for " + input,
        type: undefined,
        loading: false
      });
    } else if (
      //check if we get a true hit
      formatOutput(input) === data.geonames[0].countryName &&
      data.geonames[0].fclName.split(",")[0] === "country"
    ) {
      let i = 0;
      let j = 0;
      const newData = [undefined, undefined, undefined];
      while (i < 3) {
        if (data.geonames[j].fclName.split(",")[0] === "city") {
          newData[i] = data.geonames[j];
          i++;
        }
        j++;
      }
      this.setState({
        country: data.geonames[0].countryName,
        population: [
          newData[0].population,
          newData[1].population,
          newData[2].population
        ],
        city: [newData[0].name, newData[1].name, newData[2].name],
        error: "",
        type: undefined,
        loading: false
      });
    } else if (
      //check for close call
      data.geonames[0].fclName.split(",")[0] === "country"
    ) {
      this.setState({
        country: undefined,
        population: undefined,
        city: undefined,
        error: "did you mean " + data.geonames[0].countryName,
        loading: false
      });
    } else if (
      //check for close call
      data.geonames[0].fclName.split(",")[0] !== "country" &&
      data.geonames.length > 4
    ) {
      let i = 0;
      while (i < 5) {
        if (
          data.geonames[i].fclName.split(",")[0] &&
          data.geonames[i].fclName.split(",")[0] === "country"
        ) {
          this.setState({
            country: undefined,
            population: undefined,
            city: undefined,
            error: "did you mean " + data.geonames[i].name,
            loading: false
          });
          i++;
        } else {
          this.setState({
            country: undefined,
            population: undefined,
            city: undefined,
            error: "no search found for " + input,
            loading: false
          });
        }
        i++;
      }
    } else {
      this.setState({
        population: undefined,
        city: undefined,
        error: "no match found for " + input,
        type: "",
        loading: false
      });
    }
  };
  //Searchbycountry page
  render() {
    return (
      <div className="Center">
        <div className="Title2">
          <Title />
        </div>
        <div className="Subtitle">
          <header>
            <b>SEARCH BY COUNTRY</b>
          </header>
        </div>
        <div className="container">
          <Myform getPopulation={this.getPopulation} ph="Enter a country" />
        </div>
        <div>
          <div>{this.state.loading && <ReactSpinner />}</div>
          <Populationcountry
            population={this.state.population}
            city={this.state.city}
            error={this.state.error}
            type={this.state.type}
            country={this.state.country}
          />
        </div>
      </div>
    );
  }
}

export default Searchbycountry;
