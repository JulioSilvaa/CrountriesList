/* eslint-disable react/prop-types */
import React from 'react';

function DataIntable({ country }) {
  const { currencies } = country;

  const currentKeys = [];

  if (currencies) {
    const currenciesKey = Object.keys(currencies).toLocaleString();
    currentKeys.push(currenciesKey);
  } else {
    currentKeys.push('-');
  }

  return (
    <tbody>
      <tr>
        <td>{country.name.common}</td>
        <td>{country.capital}</td>
        <td>{country.area}</td>
        <td>{currentKeys.map((item) => item)}</td>
      </tr>
    </tbody>
  );
}

export default DataIntable;
