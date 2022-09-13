import * as React from "react";
import ProductBox from "./ProductBox.js";
import { contxtname } from "./Context.js";
import apicall from "./db.js";
import { v4 as uid } from "uuid";
export default function Products() {
  const contxt = React.useContext(contxtname);

  const addtocart = async (y) => {
    let flag = 0;

    if (contxt.addtocartstate.length !== 0) {
      contxt.addtocartstate.map(async (i) => {
        if (i.productId === y) {
          flag = 1;
          let items = {
            id: i.id,
            quantity: i.quantity + 1,
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
      contxt.products.map(async (i) => {
        if (i.productId === y) {
          flag = 1;
          let item = {
            id: uid(),
            quantity: 1,
            storeProductId: i.storeProductId,
            productId: i.productId,
            pname: i.pname,
            pUnit: i.pUnit,
            pimage: i.pimage,
            price: i.price,
            sellPrice: i.sellPrice,
            mainCat: i.mainCat,
          };

          await apicall.post("/addtocart", { ...item });
          let carts = await apicall.get("/addtocart");
          contxt.setAddtocartstate(carts.data);
          contxt.setCartCount(carts.data.length);
        }
      });
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
              addtocart(i.productId);
            }}
            quan="1"
          />
        );
      })}
    </div>
  );
}
