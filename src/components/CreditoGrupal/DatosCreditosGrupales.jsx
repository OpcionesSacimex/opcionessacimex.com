import styled from 'styled-components';
import { yellowSacimex, label, smaLength1, smaLength2, smaFont, medFont } from '../../utils/stylesRules';

const CreditGroupData = ({ creditActive }) => {
  return(<>
    {creditActive === 1 && (<>
      <Paragraph>Solicita <EllaSpan>Ella-Sabiduría</EllaSpan>, es una forma de financiamiento educativo grupal de mujeres, no 
      asalariadas y con actividades totalmente productivas, las integrantes se eligen libremente y se comprometen a pagar las 
      cuotas puntualmente en el centro de reunión elegido por ellas, respaldándose entre sí en caso de dificultades.</Paragraph>
      <StyledHeading>Ventajas:</StyledHeading>
      <StyledList>
        <li>Saldo deudor y apoyo funerario básico por muerte del titular.</li>
        <li>El historial no rechaza el crédito, pero el compromiso es no empeorarlo.</li>
        <li>Sin necesidad de tener un aval, una garantía o un buen historial crediticio.</li>
        <li>Incremento máximo de $2,000 es por ciclo según comportamiento de pago.</li>
        <li>Facilita el acceso a créditos mayores en el futuro, si se cumplen los compromisos.</li>
      </StyledList>
      <StyledHeading>Características:</StyledHeading>
      <StyledList>
        <li>Grupos de mínimo 15 mujeres de 19 a 75 años.</li>
        <li>No asalariadas, ingreso máximo 10 mil por mes.</li>
        <li>Tasa global de 5.68% ($67.00 por cada mil).</li>
        <li>Montos de 3 mil a 12 mil pesos.</li>
        <li>20 pagos semanales iguales.</li>
        <li>Comisión $150 por persona.</li>
      </StyledList>
      <StyledHeading>Requisitos:</StyledHeading>
      <StyledList>
        <li>Comprobante de domicilio menor a 3 meses.</li>
        <li>Acta de nacimiento.</li>
        <li>INE vigente.</li>
      </StyledList>
    </>)}
    {creditActive === 2 && (<>
      <Paragraph>¡Disfruta <DamasSpan>Da-más crédito</DamasSpan> ! tu siguiente nivel de crecimiento financiero. Este crédito se 
      basa en la confianza y la solidaridad de grupos reducidos de mujeres que pueden ejercen cualquier actividad económica 
      lícita con capacidad suficiente para montos de hasta 60 mil pesos en pagos fijos.</Paragraph>
      <StyledHeading>Ventajas:</StyledHeading>
      <StyledList>
        <li>Saldo deudor y apoyo funerario básico por muerte.</li>
        <li>Sin más avales que tu grupo y tu puntuación de crédito.</li>
        <li>Incrementos de acuerdo a capacidad y montos trabajados.</li>
        <li>Fomenta el trabajo en equipo, la cooperación y el apoyo mutuo.</li>
        <li>Sin comisiones y libertad de destino comercial, consumo o vivienda.</li>
        <li>Facilita el acceso a créditos mayores o adicionales según comportamiento.</li>
      </StyledList>
      <StyledHeading>Características básicas:</StyledHeading>
      <StyledList>
        <li>Grupos de 5 a 12 mujeres de 19 a 75 años.</li>
        <li>Montos secuenciales de 5 mil a 60 mil pesos.</li>
        <li>Plazos de 4, 5, 6 y 7 meses con pagos iguales.</li>
        <li>Pago semanales, catorcenales o quincenales.</li>
        <li>Tasas sobre saldos insolutos menores cada ciclo.</li>
        <li>Primer ciclo: $55 semanales por 6 meses por cada $1,000.</li>
      </StyledList>
      <StyledHeading>Requisitos:</StyledHeading>
      <StyledList>
        <li>Comprobante de domicilio menor a 3 meses.</li>
        <li>Verificación económica o visita domiciliaria.</li>
        <li>Acta de nacimiento.</li>
        <li>INE vigente.</li>
      </StyledList>
    </>)}
    {creditActive === 3 && (<>
      <Paragraph>¡Descubre <SomosSpan>Somos Crédito</SomosSpan>! Un innovador crédito grupal mixto y reducido, diseñado para 
      emprendedores que valoran la cooperación y el apoyo mutuo entre los integrantes que logran sus metas con un objeto en 
      común, sin distinción de género o actividad económica.</Paragraph>
      <StyledHeading>Ventajas:</StyledHeading>
      <StyledList>
        <li>Saldo deudor y apoyo funerario básico por muerte.</li>
        <li>Sin más avales que tu grupo y tu puntuación de crédito.</li>
        <li>Incrementos de acuerdo a capacidad y montos trabajados.</li>
        <li>Sin comisiones y libertad de destino comercial, consumo o vivienda.</li>
        <li>Facilita el acceso a créditos mayores o adicionales según comportamiento.</li>
      </StyledList>
      <StyledHeading>Características básicas:</StyledHeading>
      <StyledList>
        <li>De 5 a 12 integrantes con un 20% de hombres.</li>
        <li>Montos secuenciales de 5 mil a 60 mil pesos.</li>
        <li>Plazos de 4, 5, 6 y 7 meses con pagos iguales.</li>
        <li>Pago semanales, catorcenales o quincenales.</li>
        <li>Tasas sobre saldos insolutos menores cada ciclo.</li>
        <li>Primer ciclo: $55 semanales por 6 meses por cada $1,000.</li>
      </StyledList>
      <StyledHeading>Requisitos:</StyledHeading>
      <StyledList>
        <li>Grupos de 5 a 12 personas de 19 a 75 años.</li>
        <li>Conformado con un máximo de 20% de hombres.</li>
        <li>Comprobante de domicilio menor a 3 meses.</li>
        <li>Verificación económica o visita domiciliaria.</li>
        <li>Acta de nacimiento.</li>
        <li>INE vigente.</li>
      </StyledList>
    </>)}
  </>);
};

export default CreditGroupData;

const Paragraph = styled.p`
  color: ${label};
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;
`;

const StyledSpan = styled.span`
  font-size: 1.428em;
`;

const EllaSpan = styled(StyledSpan)`
  color: #F65E1D;
  font-family: 'Dancing Script', cursive;
`;

const DamasSpan = styled(StyledSpan)`
  color: #C90076;
  font-family: 'Caveat', cursive;
`;

const SomosSpan = styled(StyledSpan)`
  color: #00AB56;
  font-family: 'Shadows Into Light', cursive;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0 ${smaLength2};
  text-align: justify;
  width: 100%;

  li {
    color: ${label};
    font-size: ${smaFont};
    padding-bottom: ${smaLength1};
  }

  li::before {
    color: ${yellowSacimex};
    content: "»";
    font-size: ${medFont};
    margin-right: ${smaLength1};
  }
`;

const StyledHeading = styled.h3`
  color: ${label};
  font-size: ${smaFont};
  text-align: center;
`;
