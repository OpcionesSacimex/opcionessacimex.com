import React, { useState, useEffect } from 'react';
import {styled} from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import PreviewLink from '../components/EducacionFinanciera/PreviewLink';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor } from '../utils/estilosPages';
import ImagenEducacion from '../assets/img/EducacionFinanciera.jpg';
import PreviewInclusionFinancieraDeLasMujeres from '../assets/img/PreviewInclusionFinancieraDeLasMujeres.jpg';
import PreviewConsejosParaElRegresoAClases from '../assets/img/PreviewConsejosParaElRegresoAClases.jpg';
import PreviewFinanzasJovenes from '../assets/img/PreviewFinanzasJovenes.jpg';
import PreviewConduguiasYFolletos from '../assets/img/PreviewConduguiasYFolletos.jpg';
import PreviewCuadernos from '../assets/img/PreviewCuadernos.jpg';
import {
  greenSacimex,
  text,
  smaLength3,
  medLength2,
  medLength3,
  smaFont,
  medFont
} from '../utils/stylesRules';

const EducacionFinanciera = () => {
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
          content='Aprende a administrar tu dinero, invertir con inteligencia y planificar tu futuro financiero.'
        />
        <title>Opciones Sacimex - Educación Financiera</title>
      </Helmet>
      <Header mostrarAnimaciones={mostrarAnimaciones} evitarScroll={manejarScroll} barraVerde />
      <CentrarPrincipalContenedor>
        <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
          <Presentation>
            <Imagen
              tamano='100%'
              imagen={ImagenEducacion}
              alt='Educación financiera'
              extras={imgExtras}
            />
            <TextsContainer>
              <Titulo texto='Educación financiera' />
              <Parrafo>
                Descubre el camino hacia un futuro financiero sólido y próspero con nuestra sección de Educación Financiera.
                En <OpcionesSacimex>Opciones Sacimex</OpcionesSacimex>, creemos en empoderar a nuestros clientes con conocimientos
                clave para tomar decisiones financieras informadas y alcanzar sus metas económicas con confianza.
              </Parrafo>
            </TextsContainer>
          </Presentation>
          <StyledP>Te presentamos algunas páginas para consultar sobre educación financiera:</StyledP>
          <PreviewsContenedor>
            {previews.map((preview, index) => (
              <PreviewLink key={index} {...preview} />
            ))}
          </PreviewsContenedor>
        </PrincipalContenedor>
      </CentrarPrincipalContenedor>
      <Footer setWindowState={setWindowState} />
      <Ventana windowState={windowState} setWindowState={setWindowState} />
    </>
  );
};

export default EducacionFinanciera;

const previews = [
  {
    url: 'https://revista.condusef.gob.mx/2023/08/inclusion-financiera-de-las-mujeres/',
    image: PreviewInclusionFinancieraDeLasMujeres,
    title: 'Inclusión financiera de las mujeres',
  },
  {
    url: 'https://webappsos.condusef.gob.mx/EducaTuCartera/Finanzas-jovenes.html',
    image: PreviewFinanzasJovenes,
    title: 'Finanzas jóvenes',
  },
  {
    url: 'https://revista.condusef.gob.mx/2023/08/consejos-para-el-regreso-a-clases/',
    image: PreviewConsejosParaElRegresoAClases,
    title: 'Consejos para el regreso a clases',
  },
  {
    url: 'https://webappsos.condusef.gob.mx/EducaTuCartera/conduguias.html',
    image: PreviewConduguiasYFolletos,
    title: 'Conduguías y folletos',
  },
  {
    url: 'https://webappsos.condusef.gob.mx/EducaTuCartera/cuadernos.html',
    image: PreviewCuadernos,
    title: 'Cuadernos',
  },
];

const imgExtras = `
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
  flex-direction: column;
  gap: ${medLength2};
  margin-top: ${medLength3};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: 0 0 ${medLength3};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;
`;

const Presentation = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${smaLength3};
  justify-content: center;
  max-width: 820px;
  width: 100%;

  @media (min-width: 850px) {
    gap: 0;
  };
`;

const TextsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  width: 100%;

  @media (min-width: 850px) {
    width: 50%;
  };
`;

const Parrafo = styled.p`
  color: ${text};
  font-size: ${smaFont};
  text-align: center;
  width: 90%;

  @media (min-width: 880px) {
    width: 100%;
  };
`;

const OpcionesSacimex = styled.span`
  color: ${greenSacimex};
  font-weight: 800;
`;

const StyledP = styled.p`
  color: ${text};
  font-size: ${medFont};
  text-align: center;
  width: 90%;

  @media (min-width: 820px) {
    width: 100%;
  };
`;

const PreviewsContenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${medLength2};
  justify-content: center;
  width: 90%;

  @media (min-width: 820px) {
    width: 100%;
  };
`;