import React, { useContext, useState } from 'react';
import { AlertContext } from '../../context/Alert';
import { GithubContext } from '../../context/Github';

const Search = () => {
  let [text, setText] = useState('');
  const { searchUser, showClear, clear } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setAlert('Please enter a search value.');
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }
    searchUser(text);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        name='text'
        placeholder='User Search ...'
        onChange={onChange}
        value={text}
      />
      <input type='submit' value='Search' className='btn btn-dark btn-block' />
      {showClear && (
        <input
          type='reset'
          value='Clear'
          className='btn btn-danger btn-block'
          onClick={clear}
        />
      )}
    </form>
  );
};

// Search.propTypes = {
//   searchUser: PropTypes.func.isRequired,
//   clear: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
// };

export default Search;
