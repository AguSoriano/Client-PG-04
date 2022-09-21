import React, { useState } from "react";
import style from "./CategoryCreate.module.css";
import * as ReactRedux from "react-redux";
import { createCategory } from "../../../../redux/actions/Categories/CategoryAction";
import { Form, Input, Button } from "antd";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CategoryCreate() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

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
    alert(`La categoria ${input.name} se creo correctamente`);
    setInput({
      name: "",
    });
  };
  return (
    <div className={style.formPrincipal}>
      <div className={style.list}>
        <h2>Agregar una nueva categoria</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 22,
        }}
        layout="horizontal"
      >
        <Form.Item
          name="nombre"
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
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={style.btn}
        >
          Crear
        </Button>
      </Form>
    </div>
  );
}
export default CategoryCreate;
