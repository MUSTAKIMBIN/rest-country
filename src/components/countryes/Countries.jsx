import React from "react";
import { use } from "react";

const Countries = ({ countryPromise }) => {
  const countryData = use(countryPromise);
  const country = countryData.countries;
  console.log(countryData);

  return <div>This is all for Country {country.length}</div>;
};

export default Countries;
