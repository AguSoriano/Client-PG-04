import axios from "axios";

export const register = (data) => {
  return async () => {
    try {
      const newUser = {
        given_name: data.given_name? data.given_name : undefined,
        family_name: data.family_name? data.family_name : undefined,
        nickname: data.nickname,
        email: data.email,
        picture: data.picture,
      };
      const user = await axios.post(
        "https://pf-api-04.up.railway.app/user",
        newUser
      );
      console.log("User register on DB", user);
    } catch (error) {
      console.log(error);
    }
  };
};
