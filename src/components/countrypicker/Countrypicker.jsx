import React, { useState, useEffect } from "react";
// import axios from 'axios';

const Countrypicker = (props) => {
  const [country, setCountry] = useState([]);

  const getCovidCountriesApi = async () => {
    try {
      const data = await fetch("https://covid19.mathdro.id/api/countries");
      const covCountriesData = await data.json();

      //   console.log(covCountriesData.countries[5].name)
      setCountry(covCountriesData.countries);
      //   console.log(country)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidCountriesApi();
  }, []);

  let url = "https://covid19.mathdro.id/api/countries";
  const handleChange = async (e) => {
    // e.preventDefault();
    if (e.target.value === "Global") {
      props.setIsCountry("");
    } else {
      //  let countryData = await axios.get(`${url}/${e.target.value}`);
      let oneCountry = await fetch(`${url}/${e.target.value}`);
      let countryData = await oneCountry.json();
      props.setConfirm(countryData.confirmed.value);
      props.setDeaths(countryData.deaths.value);
      props.setRecovered(countryData.recovered.value);
      props.setIsCountry(e.target.value);
    }
  };

  return (
    <div className="container">
      <select onChange={handleChange}>
        <option>Global</option>
        {country.map((selectedCountry, i) => {
          return (
            <option key={i} value={selectedCountry.name}>
              {selectedCountry.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Countrypicker;
