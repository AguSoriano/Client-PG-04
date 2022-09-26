import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { getCategories } from "../../../../redux/actions/Categories/CategoryAction";
import style from "./ProductEdit.module.css";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { editDetail } from "../../../../redux/actions/ProdDetail/ProdDetailAction";
import { Form, Input, Button, InputNumber, Upload, List } from "antd";
import { MdArrowBack } from "react-icons/md";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function ProductEdit() {
  const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const allCategory = ReactRedux.useSelector(
    (state) => state.categoryReducer.categories
  );
  const { product } = ReactRedux.useSelector((state) => state.productsReducer);

  const prodEditDetail = product.find((p) => p.id == id);

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const validador = (input) => {
    let error;
    if (!input.name) {
      error = "el nombre no puede estar vacio";
    }
    if (!input.price) {
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
      if (categories.find((p) => p === event)) {
        error = "Categoria ya agregada";
      }
    }
    return error;
  };

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: prodEditDetail.name,
    image: prodEditDetail.image,
    shortDescription: prodEditDetail.shortDescription,
    longDescription: prodEditDetail.longDescription,
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validador(input)) {
      dispatch(editDetail(id, loginUser, input));
      swal({
        title: "Exito",
        text: `El producto ${input.name} ha sido editado correctamente`,
        icon: "success",
        button: "Aceptar",
        timer: "2500",
      });
      navigate(-1);
    } else {
      swal("Hubo un problema al editar el producto, mirar el formulario");
    }
  };
  const cloudinary = "https://api.cloudinary.com/v1_1/dxmuv4sl0/auto/upload";

  const data = {
    upload_preset: "dw5pvlez",
  };

  return (
    <div className={style.mainDi}>
      <div className={style.list}>
        <h2>Estas modificando un producto</h2>
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
            defaultValue={input.name}
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
            defaultValue={input.shortDescription}
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
            defaultValue={input.longDescription}
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
          <InputNumber
            name="stock"
            value={input.stock}
            onChange={(e) => handleStock(e)}
            defaultValue={input.stock}
          />
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
          <InputNumber
            name="price"
            value={input.price}
            onChange={(e) => handlePrice(e)}
            defaultValue={input.price}
          />
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
            defaultValue={input.image}
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
        <Form.Item label="Modificar Producto">
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Editar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProductEdit;
