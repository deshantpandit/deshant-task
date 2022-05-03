import React from "react";
import { connect } from "react-redux";

function SearchBar({ filterData }) {
  return (
    <div>
      <input
        className="nav-search"
        type="search"
        placeholder="Search"
        style={{ width: "660px", height: "30px" }}
        onChange={(e) => {
          filterData(e.target.value);
        }}
      />
    </div>
  );
}

const mdtp = (dispatch) => ({
  filterData: (data) => dispatch({ type: "SET_INPUT", payload: data }),
});

export default connect(null, mdtp)(SearchBar);
