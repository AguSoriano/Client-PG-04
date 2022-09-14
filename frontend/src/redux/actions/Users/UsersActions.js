import axios from "axios";
import { USER_LOGGED } from "./Action.Types";

export const register = (data) => {
  return async () => {
    try {
      const newUser = {
        given_name: data.given_name ? data.given_name.toLowerCase() : undefined,
        family_name: data.family_name
          ? data.family_name.toLowerCase()
          : undefined,
        nickname: data.nickname.toLowerCase(),
        email: data.email,
        picture: data.picture,
      };
      const user = await axios.post(
        "https://pf-api-04.up.railway.app/user",
        newUser
      ); 
      // return dispatch({
      //   type:USER_LOGGED,
        // payload: user

      // })
      // console.log("User register on DB", user);
    } catch (error) {
      console.log(error);
    }
  };
};
