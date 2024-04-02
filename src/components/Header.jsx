import { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-scroll';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Boton from './Boton';
import { ReactComponent as SacimexLogo } from '../assets/img/SacimexLogo.svg';
import { BloquearScroll } from '../utils/estilosPages';
import LinksData from '../components/Header/Links.json';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const Header = ({ mostrarAnimaciones, barraVerde }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [linkDesplegado, setLinkDesplegado] = useState(null);

  const usarLinks = item => {
    item === linkDesplegado ? setLinkDesplegado(null) : setLinkDesplegado(item);
  };

  return(
    <>
      <BloquearScroll $evitarScroll={isChecked}/>
      <PrincipalContenedor>
        <BotonHamburguesa
          $mostrarAnimaciones={mostrarAnimaciones}
          onClick={() => setIsChecked(!isChecked)}
        >
          <Linea $linea1 $checked={isChecked}/>
          <Linea $linea2 $checked={isChecked}/>
          <Linea $linea3 $checked={isChecked}/>
        </BotonHamburguesa>
        <LogoContenedor
          href='/Inicio'
          $mostrarAnimaciones={mostrarAnimaciones}
        >
          <SacimexLogo width={lengths.large[3]}/>
        </LogoContenedor>
        <BarraNavegacion $checked={isChecked}>
          <LinksContenedor>
            {LinksData.map((item, index) => (
              <LinkDesplegable key={index}>
                <LinkPrincipal onClick={() => usarLinks(index)}>
                  <span>{item.category}</span>
                  {linkDesplegado !== index && (<AiOutlinePlus/>)}
                  {linkDesplegado === index && (<AiOutlineMinus/>)}
                </LinkPrincipal>
                <SubLinksContenedor $desplegar={linkDesplegado === index}>
                  {index === 1 && !barraVerde ? 
                    item.subcategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          smooth={true}
                          duration={500}
                          offset={-100}
                          onClick={() => setIsChecked(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )) : 
                    item.subcategories.map((item, index) => (
                      <li key={index}><a href={`/${item.link}`}>{item.name}</a></li>
                    ))
                  }
                </SubLinksContenedor>
              </LinkDesplegable>
            ))}    
          </LinksContenedor>
          <BotonContenedor>
            <Boton referencia='/SaciAlianza' texto='Saci-Alianza' amarillo />
          </BotonContenedor>
        </BarraNavegacion>
        <Opacidad $checked={isChecked} onClick={() => setIsChecked(false)}/>
      </PrincipalContenedor>
    </>
  );
};

export default Header;

const PrincipalContenedor = styled.header`
  align-items: center;
  background: ${colors.green};
  border-bottom: 1px solid #004f25;
  display: flex;
  height: ${lengths.medium[3]};
  justify-content: space-between;
  left: 0;
  padding: 0 ${lengths.small[3]};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
`;

const LogoContenedor = styled.a`
  color: ${colors.white};
  cursor: pointer;
  margin: auto;
  opacity: ${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '1' : '0')};
  transform: translateY(
    ${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '0' : '-10px')}
  );
  transition: opacity 2s, transform 2s;
`;

const BotonHamburguesa = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${lengths.small[2]};
  justify-content: space-between;
  justify-self: start;
  opacity: ${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '1' : '0')};
  transform: translateY(
    ${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '0' : '-10px')}
  );
  transition: opacity 2s, transform 2s;
  width: ${lengths.small[3]};
  z-index: 101;
`;

const Linea = styled.span`
  background-color: ${colors.white};
  border-radius: 10px;
  display: block;
  height: 2px;
  width: 100%;

  ${({ $linea1 }) =>
    $linea1 &&
    css`
      transform: rotate(${({ $checked }) => ($checked ? '38deg' : '0')});
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    `};

  ${({ $linea2 }) =>
    $linea2 &&
    css`
      transform: scaleY(${({ $checked }) => ($checked ? '0' : '100%')});
      transition: transform 0.2s ease-in-out;
    `};

  ${({ $linea3 }) =>
    $linea3 &&
    css`
      transform: rotate(${({ $checked }) => ($checked ? '-38deg' : '0')});
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    `};
`;

const BarraNavegacion = styled.nav`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[3]};
  height: calc(100vh - ${lengths.medium[3]});
  justify-content: flex-start;
  left: ${({ $checked }) => ($checked ? '0' : '-100%')};
  max-width: 350px;
  padding: ${lengths.small[3]};
  position: fixed;
  top: ${lengths.medium[3]};
  transition: left 0.3s ease-out;
  width: 100vw;
  z-index: 100;
`;

const LinksContenedor = styled.ul`
  height: auto;
  list-style: none;
  width: 100%;
  z-index: 101;

  @media (max-height: 550px) {
    overflow: hidden scroll;
  }
`;

const LinkDesplegable = styled.li`
  border-bottom: 1px solid ${colors.disabled};
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`;

const LinkPrincipal = styled.div`
  align-items: center;
  color: ${colors.green};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizes.medium};
  font-weight: 800;
  gap: ${lengths.small[1]};
  padding: ${lengths.small[2]} 0;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const SubLinksContenedor = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  justify-content: flex-start;
  height: ${({ $desplegar }) => ($desplegar ? lengths.large[2] : '0')};
  list-style: none;
  overflow: hidden;
  transition: height 0.3s;

  a {
    border-radius: 20px;
    color: ${colors.text};
    cursor: pointer;
    display: block;
    font-size: ${fontSizes.small};
    padding: ${lengths.small[1]} ${lengths.small[2]};
    text-decoration: none;
    transition: background 0.1s, color 0.1s;

    &:hover {
      background-color: ${colors.green};
      color: ${colors.white};
    }
  }
`;

const BotonContenedor = styled.div`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.disabled};
  bottom: 0;
  display: grid;
  height: ${lengths.medium[2]};
  max-width: 350px;
  place-items: center;
  position: fixed;
  width: 100%;
  z-index: 102;
`;

const Opacidad = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);
  height: calc(100vh - ${lengths.medium[3]});
  opacity: ${({ $checked }) => ($checked ? '1' : '0')};
  position: fixed;
  right: ${({ $checked }) => ($checked ? '0' : 'calc(0px - 100vw)')};
  top: ${lengths.medium[3]};
  transition: right 0.3s, opacity 0.3s;
  width: calc(100vw - 350px);
`;