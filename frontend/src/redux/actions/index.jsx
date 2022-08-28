import axios from "axios";
import {
    GET_NAME_PRODUCT,
    GET_PRODUCTS,
    ORDER_ALPHABETICAL,
    ORDER_PRICE,
    GET_PRODUCT_BY_CATEGORY,
    GET_CATEGORIES
} from "./ActionTypes";
import { GET_DETAIL } from "./ActionTypes";
import { products } from "../../DB/db";

export function getNameProduct(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get(
                `{aca dentro va el path de busqueda por nombre}${name}`
            );
            return dispatch({
                type: GET_NAME_PRODUCT,
                payload: json.data,
            });
        } catch (error) {
            return error;
        }
    };
}

export function getProducts() {
    return async function (dispatch) {
        try {
            // let json = await axios.get("path get/products", {});

            return dispatch({
                type: GET_PRODUCTS,
                // payload: json.data,
                payload: products,
            });
        } catch (error) {
            return error;
        }
    };
}

export function getCategories() {
    return function (dispatch) {
        return axios.get("path/products/category")
            .then(response => {
                dispatch({ type: GET_CATEGORIES, payload: response.data });
            })

    };

}

export function getProductByCategory(categoryName) {
    return function (dispatch) {
        return axios.get(`/products/category/${categoryName}`)
            .then(products => {
                dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: products.data });
            })
            .catch(err => console.log(err))
    };
}

export function OrderAlphabetical(payload) {
    try {
        return {
            type: ORDER_ALPHABETICAL,
            payload,
        };
    } catch (error) {
        return error;
    }
}

export function OrderPrice(payload) {
    return {
        type: ORDER_PRICE,
        payload,
    };
}

export const getDetail = () => {
    return async (dispatch) => {
        try {
            const product = await axios.get("aca va la ruta");

            return dispatch({
                type: GET_DETAIL,
                payload: product.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


