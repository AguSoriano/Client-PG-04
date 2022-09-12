import { useState } from "react";
import { FaStar } from "react-icons/fa";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export default function App() {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_m7ah49t', 'template_iz4axxm',e.target,'4qCXZmU-Iq-_Ozseo')
    .then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
    navigate("/home")
    swal({
      title: "Guardado",
      text: "Muchas gracias, será redirigido a la tienda",
      icon: "success",
      button: "Aceptar",
      timer: "3000"
    });
  }

  return (
    <div style={styles.container}>
        <h1>Gracias por su compra</h1>
      <h2> Tu opinion nos ayuda mucho a mejorar </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <form className='row' style={{margin: '25px 85px 75px 100px'}} onSubmit={sendEmail}>
        <textarea placeholder="Cual fué tu experiencia?"
        className='form-control' name= 'message' rows='4'/> 
        <input   type='submit' value='Enviar' className='form-control btn btn-primary'
        style={{marginTop:'30px'}}/>
      </form>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 25px",
    padding: 10
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 400,
    alignItems: "center"
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 400,
    padding: 10,
  }

};

