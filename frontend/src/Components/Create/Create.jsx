import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { createProduct, getCategories } from "../../redux/actions";
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
    if (!noNumero.test(input.name)) {
      error.name = "el nombre solo acepta letras";
    }
    if (!input.name) {
      error.name = "el nombre no puede estar vacio";
    }
    if (!input.category.length) {
      error.categories = "al menos se necesita una categoria";
    }
    return error;
  };

  const validoSelect = (input, event) => {
    let error = "";
    let categories = input.category;

    if (categories.length > 0) {
      if (categories.find((p) => p === event)) {
        error = "Categoria ya agregada";
      }
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

  const handleSelect = (event) => {
    event.preventDefault();

    if (!validoSelect(input, event.target.value)) {
      setErrors(
        validador({
          ...input,
          category: [...input.category, event.target.value],
        })
      );

      setInput({
        ...input,
        category: [...input.category, event.target.value],
      });
    } else {
      alert(validoSelect(input, event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.name && !errors.categories) {
      dispatch(createProduct(input));
      // alert("Producto creado con exito");
    } else {
      alert("Hubo un problema al crear el producto, mirar el formulario");
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
          <label>descripcion corta</label>
          <input
            name="shortDescription"
            value={input.shortDescription}
            type="textarea"
            onChange={(e) => handleInputChange(e)}
          />
          <label>descripcion</label>
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
          <label>precio</label>
          <input
            name="price"
            value={input.price}
            type="number"
            onChange={(e) => handleInputChange(e)}
          />
        </section>
        <section>
          <label>categorias </label>
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
          {errors.categories && (
            <p className={style.errors}>{errors.categories}</p>
          )}
        </section>
      </div>
      <button type="submit" className={style.btn}>
        CREAR
      </button>
    </form>
  );
}
export default Create;
