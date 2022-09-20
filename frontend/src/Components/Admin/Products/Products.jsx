import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../../redux/actions/Products/ProductsAction";
import imgCane from "../../Img/Logo1V2.png";
import Loading from "../../Loading/Loading";
import Pagination from "../Pagination/PaginationAdmin";
import style from "./Products.module.css";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

function Products() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);

  // const [page, setPage] = useState(0);

  // const prodPage = product.slice(page, page + 12);

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
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Nombre",
      dataIndex: "name",
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
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Unid.",
      dataIndex: "stock",
      key: "stock",
      defaultSortOrder: "descend",
      width: "10%",
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Disp",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },
    },
    {
      title: "Extra",
      key: "operation",
      width: "10%",
      render: (key) => <Link to={`/admin/products/detail/${key.id}`}>Ver</Link>,
    },
  ];

  return (
    <div className={style.mainProdDiv}>
      <section className={style.newProd}>
        <Link to={"/admin/products/newproduct"} className={style.linkNewP}>
          Añadir Nuevo Producto
        </Link>
      </section>
      <div>
        <h2>Lista de Productos</h2>
      </div>
      {/* <section className={style.prodSection}> */}
      {/* <div className={style.prodRender}>
          <div className={style.linkProd}>
            <p>ID</p>
            <span className={style.linkPName}>Nombre del producto</span>
            <p>Precio</p>
            <p>Stock</p>
            <p>Estado</p>
          </div>
        </div> */}
      {product.length > 1 ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          className={style.tableAntD}
          // style={{ width: "70%", fontSize: '1rem' }}
          // onCell={{fontSize: '2rem'}}
        />
      ) : (
        // (
        //   prodPage.map((prod) => (
        //     <div className={style.prodRender}>
        //       <Link
        //         to={`/admin/products/detail/${prod.id}`}
        //         key={prod.id}
        //         className={style.linkProd}
        //       >
        //         <p>{prod.id}</p>
        //         {/* <img src={prod.image ? prod.image : imgCane} alt={prod.id} /> */}
        //         <span className={style.linkPName}>{prod.name}</span>
        //         <p>$ {prod.price}</p>
        //         <p>{prod.stock} U</p>
        //         <p>{prod.status ? "No disp." : "Disp."}</p>
        //         {/* shortDesc={prod.shortDescription}
        //       widthCard={375}
        //     heightCard={450} */}
        //       </Link>
        //     </div>
        //   ))
        // )
        <Loading />
      )}
      {/* </section>
      <section className={style.pag}>
        {product.length > 1 ? (
          <Pagination setPage={setPage} page={page} products={product} />
        ) : (
          <div></div>
        )}
      </section> */}
    </div>
  );
}

export default Products;
