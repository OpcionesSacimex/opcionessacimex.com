import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Presentacion from '../components/Inicio/Presentacion';
import Productos from '../components/Inicio/Productos';
import Conocenos from '../components/Inicio/Conocenos';
import Sucursales from '../components/Inicio/Contacto';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { BloquearScroll } from '../utils/estilosPages';
import { BolsaTrabajoPanel } from '../components/Inicio/BolsaTabajoPanel';

const Inicio = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [windowState, setWindowState] = useState(null);
  const { id } = useParams();

  const ScrollAutomatico = () => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (id !== 'Inicio') {
      window.location.replace('/404');
    }
  };

  useEffect(() => {
    setMostrarAnimaciones(true);
    ScrollAutomatico();
  }, [id]);

  return (
    <>
      <GlobalStyle />
      <BloquearScroll $evitarScroll={windowState} />
      <Helmet>
        <meta
          name='description'
          content='Impulsando tu bienestar económico con créditos accesibles y calidez humana. Descubre nuestras opciones de créditos y servicios adaptados a tus necesidades.'
        />
        <title>Opciones Sacimex</title>
      </Helmet>
      <PrincipalContenedor>
        <Header mostrarAnimaciones={mostrarAnimaciones} />
        <Presentacion mostrarAnimaciones={mostrarAnimaciones} />
        <Productos />
        <Conocenos />
        <BolsaTrabajoPanel/>
        <Sucursales />
        <Footer setWindowState={setWindowState} />
        <Ventana windowState={windowState} setWindowState={setWindowState} />
      </PrincipalContenedor>
    </>
  );
};

export default Inicio;

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFFFFF;
    padding-top: 64px;
  } 
`;

const PrincipalContenedor = styled.main`
  width: 100%;
`;