/* eslint-disable react/prop-types */
import React from 'react';
import style from './Button.module.css';

function Button({ exportTable }) {
  return (
    <button onClick={() => exportTable()} className={style.btn} type="button">
      Export to Excel
    </button>
  );
}

export default Button;
