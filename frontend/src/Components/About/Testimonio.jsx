import React from 'react'; // esto te permite usar el poder de React
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
    </div> // los ..(dos puntos) de src son para indicar que suba una carpeta
  );
  }
  export default Testimonio;