import axios from "axios";
import { CLIENTE_SECRET } from "./ActionType";


export const getClientSecret = (userId, productId, price, quantity) => {
  
    return async (dispatch) => {
    try {
      const clientSecret = await axios.post(
        "https://pf-api-04.up.railway.app/payment/create-payment-intent",
        {
          userId: userId,
          productId: productId,
          price: price,
          quantity: quantity,
        }
      );

      return dispatch({
        type: CLIENTE_SECRET,
        payload: clientSecret.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
