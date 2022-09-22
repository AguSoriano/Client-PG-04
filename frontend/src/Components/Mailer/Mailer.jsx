import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import * as ReactRedux from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { clearOnlyCart, editStock } from "../../redux/actions/Cart/CartAction";
import { getProducts } from "../../redux/actions/Products/ProductsAction";
import style from "./Mailer.module.css"
import { BsPersonFill } from "react-icons/bs";

export default function Mailer() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const { cartproduct } = ReactRedux.useSelector((state) => state.cartReducer);

  useEffect(() => {
    refreshStock();
  }, [dispatch]);


  const refreshStock = () => {
    // const items = JSON.parse(window.localStorage.getItem("cartState"));
    cartproduct.map((e) => {
      let stock = e.quantity;
      console.log("MAILERSTOCK", stock)
      let id = e.prodDetail.id;
      console.log("IDSTOCK", id)
      let data = { stock, id };
      dispatch(editStock(data));

      dispatch(getProducts())
    });
  };

  const clearCart = () => {
    dispatch(clearOnlyCart(loginUser));
  };
  // console.log(clearCart());
  const navigate = useNavigate();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m7ah49t",
        "template_gvdmvwq",
        e.target,
        "4qCXZmU-Iq-_Ozseo"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    navigate("/products/contact/reviews");
    swal({
      title: "Pedido Exitoso",
      text: "En breve recibirá un correo confirmando la compra",
      icon: "success",
      button: "Aceptar",
      timer: "3000",
    });
  }
  //password: _C$WJH6*F-hp*-T
  return (
    <div className={style.div}>
  
      <h1 style={{ marginTop: "25px" }}>Contacto <BsPersonFill fontSize="2rem"/></h1>
      <form className={style.form} onSubmit={sendEmail}>
      <label>Apellido y Nombre</label>
        <textarea name="lastname" className="form-control">
          {loginUser.family_name + " " + loginUser.given_name}
        </textarea>
        <label>Contacto</label>
        <input
          type="number"
          name="number"
          className="form-control"
          placeholder="¿Cuál es tu número de celular?"
          required
        />
        
        <label>Dirección de envio</label>
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="¿Cuál es tu dirección?"
          required
        />
        <label>Dirección de E-mail</label>
        <textarea name="user_email" className="form-control">
          {loginUser.email}
        </textarea>

        <label>Mensaje</label>
        <textarea
          name="message"
          className="form-control"
          placeholder="Mensaje de referencia"
        />
        <input
        style={{ marginTop: "2rem" , color:"black"}}
          onClick={clearCart}
          type="submit"
          value="Enviar"
          className={"form-control btn btn-primary"}
          
        />
      </form>
    </div>
  );
}
