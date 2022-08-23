import axios from 'axios';
import {
    
    GET_NAME_PRODUCT
    
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