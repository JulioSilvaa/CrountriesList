/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import { BaseUrl } from '../../Constants/BaseUrl';
import Button from '../Button/Button';
import DataIntable from '../DataIntable/DataInTable';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import styles from './Table.module.css';

function Table() {
  const [countries, setCountries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getCountries = () => {
    setLoading(true);
    axios
      .get(`${BaseUrl}`)
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getCountries();
  }, []);

  // gearador de ID aleatótio
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

  // mapeando os dados para renderizar o componente na tabela
  const renderList =
    newListTheElementWithId &&
    newListTheElementWithId.map((country) => (
      <DataIntable country={country} key={country.id} />
    ));

  // função que exporta a tabela para o Excel
  function exportTable() {
    const table = document.getElementById('exportTable');
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'sheetjs.xlsx');
  }

  if (loading) return <Spinner />;

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
