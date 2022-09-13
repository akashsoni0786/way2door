import * as React from "react";
import ProductBox from "./ProductBox.js";
import { contxtname } from "./Context.js";
import apicall from "./db.js";
import { v4 as uid } from "uuid";
export default function Products() {
  const contxt = React.useContext(contxtname);
  const [carts, setCart] = React.useState([]);

  const addtocart = (e, y) => {
    let flag = 0;
    if (contxt.addtocartstate.length !== 0) {
      contxt.addtocartstate.map((i, index) => {
        if (i.productId === y) {
          var temp = contxt.addtocartstate;
          temp[index].quantity++;
          contxt.setAddtocartstate([...temp]);
          flag = 1;
        }
      });
    }

    if (flag === 0) {
      contxt.cat_products.map((i) => {
        if (i.id === e) {
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

          contxt.setAddtocartstate([...contxt.addtocartstate, item]);
          contxt.setCartCount(contxt.addtocartstate.length + 1);
          contxt.setCartNames((prevArray) => [...prevArray, i.productId]);
        }
      });
    }
  };
  const increment = (y) => {
    if (contxt.addtocartstate.length !== 0) {
      contxt.addtocartstate.map((i, index) => {
        if (i.productId === y) {
          var temp = contxt.addtocartstate;
          temp[index].quantity++;
          contxt.setAddtocartstate([...temp]);
        }
      });
    }
  };
  const decrement = (y) => {
    if (contxt.addtocartstate.length !== 0) {
      contxt.addtocartstate.map((i, index) => {
        if (i.productId === y) {
          var temp = contxt.addtocartstate;
          var temp2 = contxt.cartNames;
          if (temp[index].quantity == 1) {
            temp.splice(index, 1);
            temp2.splice(index, 1);
          } else {
            temp[index].quantity--;
          }
          contxt.setAddtocartstate([...temp]);
          contxt.cartNames([...temp2]);
        }
      });
    }
  };
  const removefromcart = (e) => {
    contxt.addtocartstate.map((i, index) => {
      if (i.productId === e) {
        var temp = contxt.addtocartstate;
        var temp2 = contxt.cartNames;
        temp.splice(index, 1);
        temp2.splice(index, 1);
        contxt.setCartNames([...temp2]);
        contxt.setAddtocartstate([...temp]);
        contxt.setCartCount(temp.length);
      }
    });
  };

  return (
    <div className="allproducts">
      {contxt.cat_products.map((i) => {
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
            increment={() => {
              increment(i.productId);
            }}
            decrement={() => {
              decrement(i.productId);
            }}
            addtocart={() => {
              addtocart(i.id, i.productId);
            }}
            removefromcart={() => {
              removefromcart(i.productId);
            }}
          />
        );
      })}
    </div>
  );
}
