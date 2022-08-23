import {
    GET_NAME_PRODUCT,
} from "../actions/ActionsTypes";


const initialState = {
    product: [],
}

export default function reducer(state = initialState, { type, payload }) {
    //vamos a ejecutar los typos de accion para saber donde ejecutar cada logica
    switch (type) {

        case GET_NAME_PRODUCT:
            return {
                ...state,
                product: payload
            }

            default: return state
    }
}