import { Button, Rating } from "@mui/material";
import * as React from "react";
import { contxtname } from "./Context.js";
import Products from "./Products.js";

const stylereview = {
  marginRight: "10px",
  backgroundColor: "red",
  fontWeight: "bolder",
  "&:hover": {
    backgroundColor: "#A40000",
  },
};
const stylecontact = {
  marginLeft: "10px",
  backgroundColor: "#6A8A0A",
  fontWeight: "bolder",
  "&:hover": {
    backgroundColor: "#3B4F00",
  },
};
export default function Home() {
  const contxt = React.useContext(contxtname);
  const category = (ctg) => {
    if (ctg === "All_products") {
      contxt.setCat_Products(contxt.products);
    } else {
      var show = [];
      contxt.products.map((i) => {
        if (i.mainCat === ctg) {
          show = [...show, i];
        }
      });
      console.log(show);
      contxt.setCat_Products(show);
    }
  };
  return (
    <div className="homepage">
      <div className="leftnav">
        <h3>LUCKNOW VEG EXPRESS</h3>
        <Rating name="size-medium" defaultValue={4} />
        <div className="reviewcontct">
          <Button variant="contained" sx={stylereview}>
            Reviews
          </Button>
          <Button variant="contained" sx={stylecontact}>
            Contact
          </Button>
        </div>
        <div className="sidebtns">
          <p
            onClick={() => {
              category("All_products");
            }}
          >
            All Products
          </p>
          <p
            onClick={() => {
              category("Fresh_Fruits");
            }}
          >
            Fresh Fruits
          </p>
          <p
            onClick={() => {
              category("Fresh_Vegetables");
            }}
          >
            Fresh Vegetables
          </p>
          <p
            onClick={() => {
              category("Dry_Fruits");
            }}
          >
            Dry Fruits
          </p>
          <p
            onClick={() => {
              category("Fresh_Non_Veg");
            }}
          >
            Fresh Non-Veg
          </p>
          <p
            onClick={() => {
              category("Dairy_Product");
            }}
          >
            Dairy Products
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
}
