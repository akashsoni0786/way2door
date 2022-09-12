import React from "react";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
const ProductBox = (props) => {
  return (
    <div className="productbox">
      <img
        className="imgcss"
        alt=""
        src={props.img}
      />
      <p className="offer">{props.off}% save</p>
      <p className="proname">{props.name}</p>

      <div className="downpart">
      <div className="pricewtdiv">
        <p className="weight">{props.weight}</p>
        <p className="crossprice">
          <s>{props.cross} Rs</s>
        </p>
        <p className="price">{props.real} Rs</p>
      </div>

      <div className="plusminuscart">
        <div className="quantity">
          <IconButton onClick={props.increment}>
          <RemoveCircleIcon sx={{ color: "red",cursor:'pointer' }}/></IconButton>
          <p>{props.quan}</p>
          <IconButton onClick={props.decrement}>
          <AddCircleIcon sx={{ color: "green",cursor:'pointer' }} /></IconButton>
        </div>
        <button id={props.id} className="adtocartbtn" onClick={props.addtocart}>Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default ProductBox;
