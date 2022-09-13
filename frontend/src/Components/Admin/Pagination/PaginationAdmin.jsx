import React from "react";
import style from "./PaginationAdmin.module.css";
// import * as ReactRedux from "react-redux";
// import { setPageAct } from "../../redux/actions/Page/PageAction";

function Pagination({ page, setPage, products }) {
  // const dispatch = ReactRedux.useDispatch();

  // const { page } = ReactRedux.useSelector((state) => state.pageReducer);

  const numbers = [];
  for (let i = 0; i < products.length / 12; i++) {
    numbers.push(i);
  }

  const goTo = (number) => {
    if (number === 0) {
      return setPage(0);
    }
    setPage(12 * number);
  };

  const actualPage = (num) => {
    if (page / 12 === num) {
      return {
        backgroundColor: "grey",
        fontWeight: "bold",
      };
    }
  };

  const next = () => {
    if (page < products.length - 12) {
      setPage(page + 12);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };
  return (
    <div className={style.mainP}>
      <button onClick={prev}>Prev</button>
      {numbers.length &&
        numbers.map((num, i) => (
          <button
            key={i}
            onClick={() => goTo(num)}
            style={actualPage(num)}
            className={style.numbers}
          >
            {num + 1}
          </button>
        ))}
      <button onClick={next}>Next</button>
    </div>
  );
}

export default Pagination;
