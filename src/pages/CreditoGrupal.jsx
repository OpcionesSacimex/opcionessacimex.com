import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import DatosCreditosGrupales from '../components/CreditoGrupal/DatosCreditosGrupales';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import somosCredito from '../assets/img/SomosCredito.png';
import DamasCredito from '../assets/img/Damas.png';
import EllaSabiduria from '../assets/img/ELLA.png'
import FotoGrupal from '../assets/img/FotoGrupal.jpg';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const CreditoGrupal = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [creditoActivo, setCreditoActivo] = useState(1);
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
      <EstilosGlobales/>
      <Helmet>
        <meta
          name='description'
          content='Potencia tus proyectos con créditos grupales en Opciones Sacimex.'
        />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script:wght@700&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        <title>Opciones Sacimex - Créditos grupales</title>
      </Helmet>
      <Header
        mostrarAnimaciones={mostrarAnimaciones}
        evitarScroll={manejarScroll}
        barraVerde
      />
      <CentrarPrincipalContenedor>
        <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
          <TextsContainer>
            <Titulo texto='Crédito grupal' />
            <StyledP>
              Descubre en <b>Opciones Sacimex</b> los mejores créditos grupales para comunidades unidas.
              ¡Transforma tus metas en realidad con nuestros créditos compartidos y apoyo financiero comunitario!
            </StyledP>
          </TextsContainer>
          <Imagen
            tamano='100%'
            imagen={FotoGrupal}
            alt='Crédito grupal Sacimex'
            extras={imgExtras}
            mostrarAnimaciones={mostrarAnimaciones}
          />
        </PrincipalContenedor>
        <InformacionYBotones>
          <Botones>
            {[1, 2, 3].map((numero) => (
              <BotonCredito
                key={numero}
                $activo={creditoActivo === numero}
                onClick={() => setCreditoActivo(numero)}
              >
                {creditoLabels[numero - 1]}
              </BotonCredito>
            ))}
          </Botones>
          <Informacion>
            {creditoComponentes[creditoActivo - 1]}
            <DatosCreditosGrupales creditActive={creditoActivo} />
          </Informacion>
        </InformacionYBotones>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default CreditoGrupal;

const creditoLabels = ['Ella-Sabiduría', 'Da-más crédito', 'Somos crédito'];

const creditoComponentes = [
  <Imagen tamano={lengths.large[3]} imagen={EllaSabiduria} alt='Ella-Sabiduría' />,
  <Imagen tamano={lengths.large[3]} imagen={DamasCredito} alt='Da-Más crédito' />,
  <Imagen tamano={lengths.large[3]} imagen={somosCredito} alt='Somos crédito' />
];

const imgExtras = `
  clip-path: circle(95% at 88% 4%);

  @media (min-width: 550px) {
    width: 80%;
  };

  @media (min-width: 850px) {
    width: 50%;
  };
`;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${lengths.small[3]};
  justify-content: center;
  margin-top: ${lengths.medium[3]};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding-bottom: ${lengths.medium[1]};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 850px) {
    gap: 0;
  };
`;

const TextsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[3]};
  width: 100%;

  @media (min-width: 850px) {
    width: 50%;
  };
`;

const StyledP = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  padding: 0 ${lengths.small[3]};
  text-align: center;

  @media (min-width: 850px) {
    padding: 0;
  };

  b {
    color: ${colors.green};
  };
`;

const InformacionYBotones = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${lengths.medium[1]};
  max-width: 820px;
  width: 100%;
`;

const Botones = styled.div`
  display: flex;
  gap: ${lengths.small[1]};
`;

const BotonCredito = styled.button`
  background-color: ${({ $activo }) => $activo ? colors.white : colors.yellow};
  border: ${({ $activo }) => $activo ? `1px solid ${colors.disabled}` : 'none'};
  border-radius: 3px;
  color: ${colors.text};
  ${({ $activo }) => !$activo && 'cursor: pointer;'};  
  font-size: ${fontSizes.small};
  font-weight: 800;
  padding: ${lengths.small[1]} ${lengths.small[2]};
  transition: background .3s;
`;

const Informacion = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.medium[2]};
  padding: ${lengths.small[3]};
  width: 100%;
`;