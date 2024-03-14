import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const UnidadEspecializada = () => {
  return(
    <Texto>
      <StyledH3>¿Sabes qué es la UNE?</StyledH3>
      <Parrafo>La Ley de Protección y Defensa al Usuario de Servicios Financieros establece que cada entidad financiera 
        debe contar con una Unidad Especializada de Atención a Usuarios para atender quejas e inconformidades.</Parrafo>
      <StyledH3>¿Cómo te puede ayudar la UNE?</StyledH3>
      <Parrafo>Nuestro compromiso es brindarte la mejor experiencia posible en todos tus tratos con nosotros. Si en 
        algún momento sientes que tus expectativas no se han cumplido o tienes alguna preocupación relacionada con 
        nuestros servicios financieros, nuestras Unidades Especializadas están aquí para ayudarte de manera eficiente y 
        efectiva.</Parrafo>
      <StyledH4>Contacta con nuestra Unidad Especializada de Atención a Usuarios</StyledH4>
      <Links href='mailto:atencion_a_usuarios@opcionessacimex.com'>atencion_a_usuarios@opcionessacimex.com</Links>
      <Links href='tel:8008238544'>Tel. Gratuito: 8008238544</Links>
    </Texto>
  );
};

export default UnidadEspecializada;

const Texto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[2]};
  padding: ${lengths.medium[3]} ${lengths.small[3]};
  width: 100%;
`;

const StyledH3 = styled.h3`
  color: ${colors.text};
  font-size: ${fontSizes.medium};
  text-align: center;
`;

const Parrafo = styled.p`
  color: ${colors.label};
  font-size: ${fontSizes.small};
  text-align: justify;
  width: 100%;
`;

const StyledH4 = styled.h4`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  text-align: center;
`;

const Links = styled.a`
  color: ${colors.label};
  cursor: pointer;
  font-size: ${fontSizes.small};
  text-align: center;
  text-decoration: none;
`;