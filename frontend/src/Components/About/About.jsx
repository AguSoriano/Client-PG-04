
import style from './About.module.css';
import Testimonio from './Testimonio.jsx';

function App() {
  return (
    <div className={style.App}>
      <h1>Sobre el proyecto</h1>
      <h5>Canne-Food es nuestro proyecto de graduación en Henry, fue desarrollado bajo la metodología ágil SCRUM que fue monitoriada diariamente por personal de Henry. Cane-Food es un market place para todos los amantes de las comidas y bebidas sanas. Busca a partir de su interface gráfica, jerarquizar los productos y utilizando elementos con fuerte carga semántica, establece un vínculo de pertenencia con el usuario. Funcionalmente posee búsqueda predictiva, sistema de notificaciones, validación de cuenta, métodos ágiles de log-In y todo lo que un market place real requiere para funcionar. Esperamos que les guste el resultado, para nosotros fue todo un desafío poder realizarlo y gracias a él, hoy somos desarrolladores Full Stack en javaScript.</h5>
      <div className={style.contenedor_principal}>

        <Testimonio
          nombre='Agustin Soriano'
          pais='Argentina'
          imagen='AgustinSoriano'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/agustin-soriano-027876119/"
          github="https://github.com/AguSoriano" />

        <Testimonio
          nombre='Lucia Costamagna'
          pais='Argentina'
          imagen='LuciaCostamagna'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/luciacostamagna/"
          github="https://github.com/Lucostamagna" />

        <Testimonio
          nombre='Federico Eloy Fucci'
          pais='Argentina'
          imagen='FedericoEloyFucci'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/federico-eloy-fucci-87664357/"
          github="https://github.com/federicofucci21" />

        <Testimonio
          nombre='Mario Caballero'
          pais='Argentina'
          imagen='MarioCaballero'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/mario-a-caballero/"
          github="https://github.com/marioacaballero" />

        <Testimonio
          nombre='Vanesa Gabioud'
          pais='Argentina'
          imagen='VanesaGabioud'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin=""
          github="https://github.com/vanegabioud" />

        <Testimonio
          nombre='Eduardo Hidalgo'
          pais='Venezuela'
          imagen='EduardoHidalgo'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/hidalgoeduardo/"
          github="https://github.com/hidalgo86" />

        <Testimonio
          nombre='Sofia Gonzalez'
          pais='Argentina'
          imagen='SofiaGonzalez'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/sofia-gonzalez-zapiola/"
          github="https://github.com/ChofGonzalez" />

        <Testimonio
          nombre='Carlos Perez'
          pais='Venezuela'
          imagen='CarlosPerez'
          cargo='Full-Stack'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga.'
          linkedin="https://www.linkedin.com/in/cperlovan/"
          github="https://github.com/cperlovan" />
      </div>
    </div>
  );
}

export default App;