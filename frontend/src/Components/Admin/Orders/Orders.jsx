import React, { useRef, useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import {
  editStatusOrder,
  getAllOrders,
} from "../../../redux/actions/Cart/CartAction";
import Loading from "../../Loading/Loading";
import style from "./Orders.module.css";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import CardOrder from "./Card/CardOrder";
import { CgMoreR } from "react-icons/cg";

function Orders() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getAllOrders(loginUser));
  }, [dispatch, loginUser]);

  const { allOrders } = ReactRedux.useSelector((state) => state.ordersReducer);

  const handleSelect = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    dispatch(editStatusOrder(id, loginUser, input));
  };

  const dataSource = allOrders
    .filter((or) => or.status !== "carrito")
    .map((or) => {
      return {
        key: or.id,
        id: or.id,
        status: or.status,
        createdAt: or.createdAt.slice(0, 10),
        email: or.email,
        products: or.products.reduce(
          (acc, prod) => acc + prod.price * prod.quantity,
          0
        ),
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
      width: "8%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Estado",
      dataIndex: "status",
      defaultSortOrder: "descend",
      key: "status",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },
      width: "15%",
    },
    {
      title: "Fecha",
      dataIndex: "createdAt",
      key: "createdAt",
      defaultSortOrder: "descend",
      width: "20%",
      ...getColumnSearchProps("createdAt"),
      sorter: (a, b) => {
        if (a.createdAt < b.createdAt) return -1;
        if (a.createdAt > b.createdAt) return 1;
        return 0;
      },
      width: "15%",
    },
    {
      title: "Usuario",
      dataIndex: "email",
      key: "email",
      defaultSortOrder: "descend",
      width: "10%",
      ...getColumnSearchProps("email"),
      sorter: (a, b) => {
        if (a.email < b.email) return -1;
        if (a.email > b.email) return 1;
        return 0;
      },
    },
    {
      title: "Monto",
      dataIndex: "products",
      key: "products",
      defaultSortOrder: "descend",
      width: "10%",
      ...getColumnSearchProps("products"),
      sorter: (a, b) => {
        if (a.products < b.products) return -1;
        if (a.products > b.products) return 1;
        return 0;
      },
      width: "12%",
    },
    {
      title: "Opciones",
      key: "operation",
      width: "18%",
      render: (key) => (
        <div className={style.mas}>
          <CardOrder
            order={key}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
          />
          <CgMoreR
            className={style.icon}
            onClick={() => navigate(`/admin/orders/detail/${key.id}`)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className={style.mainOrders}>
      <div className={style.list}>
        <h2>Lista de Ordenes de Compra</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      {allOrders.length > 1 ? (
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

export default Orders;
