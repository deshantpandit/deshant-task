import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";
import { fetchDataApi } from "./Redux/action";

function Home({ data, getData }) {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => {
        getData(result);
      });
  }, []);
  console.log(data + "sdbhsabd" + getData);
  return (
    <div className="category-container">
      {data.map((category) => (
        <Link className="category-logo" to={`/product/${category}`}>
          <img
            //src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsirv.com%2Fhelp%2Farticles%2Fcustomized-error-images%2F&psig=AOvVaw252UwEW8ZRcji1xNn3nclm&ust=1651602006710000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDUjoy3wfcCFQAAAAAdAAAAABAD'
            alt=""
            width="70"
            height="50"
          />
          <p>{category}</p>
        </Link>
      ))}
    </div>
  );
}

const mstp = (state) => ({
  data: state.data,
});

const mdtp = (dispatch) => ({
  getData: (data) => dispatch({ type: "SET_DATA", payload: data }),
});

export default connect(mstp, mdtp)(Home);
