import React from "react"; 
import { useReducer } from"react";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import { ADD_TO_CART } from "../../redux/actions/ActionTypes";
import CartItem from "./CartItem";


function Shop(){
     const dispatch = ReactRedux.useDispatch();
    // const products = ReactRedux.useSelector((state) => state.product);

    const cartItems = ReactRedux.useSelector((state) => state.cartproduct);


    // useEffect((id) => {
    //     dispatch(ADD_TO_CART(id));
    //   }, [dispatch]);

    const deleteFromCart=()=>{

    }
    const clearCart=()=>{

    }
    


    return(
        <div>
            <h2> Carrito de compras</h2>
            <h3>PRODUCTOS</h3>
            <h3> carrito</h3>
         
        
        <button> Limpiar Carrito</button>
        {cartItems && cartItems.length ?
  <CartItem product={cartItems} deleteFromCart={deleteFromCart}/> :
  <spam> Tu carrito esta vacio </spam>

}
        </div>
    )
}
 export default Shop;