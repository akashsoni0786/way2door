import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { products } from "./data.js";
import ProductBox from "./ProductBox.js";

export default function Products() {
  return (
    <div className="allproducts">
      {products.map((i) => {
        return (
          <ProductBox
            key={i.index}
            img={i.pimage}
            name={i.pname}
            off={(((i.price - i.sellPrice) / i.price) * 100).toFixed(0)}
            weight={i.pUnit}
            cross={i.price}
            real={i.sellPrice}
            quan="1"
          />
        );
      })}
    </div>
  );
}
