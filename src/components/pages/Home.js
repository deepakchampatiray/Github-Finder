import React from 'react';
import { AlertProvider } from '../../context/Alert';
import Alert from '../layout/Alert';
import Search from '../users/Search';
import Users from '../users/Users';

function Home() {
  return (
    <div className='container'>
      <AlertProvider>
        <Alert />
        <Search />
      </AlertProvider>
      <Users />
    </div>
  );
}

export default Home;
