import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { getCategories } from "../../redux/actions";
import style from "./Create.module.css";

function Create() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const allCategory = ReactRedux.useSelector((state) => state.categories);

  const validador = (input) => {
    let noNumero = /^[A-Za-z]+$/;
    let error = {};
    if (!noNumero.test(input.nombre)) {
      error.nombre = "el nombre solo acepta letras";
    }
    if (!input.nombre) {
      error.nombre = "el nombre no puede estar vacio";
    }
    return error;
  };

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    shortDescription: "",
    description: "",
    stock: 0,
    price: 0,
    category: [],
  });

  const handleInputChange = (evento) => {
    evento.preventDefault();

    setErrors(
      validador({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );

    setInput({
      ...input,
      [evento.target.name]: evento.target.value,
    });
  };

  const quitar = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput({
      ...input,
      category: input.category.filter((p) => p !== e.target.value),
    });
  };

  console.log(input.category);

  const handleSelect = (evento) => {
    evento.preventDefault();

    // if (!validoSelect(input, evento.target.value)) {
    //   setErrors(
    //     validador({
    //       ...input,
    //       category: [...input.category, evento.target.value],
    //     })
    //   );

    //   setInput({
    //     ...input,
    //     category: [...input.category, evento.target.value],
    //   });
    // } else {
    //   alert(validoSelect(input, evento.target.value));
    // }
  };

  return (
    <form
      className={style.formPrincipal}
      // onSubmit={(e) => {
      //   handleSubmit(e);
      // }}
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
          {errors.name && <p className={style.errors}>{errors.name}</p>}
          <label>description corta</label>
          <input
            name="shortDescription"
            value={input.shortDescription}
            type="textarea"
            onChange={(e) => handleInputChange(e)}
          />
          <label>description</label>
          <input
            name="description"
            value={input.description}
            type="textarea"
            onChange={(e) => handleInputChange(e)}
          />
          <label>stock</label>
          <input
            name="stock"
            value={input.stock}
            type="number"
            onChange={(e) => handleInputChange(e)}
          />
          <label>price</label>
          <input
            name="price"
            value={input.price}
            type="number"
            onChange={(e) => handleInputChange(e)}
          />
        </section>
        <section>
          <label>category</label>
          <select onChange={(e) => handleSelect(e)}>
            <option></option>
            {allCategory.map((p, i) => (
              <option key={i} value={p.name}>
                {p.name.toUpperCase()}
              </option>
            ))}
          </select>
          <ul className={style.ul}>
            {input.category.map((category, i) => (
              <li key={i}>
                {category}
                <button
                  className={style.btnx}
                  value={category}
                  onClick={(e) => quitar(e)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          {errors.category && <p className={style.errors}>{errors.category}</p>}
        </section>
      </div>
      <button type="submit" className={style.btn}>
        CREAR
      </button>
    </form>
  );
}
export default Create;
