import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Imagen from '../components/Imagen';
import Titulo from '../components/Titulo';
import DatosCreditosIndividuales from '../components/CreditoIndividual/DatosCreditosIndividuales';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import Foto3 from '../assets/img/Foto3.jpg';
import SaciMotor from '../assets/img/SaciMotor.png';
import SaciCrece from '../assets/img/SaciCrece.png';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const CreditoIndividual = () => {
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
      <EstilosGlobales $evitarScroll={evitarScroll} $fondoGris />
      <Helmet>
        <meta
          name='description'
          content='Obtén el impulso financiero que necesitas con nuestros créditos individuales en Opciones Sacimex.'
        />
        <title>Opciones Sacimex - Créditos individuales</title>
        <link href="https://fonts.googleapis.com/css2?family=Kalam&family=Marck+Script&family=Pacifico&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header mostrarAnimaciones={mostrarAnimaciones} evitarScroll={manejarScroll} barraVerde />
      <CentrarPrincipalContenedor>
        <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
          <Imagen
            tamano='100%'
            imagen={Foto3}
            alt='Frutería Sacimex'
            mostrarAnimaciones={mostrarAnimaciones}
            extras={imgExtras}
          />
          <TextsContainer>
            <Titulo texto='Crédito individual' />
            <StyledP>
              En <b>Opciones Sacimex</b>, obtén los mejores créditos individuales para alcanzar tus objetivos financieros.
              ¡Logra tus metas personales con nuestro respaldo financiero a tu medida!
            </StyledP>
          </TextsContainer>
        </PrincipalContenedor>
        <InformacionYBotones>
          <Botones>
            {[1, 2, 3].map(numero => (
              <BotonCredito
                key={numero}
                $activo={creditoActivo === numero}
                onClick={() => setCreditoActivo(numero)}
              >
                {creditoLabels[numero - 1]}
              </BotonCredito>
            ))}
            <BotonSaci href='/SaciAlianza'>Saci-Alianza</BotonSaci>
          </Botones>
          <Informacion>
            {creditoComponentes[creditoActivo - 1]}
            <DatosCreditosIndividuales creditoActivo={creditoActivo} />
          </Informacion>
        </InformacionYBotones>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default CreditoIndividual;

const creditoLabels = ['Saci-Motor', 'Saci-Crece', 'Línea Sacimex'];

const creditoComponentes = [
  <Imagen tamano={lengths.large[3]} imagen={SaciMotor} alt='Saci-Motor' />,
  <Imagen tamano={lengths.large[3]} imagen={SaciCrece} alt='Saci-Crece' />
];

const imgExtras = `
  clip-path: circle(95% at 12% 4%);

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
  flex-wrap: wrap;
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

const BotonSaci = styled.a`
  background-color: ${colors.yellow};
  border-radius: 3px;
  color: ${colors.text};
  ${({ $activo }) => !$activo && 'cursor: pointer;'};  
  font-size: ${fontSizes.small};
  font-weight: 800;
  padding: ${lengths.small[1]} ${lengths.small[2]};
  text-decoration: none;
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