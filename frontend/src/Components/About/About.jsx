import style from "./About.module.css";
import Testimonio from "./Testimonio.jsx";

function App() {
  return (
    <div className={style.App}>
      <h5>
        Cane-Food es nuestro proyecto de graduación en Henry, fue desarrollado
        bajo la metodología ágil SCRUM que fue monitoriada diariamente por
        personal de Henry. Cane-Food es un market place para todos los amantes
        de las comidas y bebidas sanas. Busca a partir de su interface gráfica,
        jerarquizar los productos y utilizando elementos con fuerte carga
        semántica, establece un vínculo de pertenencia con el usuario.
        Funcionalmente posee búsqueda predictiva, sistema de notificaciones,
        validación de cuenta, métodos ágiles de log-In y todo lo que un market
        place real requiere para funcionar. Esperamos que les guste el
        resultado, para nosotros fue todo un desafío poder realizarlo y gracias
        a él, hoy somos desarrolladores Full Stack en javaScript.
      </h5>
      <div className={style.contenedor_principal}>
        <Testimonio
          nombre="Agustin Soriano"
          pais="Argentina"
          imagen="AgustinSoriano"
          cargo="Full-Stack"
          testimonio="Me defino a mí mismo cómo una persona proactiva, ambiciosa, con fuertes valores morales, con un excelente manejo de las relaciones interpersonales y una buena dinámica de trabajo en equipo, orientada hacia el alcance de los objetivos propuestos."
          linkedin="https://www.linkedin.com/in/agustin-soriano-027876119/"
          github="https://github.com/AguSoriano"
        />

        <Testimonio
          nombre="Lucia Costamagna"
          pais="Argentina"
          imagen="LuciaCostamagna"
          cargo="Full-Stack"
          testimonio="La programación me desafía y me hace crecer día a día. Tengo siempre objetivos claros y me esfuerzo  por conseguirlos y dar lo mejor de mi en ellos. Me llamo Lucia, soy docente y Full Stack Developer y formé parte del equipo de Front-End en este proyecto."
          linkedin="https://www.linkedin.com/in/luciacostamagna/"
          github="https://github.com/Lucostamagna"
        />

        <Testimonio
          nombre="Federico Eloy Fucci"
          pais="Argentina"
          imagen="FedericoEloyFucci"
          cargo="Full-Stack"
          testimonio='Me llamo Federico y actualmente estoy llevando adelante un objectivo claro: insertarme en el mundo IT. 
          Es por eso que di mis primeros pasos como "Desarrollador Web Full Stack" de la mano de Henry. 
          Actualmente estoy finalizando mis estudios, para lo cual con mi grupo hemos desarrollado un e-commerce para mi actual trabajo, un microemprendimiento de medallones vegetarianos. Utilizamos para su desarrollo tecnologias como React, Redux, Node Js., Express, sequelice. 
          Esto y pasadas experiencias me han dado grandes capacidades en toma de desiciones y liderazgo, asi como tambien la necesidad de ponerme a prueba en situaciones cambiantes y adquirir conocimientos escenciales por mi cuenta.           
          Me adapto rapido, tengo verdadero amor por el conocimiento y me gustan los nuevos desafios.          
          Encontre en el desarrollo web y el universo IT mi verdadera pasión.'
          linkedin="https://www.linkedin.com/in/federico-eloy-fucci-87664357/"
          github="https://github.com/federicofucci21"
        />

        <Testimonio
          nombre="Mario Caballero"
          pais="Argentina"
          imagen="MarioCaballero"
          cargo="Full-Stack"
          testimonio="Hola soy Mario, desarrollador e ingeniero. Me gusta trabajar en equipo, optimizar el trabajo y conocer nuevas tecnologías. Soy muy autodidacta, proactivo y con pensamiento critico. Disfruto practicar deporte y leer. Durante el proyecto me desarrolle como Full Stack, liderando al equipo y aportando en mayor medida al Front-end y experiencia de usuario."
          linkedin="https://www.linkedin.com/in/mario-a-caballero/"
          github="https://github.com/marioacaballero"
        />

        <Testimonio
          nombre="Vanesa Gabioud"
          pais="Argentina"
          imagen="VanesaGabioud"
          cargo="Full-Stack"
          testimonio="Hola soy Vanesa, desarrolladora Front-end y enfermera de profesión. Me apasiona la tecnología y el diseño, me gusta trabajar en equipo y tengo facilidad de aprendizaje. En el proyecto me desarrolle especialmente como Front-end, mayormente abocada al diseño y experiencia de usuario."
          linkedin=""
          github="https://github.com/vanegabioud"
        />

        <Testimonio
          nombre="Eduardo Hidalgo"
          pais="Venezuela"
          imagen="EduardoHidalgo"
          cargo="Full-Stack"
          testimonio="Los desafíos son mi pasión. Soy Eduardo Hidalgo, ingeniero químico y actualmente Desarrollador Full Stack. Me caracterizo por ser curioso y detallista, lo cual me impulsa a profundizar en todo lo que hago. Todo proyecto implica una gran responsabilidad y compromiso, pero deja una enorme satisfacción al adquirir nuevos conocimientos. Mi mayor contribución en este proyecto se centró en el backend. Donde compartí con un gran equipo de trabajo y mi mayor aprendizaje fue en la integración de medios de pago."
          linkedin="https://www.linkedin.com/in/hidalgoeduardo/"
          github="https://github.com/hidalgo86"
        />

        <Testimonio
          nombre="Sofia Gonzalez"
          pais="Argentina"
          imagen="SofiaGonzalez"
          cargo="Full-Stack"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones en Henry, cambió mi vida y ahora se que puedo lograr lo que sea que me proponga."
          linkedin="https://www.linkedin.com/in/sofia-gonzalez-zapiola/"
          github="https://github.com/ChofGonzalez"
        />

        <Testimonio
          nombre="Carlos Perez"
          pais="Venezuela"
          imagen="CarlosPerez"
          cargo="Full-Stack"
          testimonio="Hola.... Mi nombre es Carlos, conocer a fondo Javascript, react, redux, entre tantas cosas que aprendí en estos últimos días, me fortalece como profesional del área y ya tengo muchas ganas de aplicar lo aprendido. Me encanta el desarrollo de soluciones que den respuesta a problemas de gestión o control de tareas u oficios.
          En el proyecto trabajé en ambos ambientes y fue una experiencia notable, tanto en el aspecto de desarrollador, como ser humano. Trabajar con personas a quienes les llevo muchos  años y mantenerme al ritmo de ellos, me da mucha satisfacción y orgullo. Esto y mi familia me da mucha energía para vivir y continuar luchando."
          linkedin="https://www.linkedin.com/in/cperlovan/"
          github="https://github.com/cperlovan"
        />
      </div>
    </div>
  );
}

export default App;
