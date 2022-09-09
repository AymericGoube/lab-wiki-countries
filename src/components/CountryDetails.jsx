import React from 'react';
import { Link, useParams } from 'react-router-dom';
import country from '../countries.json';

function loopingOver(countryFiltered) {
  {
    /* console.log(countryFiltered[0].borders); */
  }
  const borders = [];
  for (let i = 0; i < countryFiltered[0].borders.length; i++) {
    borders.push(
      <li key={i}>
        <a href={`http://localhost:3000/${countryFiltered[0].borders[i]}`}>
          {countryFiltered[0].borders[i]}
        </a>
      </li>
    );
  }
  console.log(borders);
  return borders;
}

const CountryDetails = () => {
  const { cca3 } = useParams();
  let countryFiltered = country.filter((nameOfCountry) => {
    return nameOfCountry.alpha3Code === `${cca3}`;
  });
  return (
    <div className="col-7">
      <h1>{countryFiltered[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryFiltered[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryFiltered[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{loopingOver(countryFiltered)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
