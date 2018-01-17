import React from "react";

import styles from './styles.module.css';

const Search = props =>
  <form>
    <div className="form-group">
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control text-center"
        placeholder="Your Emergency"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-block search-btn">
        <i className="fa fa-search" aria-hidden="true"></i> SEARCH
      </button>
    </div>
  </form>;

export default Search;