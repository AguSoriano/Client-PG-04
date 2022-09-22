import axios from "axios";
import {
  CLEAN_USER_DETAIL,
  CLEAN_USER_LOGIN,
  GET_ALL_USERS,
  GET_ONE_USER_DETAIL,
  GET_USER_LOGIN,
  GET_USER_ORDERS,
} from "./ActionType";

export const userDisableAlert = (cb) => {
  alert();
  cb();
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const usersOnDb = await axios.get(
        "https://pf-api-04.up.railway.app/user"
      );
      return dispatch({
        type: GET_ALL_USERS,
        payload: usersOnDb.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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
      await axios.post("https://pf-api-04.up.railway.app/user", newUser);
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

export const getUserLogin = (email) => {
  return async (dispatch) => {
    try {
      const loginUser = await axios.get(
        `https://pf-api-04.up.railway.app/user?email=${email}`
      );
      return dispatch({
        type: GET_USER_LOGIN,
        payload: loginUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanUserLogin = () => {
  return {
    type: CLEAN_USER_LOGIN,
    payload: {},
  };
};

export const getOneUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const userById = await axios.get(
        `https://pf-api-04.up.railway.app/user/${id}`
      );
      return dispatch({
        type: GET_ONE_USER_DETAIL,
        payload: userById.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanUserDetail = () => {
  return {
    type: CLEAN_USER_DETAIL,
    payload: {},
  };
};

export const disableUserById = (id, userLoged, isDisable) => {
  return async (dispatch) => {
    try {
      const data = {
        rol: userLoged.rol,
        isDisable,
      };
      await axios.put(
        `https://pf-api-04.up.railway.app/user/change/${id}`,
        data
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const eneableUserById = (id, userLoged, isDisable) => {
  return async (dispatch) => {
    const data = {
      rol: userLoged.rol,
      isDisable,
    };
    // console.log(data);
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/user/change/${id}`,
        data
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const doAdminUserById = (id, userLoged) => {
  return async (dispatch) => {
    const data = {
      rol: userLoged.rol,
    };
    // console.log(data);
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/user/change/${id}?rol=admin`,
        data
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const doUserById = (id, userLoged) => {
  return async (dispatch) => {
    const data = {
      rol: userLoged.rol,
    };
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/user/change/${id}?rol=user`,
        data
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserData = (id, data) => {
  return async (dispatch) => {
    const userEdited = {
      given_name: data.given_name.toLowerCase(),
      family_name: data.family_name.toLowerCase(),
      email: data.email,
      picture: data.picture,
      nickname: data.nickname.toLowerCase(),
    };
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/user/${id}`,
        userEdited
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserData2 = (id, data) => {
  return async (dispatch) => {
    const userEdited = {
      given_name: data.given_name.toLowerCase(),
      family_name: data.family_name.toLowerCase(),
      email: data.email,
      picture: data.picture,
      nickname: data.nickname.toLowerCase(),
    };
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/user/${id}`,
        userEdited
      );
      dispatch(getUserLogin(userEdited.email));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserOrders = (user) => {
  return async (dispatch) => {
    try {
      const orders = await axios.get(
        `https://pf-api-04.up.railway.app/user/${user.id}/orders`
      );

      const orders2 = await Promise.all(
        orders.data.map(async (or) => {
          let prods = await axios.get(
            `https://pf-api-04.up.railway.app/user/${user.id}/order?id=${or.id}`
          );
          return {
            id: or.id,
            status: or.status,
            userId: or.userId,
            createdAt: or.createdAt,
            updatedAt: or.updatedAt,
            products: await Promise.all(
              prods.data.map(async (p) => {
                let prods = await axios.get(
                  `https://pf-api-04.up.railway.app/products/${p.productId}`
                );
                return {
                  id: p.productId,
                  name: prods.data.name,
                  image: prods.data.image ? prods.data.image : "",
                  quantity: p.quantity,
                  price: prods.data.price,
                  stock: prods.data.stock,
                  status: prods.data.status,
                };
              })
            ),
          };
        })
      );

      return dispatch({
        type: GET_USER_ORDERS,
        payload: orders2,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
