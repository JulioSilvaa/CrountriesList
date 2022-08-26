/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import Button from '../Button/Button';
import DataIntable from '../DataIntable/DataInTable';
import styles from './Table.module.css';

function Table() {
  const [countries, setCountries] = React.useState([]);

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

  function exportTable() {
    const ws = XLSX.utils.aoa_to_sheet(Array(renderList));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    XLSX.writeFile(wb, 'sheetjs.xlsx');
  }

  return (
    <>
      <Button exportTable={exportTable} />
      <table className={styles.Table} id="import-table">
        <thead>
          <th>Name</th>
          <th>Capital</th>
          <th>Area</th>
          <th>Currencies</th>
        </thead>

        <tbody>{renderList}</tbody>
      </table>
    </>
  );
}

export default Table;
