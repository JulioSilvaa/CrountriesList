import React from 'react';
import Header from './Components/Header/Header';
import styles from './Styles/Table.module.css';

function App() {
  return (
    <>
      <Header />
      <table className={styles.Table}>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Area</th>
          <th>Currencies</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Mexico</td>
        </tr>
      </table>
    </>
  );
}

export default App;
