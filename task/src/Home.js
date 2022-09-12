import { Button, Rating } from "@mui/material";
import * as React from "react";
import { contxtname } from "./Context.js";
import Products from "./Products.js";

const stylereview ={
  marginRight:"10px",
  backgroundColor:"red",
  fontWeight:"bolder",
  "&:hover":{
    backgroundColor:"#A40000",
  }
}
const stylecontact={
  marginLeft:"10px",
  backgroundColor:"#6A8A0A",
  fontWeight:"bolder",
  "&:hover":{
    backgroundColor:"#3B4F00",
  }
}
export default function Home() {
  const contxt = React.useContext(contxtname);
  return (
    <div className="homepage">
      <div className="leftnav">
        <h3>LUCKNOW VEG EXPRESS</h3>
        <Rating name="size-medium" defaultValue={4} />
        <div className="reviewcontct">
          <Button variant="contained" sx={stylereview}>Reviews</Button>
          <Button variant="contained" sx={stylecontact}>Contact</Button>
        </div>
        <div className="sidebtns">
          <p>Fresh Fruits</p>
          <p>Fresh Vegetables</p>
          <p>Dry Fruits</p>
          <p>Fresh Non-Veg</p>
          <p>Dairy Products</p>
        </div>
      </div>
      <Products />
    </div>
  );
}
