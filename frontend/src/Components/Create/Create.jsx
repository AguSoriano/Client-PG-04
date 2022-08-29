import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { traerCategory } from "../../actions";
import style from "./Create.module.css";

function Create() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(traerCategory());
  }, [dispatch]);

  const todasCategory = ReactRedux.useSelector((state) => state.category);
  todasCategory.sort((a, b) =>
    a.nombre < b.nombre ? -1 : +(a.nombre > b.nombre)
  );

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
    ShortDescription: "",
    Description: "",
    stock: 0,
    Prise: 0,
    Category: [],
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
      Category: input.Category.filter((p) => p !== e.target.value),
    });
  };

  console.log(input.Category);

  const handleSelect = (evento) => {
    evento.preventDefault();

    if (!validoSelect(input, evento.target.value)) {
      setErrors(
        validador({
          ...input,
          Category: [...input.Category, evento.target.value],
        })
      );

      setInput({
        ...input,
        Category: [...input.Category, evento.target.value],
      });
    } else {
      alert(validoSelect(input, evento.target.value));
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
            name="name"
            value={input.name}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.name && <p className={style.errors}>{errors.name}</p>}
          <label>description corta</label>
          <select
            name="shortDescription"
            onChange={(e) => handleInputChange(e)}
          >
            <option value={1}>1</option>
          </select>
          <label>description</label>
          <select
            name="description"
            onChange={(e) => handleInputChange(e)}
          ></select>
          <label>stock</label>
          <select name="stock" onChange={(e) => handleInputChange(e)}></select>
          <label>price</label>
          <select name="price" onChange={(e) => handleInputChange(e)}></select>
        </section>
        <section>
          <label>category</label>
          <select onChange={(e) => handleSelect(e)}>
            <option></option>
            {todasCategory.map((p, i) => (
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
