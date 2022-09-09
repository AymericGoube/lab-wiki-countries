import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import country from '../countries.json';
import axios from 'axios';

//   const [stateApp, setStateApp] = useState(country);
const CountryList = () => {
  const [testApp, settestApp] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        settestApp(response.data);
      });
  }, []);

  const CodeOfCountry = () => {
    return testApp.map((country) => {
      return (
        <Link
          key={country.alpha3Code}
          className="list-group-item list-group-item-action"
          to={country.alpha3Code}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`}
          ></img>
          {country.name.common}
        </Link>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            <CodeOfCountry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
