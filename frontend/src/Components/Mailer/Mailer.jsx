import React from 'react'
import emailjs from "emailjs-com";
import swal from "sweetalert";
  
function Mailer() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_m7ah49t', 'template_gvdmvwq',e.target,'4qCXZmU-Iq-_Ozseo')
    .then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
    swal({
      title: "Pedido Exitoso",
      text: "En breve recibirá un correo confirmando la compra",
      icon: "success",
      button: "Aceptar",
      timer: "2500"
    });
    emailjs.sendForm('service_m7ah49t', 'template_iz4axxm',e.target,'4qCXZmU-Iq-_Ozseo')
    .then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
  //password: _C$WJH6*F-hp*-T
  return (
    <div className='container border'
    style={{padding:'20px',
    width: '100%',
    backgroundImage: `url("https://lh3.googleusercontent.com/pw/AL9nZEUylurEW8WS1nW6Bvzd8dqHiBsIYo1oOgKpVKXWMONT4BoroO6qTpw3347dqIdzXYDasUEVt_RfS2VW_c_JW6UeX0lQiKrl7NkWIB1HTbOWhcUaOcSRFKSFPNfZX3SNGS_Ok_JSwigMvZj57ExzPLFdsw=w884-h663-no?authuser=0")`,
    backgroundPosition:'center',
    backgroundSize: 'cover',
    }}>
      <h1 style={{marginTop:'25px'}}>Contacto</h1>
      <form className='row' style={{margin: '25px 85px 75px 100px'}} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type= 'text' name='name' className='form-control'/>
        <label>Email</label>
        <input type= 'email' name='user_email' className='form-control'/> 
        <label>Direccion de envio</label>
        <input type= 'text' name='address' className='form-control'/>
        <label>Mensaje</label>
        <textarea name= 'message' rows='4' className='form-control'/> 
        <input type='submit' value='Enviar' className='form-control btn btn-primary'
        style={{marginTop:'30px'}}/>
      </form>
    </div>
  )
}

export default Mailer