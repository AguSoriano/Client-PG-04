import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUserData } from "../../../redux/actions/Users/UsersActions";
import style from "./EditData.module.css";
import swal from "sweetalert";
import { Form, Input, Button, Upload } from "antd";
import { MdArrowBack } from "react-icons/md";
import { PlusOutlined } from "@ant-design/icons";

function EditData() {
  const dispatch = ReactRedux.useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const [input, setInput] = useState({
    given_name: loginUser.given_name,
    family_name: loginUser.family_name,
    email: loginUser.email,
    picture: loginUser.picture,
    nickname: loginUser.nickname,
  });

  const validador = (input) => {
    let error;
    if (!input.given_name) {
      error = "no puede estar vacio";
    }
    if (!input.family_name) {
      error = "no puede estar vacio";
    }
    if (!input.email) {
      error = "no puede estar vacio";
    }
    if (!input.nickname) {
      error = "no puede estar vacio";
    }
    return error;
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validador(input)) {
      dispatch(editUserData(id, input));
      swal({
        title: "Exito",
        text: `El usuario ${input.email} ha sido editado correctamente`,
        icon: "success",
        button: "Aceptar",
        timer: "2500",
      });
      navigate(`/admin/users`);
    } else {
      swal("Hubo un problema al editar el perfil, mirar el formulario");
    }
  };

  const cloudinary = "https://api.cloudinary.com/v1_1/dxmuv4sl0/auto/upload";

  const data = {
    upload_preset: "dw5pvlez",
  };
  return (
    <div className={style.mainDi}>
      <div className={style.list}>
        <h2>Editar perfil de usuario</h2>
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
            name="given_name"
            value={input.given_name}
            onChange={(e) => handleInputChange(e)}
            defaultValue={input.given_name}
          />
        </Form.Item>
        <Form.Item
          name="surname"
          label="Apellido"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <Input
            name="family_name"
            value={input.family_name}
            onChange={(e) => handleInputChange(e)}
            defaultValue={input.family_name}
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Usuario"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <Input
            name="nickname"
            value={input.nickname}
            onChange={(e) => handleInputChange(e)}
            defaultValue={input.nickname}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <Input
            name="email"
            value={input.email}
            onChange={(e) => handleInputChange(e)}
            defaultValue={input.email}
          />
        </Form.Item>
        <Form.Item label="Foto (url)">
          <Input
            name="picture"
            value={input.picture}
            onChange={(e) => handleInputChange(e)}
            placeholder="Coloque la url de su foto..."
            defaultValue={input.picture}
          />
        </Form.Item>
        <Form.Item label="Foto" valuePropName="fileList">
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
        <Form.Item label="Guardar Cambios">
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

export default EditData;
