import React from 'react';
import NotFoundImg from './404.gif';

const NotFound = () => {
  return (
    <div className='container text-center'>
      <img
        src={NotFoundImg}
        alt='PAge not found'
        style={{ width: '10rem', height: '10rem' }}
      />
      <h1>The page you are looking for does not exist.</h1>
    </div>
  );
};

export default NotFound;
