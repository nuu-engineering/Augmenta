import * as React from 'react';
import Portal from '../utils/Portal';

const Search = (props) => {
  const {search, setSearch} = props;

  return (
    <Portal id='email-form' className='form-2'>
      <input
        type="text"
        id="quicksearch"
        name="Search"
        placeholder="Search"
        maxLength="256"
        className="quicksearch w-input"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <img
        src="https://assets.website-files.com/5dd812af90cfcda2eda79f47/5e1cbd34e7232bbf1b56bda2_searc_Icon_normal.svg"
        width="20"
        alt=""
        className="search-bar-icon"
      />
      <img
        src="https://assets.website-files.com/5dd812af90cfcda2eda79f47/5e1cbd348fdd2eb00d32f6a8_Search_Icon_Active.svg"
        data-w-id="b8f9da28-4934-4674-a048-6dd70c49a0fa"
        style={{ display: 'none' }}
        alt=""
        className="search-bar-icon"
      />
    </Portal>
  );
}

export default Search;