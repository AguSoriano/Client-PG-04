import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  disableUserById,
  doAdminUserById,
  doUserById,
  eneableUserById,
  getAllUsers,
} from "../../../redux/actions/Users/UsersActions";
import Loading from "../../Loading/Loading";
import style from "./Users.module.css";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import {
  MdArrowBack,
  MdLockOpen,
  MdLockOutline,
  MdOutlinePersonOff,
} from "react-icons/md";
import { CgMoreR } from "react-icons/cg";
import { BsPersonCheck } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

function Users() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const disableUser = (key) => {
    dispatch(disableUserById(key.id, loginUser, true));
    alert(`El usuario ${key.email} fue desabilitado`);
  };

  const eneableUser = (key) => {
    dispatch(eneableUserById(key.id, loginUser, false));
    alert(`El usuario ${key.email} fue habilitado`);
  };

  const doAdmin = (key) => {
    dispatch(doAdminUserById(key.id, loginUser));
    alert(`El usuario ${key.email} ahora es administrador`);
  };

  const doUser = (key) => {
    dispatch(doUserById(key.id, loginUser));
    alert(
      `El usuario ${key.email} ya no es administrador y volvio a ser un usuario`
    );
  };

  const { allUsersOnDb } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );

  const usersWithoutLogin = allUsersOnDb.filter(
    (us) => us.email !== loginUser.email
  );

  const dataSource = usersWithoutLogin.map((us) => {
    return {
      key: us.id,
      id: us.id,
      email: us.email,
      nickname: us.nickname,
      rol: us.rol,
      isDisable: us.isDisable ? "Si" : "No",
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
      defaultSortOrder: "descend",
      width: "8%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
      sorter: (a, b) => {
        if (a.email < b.email) return -1;
        if (a.email > b.email) return 1;
        return 0;
      },
    },
    {
      title: "Usuario",
      dataIndex: "nickname",
      key: "nickname",
      defaultSortOrder: "descend",
      width: "20%",
      ...getColumnSearchProps("nickname"),
      sorter: (a, b) => {
        if (a.nickname < b.nickname) return -1;
        if (a.nickname > b.nickname) return 1;
        return 0;
      },
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol",
      defaultSortOrder: "descend",
      width: "10%",
      ...getColumnSearchProps("rol"),
      sorter: (a, b) => {
        if (a.rol < b.rol) return -1;
        if (a.rol > b.rol) return 1;
        return 0;
      },
    },
    {
      title: "Des",
      dataIndex: "isDisable",
      key: "isDisable",
      width: "10%",
      ...getColumnSearchProps("isDisable"),
      sorter: (a, b) => {
        if (a.isDisable < b.isDisable) return -1;
        if (a.isDisable > b.isDisable) return 1;
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
            onClick={() => navigate(`/admin/users/detail/${key.id}`)}
          />
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/users/edit/${key.id}`)}
          />
          {key.isDisable === "Si" ? (
            <BsPersonCheck
              onClick={() => eneableUser(key)}
              className={style.iconE}
            />
          ) : (
            <MdOutlinePersonOff
              onClick={() => disableUser(key)}
              className={style.iconD}
            />
          )}
          {loginUser.rol === "mododios" ? (
            key.rol === "user" ? (
              <MdLockOutline
                onClick={() => doAdmin(key)}
                className={style.iconE}
              />
            ) : (
              <MdLockOpen
                onClick={() => doUser(key)}
                className={style.iconAD}
              />
            )
          ) : (
            <></>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className={style.mainUsers}>
      <div className={style.list}>
        <h2>Lista de Usuarios</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      {allUsersOnDb.length > 1 ? (
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

export default Users;
