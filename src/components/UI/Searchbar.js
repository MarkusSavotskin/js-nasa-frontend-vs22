import React from "react";
import './Searchbar.css';

const Searchbar = (props) => {
  return (
    <div className="Search">
      <h2>Search satellites</h2>
      <div className="Searchbar">
        <input className="SearchbarInput" type="text" placeholder="ex. TS222, SM900"/>
        <button className="Button ButtonSearch"></button>
      </div>

    </div>
  )
}

export default Searchbar;