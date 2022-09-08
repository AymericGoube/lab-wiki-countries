import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import country from '../countries.json';

const CountriesList = () => {
  const [stateApp, setStateApp] = useState(country);

  const CodeOfCountry = (props) => {
    console.log(props);
    return stateApp.map((country) => {
      return (
        <Link
          className="list-group-item list-group-item-action"
          to={props.alpha3Code}
        ></Link>
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
