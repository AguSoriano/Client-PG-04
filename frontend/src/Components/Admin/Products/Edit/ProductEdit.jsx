import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { createProduct } from "../../../../redux/actions/Products/ProductsAction";
import { getCategories } from "../../../../redux/actions/Categories/CategoryAction";
import style from "./ProductEdit.module.css";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const allCategory = ReactRedux.useSelector(
    (state) => state.categoryReducer.categories
  );
  const { prodEditDetail } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );

  const validador = (input) => {
    let noNumero = /^[A-Za-z]+$/; //corregir esto para que pueda tener espacios
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
    name: prodEditDetail.name,
    shortDescription: prodEditDetail.shortDescription,
    description: prodEditDetail.longDescription,
    stock: prodEditDetail.stock,
    price: prodEditDetail.price,
    category: prodEditDetail.categories,
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

  const quitar = (e) => {
    e.preventDefault();
    // console.log(e.target.value, input.category);
    setInput({
      ...input,
      category: input.category.filter((cat) => cat.id !== JSON.parse(e.target.value)),
    });
  };

  // console.log(input.category);

  const handleSelect = (event) => {
    // console.log(event.target.value)
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
      // dispatch(createProduct(input));
      // alert("Producto creado con exito");
      alert("Debes crear la action del put antes")
    } else {
      swal("Hubo un problema al crear el producto, mirar el formulario");
    }
  };
  return (
    <form
      className={style.formPrincipal}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {prodEditDetail.name ? (
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
      ) : (
        "Cargando"
      )}
      {prodEditDetail.name ? (
        <button type="submit" className={style.btn}>
          Editar
        </button>
      ) : (
        <></>
      )}
    </form>
  );
}

export default ProductEdit;
