import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { showClear, clear } = this.props;
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='User Search ...'
          onChange={this.onChange}
          value={this.state.text}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
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
  }
}

export default Search;
