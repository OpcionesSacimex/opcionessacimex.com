import { styled } from 'styled-components';
import Imagen from '../Imagen';
import { colors, lengths } from '../../utils/stylesRules';

const Entidad = ({ activo, href, imagen, alt }) => {
  return(
    <EntidadContainer
      $entidadActivo={activo}
      href={href}
      rel='noopener noreferrer'
      target='_blank'>
        <Imagen
          tamano='100%'
          imagen={imagen}
          alt={alt}
          extras={`background-color: ${colors.white};border-radius: 5px;`}
        />
    </EntidadContainer>
  );
};

export default Entidad;

const EntidadContainer = styled.a`
  cursor: pointer;
  max-width: ${lengths.medium[3]};
  opacity: ${({ $entidadActivo }) => $entidadActivo ? '1' : '0.1'};
  ${({ $entidadActivo }) => $entidadActivo && (`transform: translateY(-${lengths.small[1]});`)}
  transition: opacity .3s, transform .3s;
  width: 16%;  
`;