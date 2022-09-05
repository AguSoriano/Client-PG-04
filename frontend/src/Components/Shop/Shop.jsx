import React from "react"; 
import { useReducer } from"react";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import { ADD_TO_CART } from "../../redux/actions/ActionTypes";
import { getProducts } from "../../redux/actions";
import style from "./Shop.module.css"



function Shop(){
     const dispatch = ReactRedux.useDispatch();
     const products = ReactRedux.useSelector((state) => state.product);

    const cartItems = ReactRedux.useSelector((state) => state.cartproduct);





    return(
        <div className={style.cart}>
            <h2> Tu carrito</h2>
            <h3>PRODUCTOS</h3>
          
         
        
        <button> Limpiar Carrito</button>
       
        </div>
    )
}
 export default Shop;