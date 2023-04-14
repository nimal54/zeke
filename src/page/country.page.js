import React from "react";
import CountryDetailsComponent from "../component/country/countryDetails.component";

const CountryPage = (props) => {
  return <CountryDetailsComponent selectedCountry={props.selectedCountry} pathInfo={props.pathInfo} setPathInfo={props.setPathInfo}/>;
};

export default CountryPage;
