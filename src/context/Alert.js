import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
  const [alert, setAlert] = useState(null);

  const updateAlert = (msg) => {
    msg
      ? setAlert({
          msg,
          type: 'danger',
        })
      : setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ alert, setAlert: updateAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
