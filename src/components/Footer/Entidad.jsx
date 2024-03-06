import { styled } from 'styled-components';
import Imagen from '../Imagen';
import {
  whiteSacimex,
  smaLength1,
  medLength3
} from '../../utils/stylesRules';

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
          extras={`background-color: ${whiteSacimex};border-radius: 5px;`}
        />
    </EntidadContainer>
  );
};

export default Entidad;

const EntidadContainer = styled.a`
  cursor: pointer;
  max-width: ${medLength3};
  opacity: ${({ $entidadActivo }) => $entidadActivo ? '1' : '0.1'};
  ${({ $entidadActivo }) => $entidadActivo && (`transform: translateY(-${smaLength1});`)}
  transition: opacity .3s, transform .3s;
  width: 16%;  
`;