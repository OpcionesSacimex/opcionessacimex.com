import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import { ReactComponent as Constructor } from '../assets/img/Constructor.svg';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const HistoriasDeExito = () => {
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
          <Titulo texto='Historias de éxito' />
          <ImagenTextoContenedor>
            <Constructor/>
            <Parrafo>
              En <b>Opciones Sacimex</b>, creemos que cada trayectoria es un testimonio valioso. Por eso compartimos los
              logros alcanzados por nuestros clientes a través del tiempo. Únete a nosotros para celebrar estos
              triunfos y descubrir la inspiración que yace en cada camino recorrido.
            </Parrafo>
          </ImagenTextoContenedor>
          <StyledP>Pronto podrás encontrar tu historia aquí.</StyledP>
        </PrincipalContenedor>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default HistoriasDeExito;

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
  text-align: center;
  width: calc(100% - 300px - ${lengths.small[1]});

  b {
    color: ${colors.green};
  };
`;

const StyledP = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.medium};
  text-align: center;
  width: 90%;
`;