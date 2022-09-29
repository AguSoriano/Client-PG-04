import { useState } from "react";
import styled from "styled-components";
import UiComponents from "./UiComponents";
import db from "./Firebase";
import firebase from "firebase/app";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      // add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setMessage("Gracias por tu subscripción!!!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    emailjs.sendForm('service_m7ah49t', 'template_iz4axxm',e.target,'4qCXZmU-Iq-_Ozseo')
    .then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
    navigate("/")
    swal({
      title: "Guardado",
      text: "Muchas gracias, será redirigido a la tienda",
      icon: "success",
      button: "Aceptar",
      timer: "3000"
    });
  };
  return (
    <Div className="App">
      <Container>
        <UiComponents />
        <Form onSubmit={submitHandler}>
          <H2>Subscribete a nuestro Boletín</H2>
          <Input type="email" onChange={inputHandler} placeholder="Correo..." value={input} name= 'message' required/>
          <Button type="submit">Enviar</Button>
        </Form>
        {message && <Alert>{message}</Alert>}
      </Container>
    </Div>
  );
}
const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #414345, #232526);
  overflow: hidden;
`;
const Container = styled.div`
  position: relative;
`;
const Form = styled.form`
  position: relative;
  padding: 3rem;
  min-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 30px #333;
  background: rgba(255, 255, 255, 0.1);
  border: solid 1px rgba(255, 255, 255, 0.2);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  z-index: 2;
`;
const H2 = styled.h2`
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: none;
  width: 80%;
  outline: none;
  color: #cf1d22;
`;
const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  width: 20%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 0 10px 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
`;
const Alert = styled.p`
  position: relative;
  padding: 0.4rem;
  margin: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 3;
`;
export default App;