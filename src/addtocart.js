import React from "react";
import { connect } from "react-redux";
import "./addtocart.css";

function Addtocart({ incrementCounter }) {
  return (
    <div className="add-to-cart">
      <button type="button" onClick={incrementCounter}>
        Add to Cart
      </button>
    </div>
  );
}

const mdtp = (dispatch) => ({
  incrementCounter: () =>
    dispatch({
      type: "SET_COUNT",
    }),
});

export default connect(null, mdtp)(Addtocart);
