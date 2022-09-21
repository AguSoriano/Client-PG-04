import React from "react";
import { useState } from "react";
import style from "./Category.module.css";
import { useParams, useNavigate } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { editCategory } from "../../../../redux/actions/Categories/CategoryAction";
import { Form, Input, Button } from "antd";
import { MdArrowBack } from "react-icons/md";

function CategoryEdit() {
  const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { categories } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  const categoryEdit = categories.find((c) => c.id == id);
  console.log(categoryEdit);

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const [input, setInput] = useState({
    name: categoryEdit.name,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //check errors
    dispatch(editCategory(id, loginUser, input));
    alert("El nombre de la categoria se edito correctamente");
    setInput({
      name: "",
    });
    navigate("/admin/categories");
  };
  return (
    <div className={style.formPrincipal}>
      <div className={style.list}>
        <h2>Editar la categoria</h2>
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
            defaultValue={input.name}
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

export default CategoryEdit;
