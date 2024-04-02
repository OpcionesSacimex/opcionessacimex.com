import React, { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled, { css } from 'styled-components';
import { CiInstagram, CiFacebook, CiTwitter } from 'react-icons/ci';
import Imagen from './Imagen';
import Entidad from './Footer/Entidad';
import InformacionEntidades from './InformacionEntidades';
import { ReactComponent as SacimexLogo } from '../assets/img/SacimexLogo.svg';
import SolicitudAclaracionOpcionesSacimex from '../assets/documents/Solicitud-aclaracion-Opciones-Sacimex.pdf';
import DatosEntidades from '../components/Footer/datosEntidades.json';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const Footer = ({ setWindowState }) => {
  const [entidadActivo, setEntidadActivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntidadActivo((prevValue) => (prevValue === 5 ? 0 : prevValue + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PrincipalContenedor>
      <AnimacionEntradaRedes>
        {datosRedes.map((item, index) => (
          <li key={index}>
            <Redes
              href={item.href}
              rel='noopener noreferrer'
              target='_blank'>
              {item.icon}
            </Redes>
          </li>
        ))}
      </AnimacionEntradaRedes>
      <SacimexLogo className='logoFooter'/>
      <AcercaDeContenedor $textos>
        <TextosAcercaDeContenedor>
          <li>
            <TitulosAcercaDe>Regulación</TitulosAcercaDe>
          </li>
          <li>
            <TextoAcercaDe href='#!' onClick={() => setWindowState(1)}>
              Aviso de privacidad
            </TextoAcercaDe>
          </li>
          <li>
            <TextoAcercaDe href='/Comisiones'>Comisiones y beneficios</TextoAcercaDe>
          </li>
          <li>
            <TextoAcercaDe>Dictamen técnico</TextoAcercaDe>
          </li>
        </TextosAcercaDeContenedor>
        <TextosAcercaDeContenedor>
          <li>
            <TitulosAcercaDe>Aclaraciones</TitulosAcercaDe>
          </li>
          <li>
            <TextoAcercaDe
              href={SolicitudAclaracionOpcionesSacimex}
              rel='noopener noreferrer'
              target='_blank'>
              Formato de aclaración
            </TextoAcercaDe>
          </li>
          <li>
            <TextoAcercaDe href='#!' onClick={() => setWindowState(2)}>
              Unidad Especializada UNE
            </TextoAcercaDe>
          </li>
          <li>
            <TextoAcercaDe href='#!' onClick={() => setWindowState(3)}>
              Denuncia anónima
            </TextoAcercaDe>
          </li>
        </TextosAcercaDeContenedor>
      </AcercaDeContenedor>
      <StyledDiv>
        <AcercaDeContenedor>
          {DatosEntidades.map((item, index) => (
            <Entidad
              key={index}
              activo={entidadActivo === index}
              href={item.url}
              imagen={item.imagen}
              alt={item.alt}
            />
          ))}
        </AcercaDeContenedor>
      </StyledDiv>
      <InformacionEntidades
        title={DatosEntidades[entidadActivo].title}
        description={DatosEntidades[entidadActivo].description}
      />
    </PrincipalContenedor>
  );
};

const AnimacionEntradaRedes = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <RedesContenedor $visible={isVisible} ref={targetRef}>
      {children}
    </RedesContenedor>
  );
};

export default Footer;

const datosRedes = [
  { href: 'https://www.facebook.com/sacimex', icon: <CiFacebook /> },
  { href: 'https://instagram.com/opciones__sacimex?igshid=Y2IzZGU1MTFhOQ==', icon: <CiInstagram /> },
  { href: 'https://twitter.com/sacimex?t=ZfV1WcsXKRxeFz2L39hbFA&s=09', icon: <CiTwitter /> }
];

const StyledDiv = styled.div`
  background-color: ${colors.green};
  padding-top: ${lengths.medium[1]};
  width: 100%;
`;

const PrincipalContenedor = styled.footer`
  align-items: center;
  background-color: ${colors.green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${lengths.medium[1]};
  position: relative;
  z-index: 100;

  .logoFooter {
    color: ${colors.white};
    margin-bottom: ${lengths.medium[1]};
    width: ${lengths.large[2]};
  }
`;

const RedesContenedor = styled.ul`
  display: flex;
  gap: ${lengths.medium[1]};
  list-style: none;
  margin-bottom: ${lengths.medium[1]};

  @media (min-width: 850px) {
    background-color: rgba(0, 0, 0, .50);
    bottom: ${lengths.medium[2]};
    clip-path: polygon(0% 0%, 80% 0, 100% 50%, 80% 100%, 0% 100%);
    flex-direction: column;
    gap: 0;
    height: ${lengths.large[2]};
    justify-content: space-around;
    left: 0;
    margin: 0;
    opacity: ${({ $visible }) => $visible ? '1' : '0'};
    padding-left: ${lengths.small[1]};
    position: fixed;
    transform: translateX(${({ $visible }) => $visible ? '0' : '-10px'});
    transition: opacity 2s, transform 2s;
    width: ${lengths.medium[3]};
    z-index: 20;
  };

  li {
    transition: transform .3s;

    &:hover {
      transform: scale(105%);
    };
  };
`;

const Redes = styled.a`
  color: ${colors.white};
  text-decoration: none;

  svg {
    font-size: ${lengths.small[3]};
  };
`;

const AcercaDeContenedor = styled.div`
  align-items: ${({ $textos }) => $textos ? 'flex-start' : 'center'};
  display: flex;
  justify-content: ${({ $textos }) => $textos ? 'center' : 'space-between'};
  width: 100%;

  @media (min-width: 768px) {
    justify-content: ${({ $textos }) => $textos ? 'center' : 'space-around'};
  };

  ${({ $textos }) => $textos && css`
    gap: ${lengths.medium[2]};
    padding: 0 ${lengths.small[1]};
  `};
`;

const TextosAcercaDeContenedor = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  list-style: none;
  max-width: ${lengths.large[3]};
  width: 45%;
`;

const TitulosAcercaDe = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.small};
  font-weight: 800;
  text-align: center;
`;

const TextoAcercaDe = styled.a`
  color: ${colors.white};
  cursor: pointer;
  font-size: ${fontSizes.small};
  text-align: center;
  text-decoration: none;
`;