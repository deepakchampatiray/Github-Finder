import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{
        display: 'block',
        margin: 'auto',
        width: '160px',
        height: '160px',
      }}
    />
  );
}

export default Spinner;
