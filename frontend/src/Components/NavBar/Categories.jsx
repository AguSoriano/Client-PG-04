import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { setPageAct } from "../../redux/actions/Page/PageAction";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions/Products/ProductsAction";

function Categories() {
  const navigate = useNavigate();
  const dispatch = ReactRedux.useDispatch();

  const handleClick = ({ key }) => {
    navigate(`/category/${key}`);
    dispatch(getProducts())
    dispatch(setPageAct(0));
  };
  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          key: "medallon/all",
          label: "Medallones",
          children: [
            {
              key: "medallon/all",
              label: "Todos",
            },
            {
              key: "medallon/soja",
              label: "Soja",
            },
            {
              key: "medallon/garbanzo",
              label: "Garbanzo",
            },
            {
              key: "medallon/arveja",
              label: "Arveja",
            },
            {
              key: "medallon/vegano",
              label: "Vegano",
            },
            {
              key: "medallon/con relleno",
              label: "Rellenos",
            },
            {
              key: "medallon/sin relleno",
              label: "Simples",
            },
          ],
        },
        {
          key: "tarta/all",
          label: "Tartas",
        },
        {
          key: "pasta rellena/1",
          label: "Pastas",
        },
        {
          key: "kefir/all",
          label: "Bebidas",
        },
        {
          key: "vegano/all",
          label: "Vegano",
        },
        {
          key: "all/all",
          label: "Todos los productos",
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>Categorias</Space>
      </a>
    </Dropdown>
  );
}

export default Categories;
