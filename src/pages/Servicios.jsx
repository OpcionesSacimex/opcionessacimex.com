import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Logo from '../components/Servicios/Logo';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import DatosLogos from '../components/Servicios/DatosLogos.json';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import { text, medLength1, medLength3, medFont } from '../utils/stylesRules';

const Servicios = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(true);
  const [evitarScroll, setEvitarScroll] = useState(false);
  const [windowState, setWindowState] = useState(null);

  useEffect(() => {
    setMostrarAnimaciones(true);
  }, []);

  const manejarScroll = (estado) => {
    setEvitarScroll(estado);
  };

  return (
    <>
      <EstilosGlobales $evitarScroll={evitarScroll} />
      <Helmet>
        <meta
          name='description'
          content='Contamos con una gama de servicios diseñados para brindarte una experiencia completa.'
        />
        <title>Opciones Sacimex - Servicios</title>
      </Helmet>
      <Header mostrarAnimaciones={mostrarAnimaciones} evitarScroll={manejarScroll} barraVerde />
      <CentrarPrincipalContenedor>
        <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo texto='Servicios' />
          <ContenedorDeLogos>
            <StyledP>En nuestras sucursales, te ofrecemos la posibilidad de pagar por los siguientes servicios:</StyledP>
            <ImagenesContenedor>
              {renderLogos('payment')}
            </ImagenesContenedor>
          </ContenedorDeLogos>

          <ContenedorDeLogos>
            <StyledP>En nuestras sucursales, también ofrecemos una variedad de servicios de remesas que incluyen:</StyledP>
            <ImagenesContenedor>
              {renderLogos('remittances')}
            </ImagenesContenedor>
          </ContenedorDeLogos>
        </PrincipalContenedor>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default Servicios;

const renderLogos = (type) => {
  return DatosLogos.map((item, index) =>
    item.type === type ? (
      <Logo key={index} href={item.ref} enlaceImagen={item.img} nombre={item.text} />
    ) : null
  );
};

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
  justify-content: flex-start;
  margin-top: ${medLength3};
  opacity: ${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '1' : '0')};
  padding: ${medLength1} 0 ${medLength3};
  transform: translateY(${({ $mostrarAnimaciones }) => ($mostrarAnimaciones ? '0' : '-10px')});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const StyledP = styled.p`
  color: ${text};
  font-size: ${medFont};
  text-align: center;
  width: 90%;
`;

const ContenedorDeLogos = styled.div`
  width: 100%;
`;

const ImagenesContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${medLength1};
  justify-content: center;
  width: 100%;
`;