import React from 'react';


function Card({name, id, img, price, stock, shortDesc}) {
  name = "Celular"
  stock= 5
  price= 123
  shortDesc= "Esta es una prueba para ver como queda"
  return (
    <div>
      <h1>{name}</h1>
      <img alt={name} src={img}/>
      <h2>$ {price}</h2>
      <h3>{stock} unidades</h3>
      <p>{shortDesc}</p>
    </div>
  )
}

export default Card