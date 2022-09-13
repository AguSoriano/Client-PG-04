import styled from "styled-components";

const StyledContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledTextBox = styled.div`
width: 50%;
text-align: justify;
`

const Terms = () => {
    return(
        <StyledContainer>
            <h2>Términos y condiciones de uso de Canne-Food</h2>
            <StyledTextBox>
                En este documento se describen todos los términos que el Usuario debe cumplir de forma obligatoria para hacer uso del sitio. En caso de no aceptar los términos, el Usuario quedará imposibilitado del uso del mismo. Al aceptar los mismos acepta, asimismo, como inapelables aquellas medidas que la Administración considere pertinentes sobre su comportamiento futuro.

                <br/><br/><strong>01 - Alcance</strong><br/><br/>
                Los servicios brindados por Canne-Food están únicamente disponibles para personas mayores de 18 (dieciocho) años de edad y/o aquellas tiendas oficiales que acrediten ante la Administración la documentación correspondiente.

                <br/><br/><strong>02 - Registro</strong><br/><br/>
                El Usuario deberá completar todos los campos requeridos en el formulario de registro con información real y se compromete a actualizar los mismos oportunamente. Canne-Food no se responsabiliza por la certeza de los datos provistos por el Usuario, siendo ésta expresa responsabilidad suya.
                En caso de la inhabilitación del Usuario, se darán de baja todas las publicaciones que el mismo haya realizado.
                La cuenta de Canne-Food tiene carácter de única e intransferible, por lo que el Usuario podrá poseer únicamente UNA, quedando penada la ruptura de esta norma con la inhabilitación (por tiempo indeterminado) del Usuario.  

                <br/><br/><strong>03 - Modificaciones del Acuerdo</strong><br/><br/>
                Canne-Food podrá modificar en cualquier momento el contenido de sus términos y condiciones de uso, quedando exento de cualquier reclamo al respecto y teniendo la obligación de comunicarlo a sus Usuarios a través de los canales de comunicación propios del sitio.

                <br/><br/><strong>04 - Listado de Bienes</strong><br/><br/>
                4.1 Utilización de Stripe
                Al publicar un artículo en el Sitio, tanto el Usuario vendedor como el Usuario comprador consienten expresamente la utilización de Mercado Pago como la forma de pago del bien o servicio. Asimismo, el usuario declara que ha leído, comprendido y aceptado los Términos y Condiciones de utilización de dicho servicio.
                <br/><br/>
                4.2 Publicación de bienes y/o servicios
                El Usuario podrá publicar sus artículos únicamente en las categorías disponibles y apropiadas para cada bien. Las publicaciones podrán incluir descripciones y fotografías relacionadas al producto y que no atenten contra lo dispuesto en el presente documento. Quedará a criterio de la Administración sancionar aquellas publicaciones que considere inapropiadas.
                <br/><br/>
                4.3 Artículos Prohibidos
                Sólo podrán ser publicados aquellos productos que no atenten contra la vigencia de las normas dispuestas por el Código Civil y Comercial y la Constitución Nacional de la República Argentina.
                <br/><br/><strong>05 - Prohibiciones</strong><br/><br/>
                Los Usuarios no podrán: 1- mantener diálogos por canales ajenos al sitio, de lo contrario se procederá a la inhabilitación de los Usuarios parte y no existirá garantía alguna sobre la transacción en cuestión; 2- dar a conocer sus datos personales o de otros usuarios a través de los canales propios del sitio y sus redes sociales; 3- publicar o vender artículos prohibidos por la sección anterior; 4- insultar, discriminar o agredir a otros Usuarios o Administradores de Canne-Food; 5- publicar artículos repetidos con distintos precios.

                <br/><br/><strong>09 - Sanciones. Suspensión de operaciones</strong><br/><br/>
                En caso de que se incumpliesen cualquiera de las normas anteriores, Canne-Food estará facultado para proceder con la inhabilitación (por tiempo indeterminado) del Usuario, e iniciar las acciones que considere pertinentes contra el mismo.

                <br/><br/><strong>10 - Responsabilidad</strong><br/><br/>
                Canne-Food no se responsabiliza por ningún inconveniente surgido de la compra/venta de los bienes publicados, siendo el sitio únicamente un espacio de encuentro entre compradores y vendedores. Asimismo, el sitio no se hace responsable de los posibles perjuicios a raíz de fallas técnicas o de Internet, siendo estos factores de riesgo a asumir enteramente por los Usuarios, tanto compradores como vendedores.
            </StyledTextBox>
        </StyledContainer>
    )
}

export default Terms;