import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Product.css";

function Product({ product, getData, inputText }) {
  const { category } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        getData(result);
      });
  }, [category]);
  const filteredList = (list) => {
    if (Array.isArray(list)) {
      return list.filter(function (item) {
        return item.title.toLowerCase().includes(inputText.toLowerCase());
      });
    } else {
      return [];
    }
  };
  const list = filteredList(product);
  return (
    <div className="product">
      {list?.map((item) => (
        <Link
          className="product-item"
          key={item.id}
          to={`/product-details/${item.id}`}
        >
          <img src={item.image} alt="product" />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

const mstp = (state) => ({
  product: state.product,
  inputText: state.inputText,
});

const mdtp = (dispatch) => ({
  getData: (data) => dispatch({ type: "SET_PRODUCT", payload: data }),
});

export default connect(mstp, mdtp)(Product);
