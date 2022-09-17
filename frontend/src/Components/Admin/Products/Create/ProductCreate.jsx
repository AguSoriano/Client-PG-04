import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { createProduct } from "../../../../redux/actions/Products/ProductsAction";
import { getCategories } from "../../../../redux/actions/Categories/CategoryAction";
import style from "./ProductCreate.module.css";
import swal from "sweetalert";

function ProductCreate() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const allCategory = ReactRedux.useSelector(
    (state) => state.categoryReducer.categories
  );
  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);

  const validador = (input) => {
    let error = {};

    if (input.name.search("[0-9]") !== -1) {
      error.name = "El nombre no acepta números";
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
    image: "",
    shortDescription: "",
    longDescription: "",
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
    // console.log(e.target.value);
    setInput({
      ...input,
      category: input.category.filter(
        (cat) => cat.id !== JSON.parse(e.target.value)
      ),
    });
  };

  // console.log(input.category);

  const handleSelect = (event) => {
    event.preventDefault();

    if (!validoSelect(input, JSON.parse(event.target.value))) {
      setErrors(
        validador({
          ...input,
          category: [...input.category, JSON.parse(event.target.value)],
        })
      );

      setInput({
        ...input,
        category: [...input.category, JSON.parse(event.target.value)],
      });
    } else {
      swal(validoSelect(input, JSON.parse(event.target.value)));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.name && !errors.categories) {
      dispatch(createProduct(loginUser, input));
      alert(`El producto ${input.name} se creo correctamente`);
      setInput({
        name: "",
        image: "",
        shortDescription: "",
        longDescription: "",
        stock: 0,
        price: 0,
        category: [],
      });
    } else {
      swal("Hubo un problema al crear el producto,revisa el formulario");
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
          <label>breve descripcion</label>
          <input
            name="shortDescription"
            value={input.shortDescription}
            type="textarea"
            onChange={(e) => handleInputChange(e)}
          />
          <label>descripcion detallada</label>
          <input
            name="longDescription"
            value={input.longDescription}
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
          <div className={style.imageDiv}>
            <img alt="imagen" src={input.image} />
            <input
              placeholder="URL de la imagen..."
              name="image"
              value={input.image}
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* <label>categorias </label> */}
          <select onChange={(e) => handleSelect(e)}>
            <option>CATEGORIAS</option>
            {allCategory.map((cat) => (
              <option key={cat.id} value={JSON.stringify(cat)}>
                {cat.name.toUpperCase()}
              </option>
            ))}
          </select>
          <ul className={style.ul}>
            {input.category &&
              input.category.map((cat) => (
                <li key={cat.id}>
                  {cat.name}
                  <button
                    className={style.btnx}
                    value={JSON.stringify(cat.id)}
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
export default ProductCreate;
