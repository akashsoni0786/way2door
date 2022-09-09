import React from "react";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
          <RemoveCircleIcon sx={{ color: "red",cursor:'pointer' }}/>
          <p>{props.quan}</p>
          <AddCircleIcon sx={{ color: "green",cursor:'pointer' }} />
        </div>
        <button className="adtocartbtn">Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default ProductBox;
