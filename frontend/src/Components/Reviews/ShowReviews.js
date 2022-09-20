import { useState} from "react";
import * as ReactRedux from "react-redux";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from "./Rating";
import moment from "moment";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";
import style from "./Reviews.module.css";
import { createShowReviews } from "../../redux/actions/Reviews/ShowReviewsActions";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const validador = (input) => {
  
  let error = {};
  if (!input.description) {
    error.name = "Debe registrar un comentario";
  }
  return error;
};

export default function ShowReviews(prodDetailReviews) {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  moment.locale("es");
  const handleClick = (value) => {
    setCurrentValue(value);
    setInput({
      ...input,
      ranking: value
    });
 
  };


  const {   isAuthenticated } = useAuth0();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

   const { prodDetail } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );
   

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    description: "",
    
  });

  const handleInputChange = (evento) => {
    evento.preventDefault();

    setErrors(
      validador({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );

    setInput({
      ...input,
      [evento.target.name]: evento.target.value,
      productId: prodDetailReviews.prodDetail.id,
        userId: loginUser.id
    });
  };
 
   
  function handleSubmit(e){
    e.preventDefault();
    if (!errors.name ) {
      dispatch(createShowReviews(input));
      setInput({
        description: "",
        ranking: "",
        productId:"", //prodDetailReviews.prodDetail.id,
        userId: "" //loginUser.id
      });
    }
    navigate("/home")
    swal({
      title: "Guardado",
      text: "Muchas gracias, será redirigido a la tienda",
      icon: "success",
      button: "Aceptar",
      timer: "3000"
    });
  }

  const reviews = prodDetailReviews.prodDetail.reviews;
  const totalreviews = reviews?.length
  function prom (reviews){
    let summ = 0
    var i =0
    while (i < Number(totalreviews)) {
      summ = summ + Number(reviews[i++]?.ranking)
    }
    return parseInt(summ/totalreviews);
  }
    let value = prom(reviews)
 
  // const dispatch = ReactRedux.useDispatch();


  return (
    <div className={style.container} key={prodDetail.id}>
      <div className={style.wrapper}>
        <div className={style.headReviews}>
            <h5><strong>{ totalreviews } - Reviews</strong> </h5>
            <h5 className={style.title}><strong>{prodDetail.name}</strong>{" "} </h5>
            <h5 className={style.starsProm}><Rating rating={value} /></h5>
        </div>
         <hr />
        {reviews?.map((r) => {
          return (
            <div className={style.contenedor}>
              {/* <div>
                <img
                  className={style.img}
                  src="https://lh3.googleusercontent.com/a-/AFdZucoylNDBF8SqsDwJUTWMyb4DN_dNmHF-pqjUIP8agw=s96-c"
                  alt="not found"
                />
              </div> */}
              <div className={style.date}>
                {/* <p>cperlovan</p>  */}
                <span className={style.date}>
                  {moment(r.createdAt, "YYYYMMDD").fromNow()}
                </span>{" "}
              </div>
              <div className={style.item}>{r.description}</div>
              <div className={style.stars}>
                <Rating rating={r.ranking} />
              </div>
            </div>
          );
        })}
      {isAuthenticated 
      ? <div>
      <h5 >Cu&aacute;ntas estrellas merece nuestro producto: <strong>{prodDetail.name}</strong> </h5>
      <div className={style.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
         onSubmit={(e)=>handleSubmit(e)}
      >
        <textarea
          placeholder="Conoces este producto, tu opini&oacute;n es muy importante para nosotros?"
          className="form-control"
          name="description"
          rows="4"
           onChange={(e) => handleInputChange(e)}
        />
        <input
          type="submit"
          value="Enviar"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
      </div>
      : <div></div>
      }
      </div>
    </div>
  );
}
