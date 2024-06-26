import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import { ReactComponent as Constructor } from '../assets/img/Constructor.svg';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const RedDeProfesionales = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
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
          content='¿Necesitas un experto en construcción, diseño, reparaciones o más? ¡Estás en el lugar adecuado!'
        />
        <title>Opciones Sacimex - Red de profesionales</title>
      </Helmet>
      <Header mostrarAnimaciones={mostrarAnimaciones} evitarScroll={manejarScroll} barraVerde />
      <CentrarPrincipalContenedor>
        <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
          <Titulo texto='Red de oficios' />
          <ImagenTextoContenedor>
            <Constructor/>
            <Parrafo>
              En <b>Opciones Sacimex</b>, creemos en la importancia de reconocer y respaldar las habilidades y conocimientos
              únicos que cada individuo aporta a su comunidad, es por eso que hemos decidido formalizar una red de las diversas
              profesiones y oficios de nuestros clientes y no clientes para impulsar su trayectoria y bienestar al siguiente
              nivel.
            </Parrafo>
          </ImagenTextoContenedor>
          <StyledP>¿Listo para destacar tu profesión u oficio en tu localidad? ¡Completa el formulario y forma parte de nuestra comunidad!</StyledP>
          <StyledIframe src="https://docs.google.com/forms/d/e/1FAIpQLSeThs1njygICIaPId2eol2Pnx9L_0MHspCcXGoMb7wOhbhNjQ/viewform?embedded=true" width="640" height="873" frameborder="0" marginheight="0" marginwidth="0">Cargando…</StyledIframe>
        </PrincipalContenedor>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default RedDeProfesionales;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.medium[1]};
  justify-content: flex-start;
  margin-top: ${lengths.medium[3]};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: ${lengths.medium[1]} ${lengths.medium[1]} ${lengths.medium[3]};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 880px) {
    padding: ${lengths.medium[1]} 0 ${lengths.medium[3]};
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${lengths.small[1]};
  justify-content: center;

  svg {
    width: 300px;
  }
`;

const Parrafo = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  min-width: 300px;
  text-align: justify;
  width: calc(100% - 300px - ${lengths.small[1]});

  b {
    color: ${colors.green};
  };
`;

const StyledP = styled.p`
  color: ${colors.label};
  font-size: ${fontSizes.medium};
  text-align: center;
  width: 90%;
`;

const StyledIframe = styled.iframe`
  max-width: 820px;
  width: 100%;
`;