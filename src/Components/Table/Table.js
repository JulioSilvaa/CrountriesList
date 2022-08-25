import axios from 'axios';
import React from 'react';
import DataIntable from '../DataIntable/DataInTable';
import styles from './Table.module.css';

function Table() {
  const [countries, setCountries] = React.useState([]);
  console.log(countries);

  const getCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getCountries();
  }, []);

  function addIdinElement() {
    const id = Math.floor(Date.now() * Math.random()).toString(36);
    return id;
  }

  // criando uma nova lista de itens com ID
  const newListTheElementWithId = [];
  // eslint-disable-next-line no-unreachable-loop, no-plusplus
  for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    const elementWithId = { ...element, id: addIdinElement() };
    newListTheElementWithId.push(elementWithId);
  }

  const renderList =
    newListTheElementWithId &&
    newListTheElementWithId.map((country) => (
      <DataIntable country={country} key={country.id} />
    ));

  return (
    <table className={styles.Table}>
      <thead>
        <th>Name</th>
        <th>Capital</th>
        <th>Area</th>
        <th>Currencies</th>
      </thead>

      <tbody>{renderList}</tbody>
    </table>
  );
}

export default Table;
