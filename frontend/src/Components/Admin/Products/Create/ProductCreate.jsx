import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { createProduct } from "../../../../redux/actions/Products/ProductsAction";
import { getCategories } from "../../../../redux/actions/Categories/CategoryAction";
import style from "./ProductCreate.module.css";
import { PlusOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { Form, Input, Button, InputNumber, Upload, List } from "antd";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function ProductCreate() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const allCategory = ReactRedux.useSelector(
    (state) => state.categoryReducer.categories
  );
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const validador = (input) => {
    let error;
    if (input.name.search("[0-9]") !== -1) {
      error = "El nombre no acepta números";
    }
    if (!input.name) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.price) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.stock) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.longDescription) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.shortDescription) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.category.length) {
      error = "al menos se necesita una categoria";
    }
    return error;
  };

  const validoSelect = (input, event) => {
    let error = "";
    let categories = input.category;

    if (categories.length > 0) {
      if (categories.find((p) => p.id === event.id)) {
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

  const handleStock = (evento) => {
    setErrors(
      validador({
        ...input,
        stock: evento,
      })
    );

    setInput({
      ...input,
      stock: evento,
    });
  };

  const handlePrice = (evento) => {
    setErrors(
      validador({
        ...input,
        stock: evento,
      })
    );

    setInput({
      ...input,
      price: evento,
    });
  };

  const quitar = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      category: input.category.filter(
        (cat) => cat.id !== JSON.parse(e.target.value)
      ),
    });
  };

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

    if (!validador(input)) {
      dispatch(createProduct(loginUser, input));
      swal({
        title: "Exito",
        text: `El producto ${input.name} se creo correctamente`,
        icon: "success",
        button: "Aceptar",
        timer: "2500",
      });
      setInput({
        name: "",
        image: "",
        shortDescription: "",
        longDescription: "",
        stock: 0,
        price: 0,
        category: [],
      });
      navigate(-1);
    } else {
      swal("Hubo un problema al crear el producto, revisa el formulario");
    }
  };

  const cloudinary = "https://api.cloudinary.com/v1_1/dxmuv4sl0/auto/upload";

  const data = {
    upload_preset: "dw5pvlez",
  };

  return (
    <div className={style.mainDi}>
      <div className={style.list}>
        <h2>Agregar un nuevo producto</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="middle"
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <Input
            name="name"
            value={input.name}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Introduccion"
          name="intro"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <TextArea
            rows={4}
            name="shortDescription"
            value={input.shortDescription}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Descripcion"
          name="description"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <TextArea
            rows={4}
            name="longDescription"
            value={input.longDescription}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Stock"
          name="stock"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <InputNumber value={input.stock} onChange={(e) => handleStock(e)} />
        </Form.Item>
        <Form.Item
          label="Precio"
          name="price"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <InputNumber value={input.price} onChange={(e) => handlePrice(e)} />
        </Form.Item>
        <Form.Item
          label="Categorias"
          name="category"
          rules={[
            {
              required: true,
              message: "Al menos 1 es requerida",
            },
          ]}
        >
          <select onChange={(e) => handleSelect(e)} className={style.selectD}>
            <option></option>
            {allCategory.map((cat) => (
              <option key={cat.id} value={JSON.stringify(cat)}>
                {cat.name.toUpperCase()}
              </option>
            ))}
          </select>
        </Form.Item>

        <List
          size="small"
          bordered
          dataSource={input.category}
          renderItem={(item) => (
            <List.Item style={{ display: "flex", alignItems: "center" }}>
              {item.name.toUpperCase()}{" "}
              <button
                className={style.btnx}
                value={JSON.stringify(item.id)}
                onClick={(e) => quitar(e)}
              >
                x
              </button>
            </List.Item>
          )}
          style={{ width: "450px", marginLeft: "30%", marginBottom: "2rem" }}
        />

        <Form.Item label="Foto (url)">
          <Input
            name="image"
            value={input.image}
            onChange={(e) => handleInputChange(e)}
            placeholder="Coloque la url de su foto..."
          />
        </Form.Item>
        <Form.Item label="Fotos" valuePropName="fileList">
          <Upload action={cloudinary} data={data} listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Subir
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Crear">
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Agregar el Producto
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default ProductCreate;
