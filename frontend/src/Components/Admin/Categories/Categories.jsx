import React, { useRef, useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  disableCategory,
  enableCategory,
  getCategories,
} from "../../../redux/actions/Categories/CategoryAction";
import style from "./Categories.module.css";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import Loading from "../../Loading/Loading";
import { MdArrowBack, MdOutlineRestoreFromTrash } from "react-icons/md";
import { CgMoreR } from "react-icons/cg";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";

function Categories() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const disableCat = (key) => {
    dispatch(disableCategory(key.id, loginUser));
    alert(`La categoria ${key.name} se deshabilito`);
  };
  const enableCat = (key) => {
    dispatch(enableCategory(key.id, loginUser));
    alert(`La categoria ${key.name} se restauro`);
  };

  const { categories } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  const dataSource = categories.map((cat) => {
    return {
      key: cat.id,
      id: cat.id,
      name: cat.name,
      status: cat.status ? "No" : "Si",
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
      title: "Disp",
      dataIndex: "status",
      defaultSortOrder: "descend",
      key: "status",
      width: "10%",
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
            onClick={() => navigate(`/admin/categories/detail/${key.id}`)}
          />
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/categories/edit/${key.id}`)}
          />
          {key.status === "Si" ? (
            <RiDeleteBinLine
              onClick={() => disableCat(key)}
              className={style.iconD}
            />
          ) : (
            <MdOutlineRestoreFromTrash
              onClick={() => enableCat(key)}
              className={style.iconE}
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className={style.categDiv}>
        <section className={style.newCat}>
          <Link to={"/admin/categories/newcategory"} className={style.linkNewC}>
            Añadir Nueva Categoria
          </Link>
        </section>
        <div className={style.list}>
          <h2>Lista de Categorias</h2>
          <MdArrowBack
            onClick={() => navigate(-1)}
            className={style.listName}
          />
        </div>
        {categories.length ? (
          <Table
            dataSource={dataSource}
            columns={columns}
            className={style.tableAntD}
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Categories;
