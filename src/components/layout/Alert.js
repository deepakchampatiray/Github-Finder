import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AlertContext } from '../../context/Alert';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-exclamation'></i>
        &nbsp;{alert.msg}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
