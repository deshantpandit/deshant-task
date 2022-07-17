import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

function Cart({ counterValue }) {
  return (
    <div>
      <ShoppingCartIcon />
      {counterValue}
      <>HelloWorld</>
    </div>
  );
}

const mstp = (state) => ({
  counterValue: state.count,
});

export default connect(mstp)(Cart);
