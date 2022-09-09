import * as React from "react";
import Products from "./Products.js";

export default function Home() {
  return (
    <div className="homepage">
      <div className="leftnav">
        <p>Fresh Fruits</p>
        <p>Fresh Vegetables</p>
      </div>
    <Products />
    </div>
  );
}
