import React from "react";
import style from "./Pagination.module.css";
import * as ReactRedux from "react-redux";
import { setPageAct } from "../../redux/actions/Page/PageAction";

function Pagination({ /*page, setPage,*/ products }) {
  const dispatch = ReactRedux.useDispatch();

  const { page } = ReactRedux.useSelector((state) => state.pageReducer);

  const numbers = [];
  for (let i = 0; i < products.length / 6; i++) {
    numbers.push(i);
  }

  const goTo = (number) => {
    if (number === 0) {
      window.scrollTo(0, 0);
      return dispatch(setPageAct(0));
    }
    dispatch(setPageAct(6 * number));
    window.scrollTo(0, 0);
  };

  const actualPage = (num) => {
    if (page / 6 === num) {
      return {
        backgroundColor: "grey",
        fontWeight: "bold",
      };
    }
  };

  const next = () => {
    if (page < products.length - 6) {
      dispatch(setPageAct(page + 6));
      window.scrollTo(0, 0);
    }
  };

  const prev = () => {
    if (page > 0) {
      dispatch(setPageAct(page - 6));
      window.scrollTo(0, 0);
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
