import * as React from "react";
import ProductBox from "./ProductBox.js";
import { contxtname } from "./Context.js";
import apicall from "./db.js";
import { v4 as uid } from "uuid";
export default function Products() {
  const contxt = React.useContext(contxtname);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [productsfiltered, setProductsfiltered] = React.useState([]);
  // const open = Boolean(anchorEl);
  // const [value, setValue] = React.useState([200, 2500]);

  // React.useEffect(() => {
  //   let ar = contxt.products.filter((i) => i.pcategory == contxt.cat_products);
  //   console.log("final" + ar);
  //   setProductsfiltered(ar);
  //   contxt.setCat_Productsarr(ar);
  // }, [contxt.cat_products]);

  // function valuetext(value) {
  //   return value;
  // }

  const addtocart = async (e) => {
    let flag = 0;
    if (contxt.addtocartstate.length !== 0) {
      contxt.addtocartstate.map(async (i) => {
        if (i.productId === e.productId) {
          flag = 1;
          let items = {
            id: uid(),
            quantity: i.quantity+1,
            storeProductId: i.storeProductId,
            productId: i.productId,
            pname: i.pname,
            pUnit: i.pUnit,
            pimage: i.pimage,
            price: i.price,
            sellPrice: i.sellPrice,
            mainCat: i.mainCat,
          };
          try {
            await apicall.put(`/addtocart/${i.id}`, items);
            let addtocart = await apicall.get("/addtocart");
            contxt.setAddtocartstate(addtocart.data);
            contxt.setCartCount(addtocart.data.length);
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
    if (flag === 0) {
      await apicall.post("/addtocart", e);
      let carts = await apicall.get("/addtocart");
      contxt.setAddtocartstate(carts.data);
      contxt.setCartCount(carts.data.length);
    }
  };

  // const detailspage = (e) => {
  //   contxt.setDetailid(e.target.id);
  //   // navigate("/details");
  // };

  // const inc = () => {
  //   let ar1 = [...contxt.products];
  //   ar1.sort((a, b) => a.price - b.price);
  //   setProductsfiltered(ar1);
  // };
  // const dec = () => {
  //   let ar1 = [...contxt.products];
  //   ar1.sort((a, b) => b.price - a.price);
  //   setProductsfiltered(ar1);
  // };

  return (
    <div className="allproducts">
      {contxt.products.map((i) => {
        return (
          <ProductBox
            id={i.productId}
            key={i.index}
            img={i.pimage}
            name={i.pname}
            off={(((i.price - i.sellPrice) / i.price) * 100).toFixed(0)}
            weight={i.pUnit}
            cross={i.price}
            real={i.sellPrice}
            increment={"5"}
            decrement={"dec"}
            addtocart={() => {
              addtocart(i);
            }}
            quan="1"
          />
        );
      })}
    </div>
  );
}
