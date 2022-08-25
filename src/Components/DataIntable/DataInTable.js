/* eslint-disable react/prop-types */
import React from 'react';

function DataIntable({ country }) {
  const { currencies } = country;
  const currenciesKey = Object.keys(currencies);
  const keys = currenciesKey.map((key) => key);

  console.log(keys);

  return (
    <tr>
      <td>{country.name.common}</td>
      <td>{country.capital}</td>
      <td>{country.area}</td>
      <td>{keys}</td>
    </tr>
  );
}

export default DataIntable;
