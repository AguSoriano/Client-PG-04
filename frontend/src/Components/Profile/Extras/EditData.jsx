import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUserData } from "../../../redux/actions/Users/UsersActions";
import style from "./EditData.module.css";
import swal from "sweetalert";

function EditData() {
  const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const validador = (input) => {
    //let noNumero = /^[A-Za-z]+$/; //corregir esto para que pueda tener espacios
    let error = {};
    // if (!noNumero.test(input.name)) {
    //   error.name = "el nombre solo acepta letras";
    // }
    if (!input.given_name) {
      error.given_name = "el nombre no puede estar vacio";
    }
    if (!input.family_name) {
      error.family_name = "el apellido no puede estar vacio";
    }
    if (!input.email) {
      error.email = "el email no puede estar vacio";
    }
    if (!input.nickname) {
      error.nickname = "el usuario no puede estar vacio";
    }
    return error;
  };

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    given_name: "",
    family_name: "",
    email: "",
    nickname: "",
    picture: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    setErrors(
      validador({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !errors.given_name &&
      !errors.family_name &&
      !errors.email &&
      !errors.nickname
    ) {
      dispatch(editUserData(id, input));
      alert(`El perfil ha sido editado correctamente`);
      navigate(`/profile/data`);
    } else {
      swal("Hubo un problema al editar el producto, mirar el formulario");
    }
  };

  return (
    <form
      className={style.formPrincipal}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className={style.divSection}>
        <section>
          <label>nombre</label>
          <input
            name="given_name"
            value={input.given_name}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.given_name && (
            <p className={style.errors}>{errors.given_name}</p>
          )}
          <label>apellido</label>
          <input
            name="family_name"
            value={input.family_name}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.family_name && (
            <p className={style.errors}>{errors.family_name}</p>
          )}
          <label>usuario</label>
          <input
            name="nickname"
            value={input.nickname}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.nickname && <p className={style.errors}>{errors.nickname}</p>}
          <label>email</label>
          <input
            name="email"
            value={input.email}
            type="email"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
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
      <button type="submit" className={style.btn}>
        Editar
      </button>
    </form>
  );
}

export default EditData;
