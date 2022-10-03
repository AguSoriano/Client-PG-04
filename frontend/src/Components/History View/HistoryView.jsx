import React from "react";
import * as ReactRedux from "react-redux";
import { clearHist } from "../../redux/actions/Favorites/FavoritesAction";
import Card from "../Card/Card";
import style from "./HistoryView.module.css";

function HistoryView() {
  const dispatch = ReactRedux.useDispatch();

  const { history } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );

  return (
    <div className={style.main}>
      <h2>Tu Historial 📂</h2>
      <section className={style.prodSection}>
        {history.length > 0 ? (
          <div className={style.prod}>
            {history.map((prod) => (
              <Card
                key={prod.id}
                id={prod.id}
                name={prod.name}
                img={prod.image}
                price={prod.price}
                stock={prod.stock}
                shortDesc={prod.shortDescription}
                widthCard={375}
                heightCard={450}
                prodDetail={prod}
              />
            ))}
          </div>
        ) : (
          <h2>No hay nada en tu historial</h2>
        )}
      </section>
      {history.length > 1 ? (
        <button onClick={() => dispatch(clearHist())} className={style.btn}>
          Limpiar Historial
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HistoryView;
