import React, { /* useEffect,*/ useState } from "react";
import * as ReactRedux from "react-redux";
// import { getCategories } from "../../../../redux/actions/Categories/CategoryAction";
// import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
// import { editUserData } from "../../../../redux/actions/Users/UsersActions";
import style from "./UserEdit.module.css";
import { MdArrowBack } from "react-icons/md";

function UserEdit() {
  // const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { allUsersOnDb } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );

  const user = allUsersOnDb.find((us) => us.id == id);

  // const validador = (input) => {
  //   //let noNumero = /^[A-Za-z]+$/; //corregir esto para que pueda tener espacios
  //   let error = {};
  //   // if (!noNumero.test(input.name)) {
  //   //   error.name = "el nombre solo acepta letras";
  //   // }
  //   if (!input.name) {
  //     error.name = "el nombre no puede estar vacio";
  //   }
  //   // if (!input.category.length) {
  //   //   error.categories = "al menos se necesita una categoria";
  //   // }
  //   return error;
  // };

  // const validoSelect = (input, event) => {
  //   let error = "";
  //   let categories = input.category;

  //   if (categories.length > 0) {
  //     if (categories.find((p) => p === event)) {
  //       error = "Categoria ya agregada";
  //     }
  //   }
  //   return error;
  // };

  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    given_name: user.given_name,
    family_name: user.family_name,
    email: user.email,
    picture: user.picture,
    nickname: user.nickname,
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    // setErrors(
    //   validador({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch(editUserData(id, input));
    alert(`El usuario ${input.email} ha sido editado correctamente`);
    navigate(`/admin/users/detail/${id}`);

    // if (!errors.name && !errors.categories) {
    //   dispatch(editDetail(id, input));
    //   alert(`El producto ${input.name} ha sido editado correctamente`);
    //   navigate(`/products/${id}`);
    // } else {
    //   swal("Hubo un problema al editar el producto, mirar el formulario");
    // }
  };
  return (
    <form
      className={style.formPrincipal}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      {user.email ? (
        <div className={style.divSection}>
          <section>
            <label>nombre*</label>
            <input
              name="given_name"
              value={input.given_name}
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
            {/* {errors.name && <p className={style.errors}>{errors.name}</p>} */}
            <label>apellido*</label>
            <input
              name="family_name"
              value={input.family_name}
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
            <label>email*</label>
            <input
              name="email"
              value={input.email}
              type="email"
              onChange={(e) => handleInputChange(e)}
            />
            <label>usuario*</label>
            <input
              name="nickname"
              value={input.nickname}
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
            <div>Los campos marcados con * son obligatorios</div>
          </section>
          <section>
            <div className={style.imageDiv}>
              <img alt="imagen" src={input.picture} />
              <input
                placeholder="URL de la imagen..."
                name="picture"
                value={input.picture}
                type="text"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </section>
        </div>
      ) : (
        "Cargando"
      )}
      {user.email ? (
        <button type="submit" className={style.btn}>
          Editar
        </button>
      ) : (
        <></>
      )}
    </form>
  );
}

export default UserEdit;
