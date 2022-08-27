import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

function Spinner() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#a9d88b"
      secondaryColor="#a9d88b"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ 'margin-top': '30rem', 'margin-left': '50%' }}
      wrapperClass=""
    />
  );
}

export default Spinner;
