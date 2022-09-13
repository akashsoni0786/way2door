import React, { useState } from "react";
import {productsdata} from"./datas.js"
export const contxtname = React.createContext();


export const Context = (props) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [cat_products, setCat_Products] = useState([]);
  const [cat_productsarr, setCat_Productsarr] = useState([]);
  const [orders, setOrders] = useState([]);
  const [detailid, setDetailid] = useState('');
  const [cartcount, setCartCount] = useState(0);
  const [userID, setUserID] = useState('');
  const [addtocartstate, setAddtocartstate] = useState([]);
  const [searchtxtar,setSearchtxtar] = React.useState([]);
  const [cartNames, setCartNames] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [login, setLogin] = useState('');
  React.useEffect(()=>{
    const ax =  ()=>
    {
      try
      {
         setProducts(productsdata);
         setCat_Products(productsdata);
        
      }
      catch(e){
        console.log(e)
      }
    }
   ax();
  },[])

  React.useCallback(()=>{
    setCartCount(addtocartstate.length);
  },[addtocartstate])
  return (
    <contxtname.Provider
      value=
      {{ 
        products: products, 
        setProducts: setProducts,
        cat_products:cat_products,
        setCat_Products: setCat_Products,
        detailid:detailid, 
        setDetailid:setDetailid,
        userID:userID, 
        setUserID:setUserID,
        users:users, 
        setUsers:setUsers,
        orders:orders, 
        setOrders:setOrders,
        addtocartstate:addtocartstate, 
        setAddtocartstate:setAddtocartstate,
        cartcount:cartcount, 
        setCartCount:setCartCount,
        searchtxtar:searchtxtar,
        setSearchtxtar:setSearchtxtar,
        cat_productsarr:cat_productsarr, 
        setCat_Productsarr:setCat_Productsarr,
        cartNames:cartNames, 
        setCartNames:setCartNames,
        userdata:userdata,
        setUserdata: setUserdata,
        login:login, 
        setLogin:setLogin
      }}
    >
      {props.children}
    </contxtname.Provider>
  );
};