/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import Button from '../Button/Button';
import DataIntable from '../DataIntable/DataInTable';
import styles from './Table.module.css';
import Header from '../Header/Header';

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
    const table = document.getElementById('exportTable');
    const wb = XLSX.utils.table_to_book(table);
    // XLSX.utils.book_append_sheet(wb, 'SheetJS');
    XLSX.writeFile(wb, 'sheetjs.xlsx');

    console.log(wb);
  }

  return (
    <>
      <Button exportTable={exportTable} />
      <Header />
      <table className={styles.Table} id="exportTable">
        <thead>
          <th>Name</th>
          <th>Capital</th>
          <th>Area</th>
          <th>Currencies</th>
        </thead>
        {renderList}
      </table>
    </>
  );
}

export default Table;
