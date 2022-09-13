import React from "react";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Button, IconButton } from "@mui/material";
import { contxtname } from "./Context";

const stylereview = {
  marginRight: "10px",

  backgroundColor: "red",
  fontWeight: "bolder",

  "&:hover": {
    backgroundColor: "#A40000",
  },
};
const cart = {
  marginRight: "10px",
  position: "absolute",
  bottom: "10px",
  backgroundColor: "red",
  fontWeight: "bolder",

  "&:hover": {
    backgroundColor: "#A40000",
  },
};
const ProductBox = (props) => {
  const contxt = React.useContext(contxtname);
  return (
    <div className="productbox">
      <img className="imgcss" alt="" src={props.img} />
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
          {contxt.cartNames.includes(props.id) ? (
            <p>
              {contxt.addtocartstate.map((item, index) => {
                if (item.productId == props.id) {
                  return (
                    <div className="plusminuscart2">
                      <div className="quantity">
                        <IconButton onClick={props.decrement}>
                          <RemoveCircleIcon
                            sx={{ color: "red", cursor: "pointer" }}
                          />
                        </IconButton>
                        <p>{item.quantity}</p>

                        <IconButton onClick={props.increment}>
                          <AddCircleIcon
                            sx={{ color: "green", cursor: "pointer" }}
                          />
                        </IconButton>
                      </div>

                      <Button
                        id={props.id}
                        onClick={props.removefromcart}
                        variant="contained"
                        sx={stylereview}
                      >
                        Remove from cart
                      </Button>
                    </div>
                  );
                }
              })}
            </p>
          ) : (
            <Button
              id={props.id}
              onClick={props.addtocart}
              variant="contained"
              sx={cart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
