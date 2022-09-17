import React, { useState } from "react";
import style from "./CategoryCreate.module.css";
import * as ReactRedux from "react-redux";
import { createCategory } from "../../../../redux/actions/Categories/CategoryAction";

function CategoryCreate() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);

  const [input, setInput] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(input, loginUser));
    // console.log(input);
    alert(`La categoria ${input.name} se creo correctamente`);
    setInput({
      name: "",
    });
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
            name="name"
            value={input.name}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {/* {errors.name && <p className={style.errors}>{errors.name}</p>} */}
        </section>
        <button type="submit">Crear</button>
      </div>
    </form>
  );
}
export default CategoryCreate;
