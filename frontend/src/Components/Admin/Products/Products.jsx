import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProduct,
  eneableProduct,
  getProducts,
} from "../../../redux/actions/Products/ProductsAction";
import Loading from "../../Loading/Loading";
import style from "./Products.module.css";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { MdArrowBack, MdOutlineRestoreFromTrash } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { CgMoreR } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import swal from "sweetalert";

function Products() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const deleteProd = (key) => {
    dispatch(deleteProduct(key.id, loginUser));
    swal(`El producto ${key.name} fue desactivado`);
  };
  const eneableProd = (key) => {
    dispatch(eneableProduct(key.id, loginUser));
    swal(`El producto ${key.name} fue restaurado`);
  };

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);

  const dataSource = product.map((prod) => {
    return {
      key: prod.id,
      id: prod.id,
      name: prod.name,
      price: prod.price,
      stock: prod.stock,
      status: prod.status ? "No" : "Si",
    };
  });

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      defaultSortOrder: "descend",
      key: "name",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
    },
    {
      title: "$",
      dataIndex: "price",
      key: "price",
      ...getColumnSearchProps("price"),
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Unid.",
      dataIndex: "stock",
      key: "stock",
      ...getColumnSearchProps("stock"),
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Disp",
      dataIndex: "status",
      defaultSortOrder: "descend",
      key: "status",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },
    },
    {
      title: "Mas",
      key: "operation",
      width: "10%",
      render: (key) => (
        <div className={style.mas}>
          <CgMoreR
            className={style.icon}
            onClick={() => navigate(`/admin/products/detail/${key.id}`)}
          />
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/products/edit/${key.id}`)}
          />
          {key.status === "Si" ? (
            <RiDeleteBinLine
              onClick={() => deleteProd(key)}
              className={style.iconD}
            />
          ) : (
            <MdOutlineRestoreFromTrash
              onClick={() => eneableProd(key)}
              className={style.iconE}
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div className={style.mainProdDiv}>
      <section className={style.newProd}>
        <Link to={"/admin/products/newproduct"} className={style.linkNewP}>
          Añadir Nuevo Producto
        </Link>
      </section>
      <div className={style.list}>
        <h2>Lista de Productos</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      {product.length > 1 ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          className={style.tableAntD}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Products;
