import axios from 'axios';
import {

    GET_NAME_PRODUCT,
    GET_PRODUCTS,
    ORDER_ALPHABETICAL

} from "./ActionsTypes";

export function getNameProduct(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`{aca dentro va el path de busqueda por nombre}${name}`)
            return dispatch({
                type: GET_NAME_PRODUCT,
                payload: json.data
            })
        } catch (error) {
            return error;
        }
    }
}

export function getProducts() {
    return async function (dispatch) {
        try {
            let json = await axios.get("path get/products", {

            });

            return dispatch({
                type: GET_PRODUCTS,
                payload: json.data
            })
        } catch (error) {
            return error;
        }
    }
}

export function OrderAlphabetical(payload) {
    try {
        return {
            type: ORDER_ALPHABETICAL,
            payload
        }
    } catch (error) {
        return error
    }
};