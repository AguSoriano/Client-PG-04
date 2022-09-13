import React from 'react'; 
import style from './Testimonio.module.css';

function Testimonio(props) {

  return (
    <div className={style.contenedor_testimonio}>
      <img
      className={style.imagen_testimonio}
      src={require(`../../imagenes/testimonio-${props.imagen}.jpeg`)}
      alt= 'Foto' /> 
      <div className={style.contenedor_texto_testimonio}>
        <p className={style.nombre_testimonio}>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className={style.cargo_testimonio}>
          {props.cargo}</p>
        <p className={style.texto_testimonio}>"{props.testimonio}"</p>
      </div>
      <div className={style.redes_sociales}>
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                        <img className={style.img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
                    </a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <img className={style.img}  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="gitHub" />
                    </a>
                    </div>
    </div>
  );
  }
  export default Testimonio;