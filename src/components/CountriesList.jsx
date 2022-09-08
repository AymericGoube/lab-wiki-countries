import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import country from '../countries.json';

const CountriesList = () => {
  const [stateApp, setStateApp] = useState(country);

  const CodeOfCountry = () => {
    return stateApp.map((country) => {
      return (
        <Link
          className="list-group-item list-group-item-action"
          to={country.alpha3Code}
        >
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

export default CountriesList;
