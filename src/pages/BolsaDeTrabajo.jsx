import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Imagen from '../components/Imagen';
import BranchesWithVacancies from '../components/OportunidadesDeCarrera/BranchesWithVacancies';
import Vacancies from '../components/OportunidadesDeCarrera/Vacancies';
import Footer from '../components/Footer';
import Ventana from '../components/Ventana';
import { EstilosGlobales, CentrarPrincipalContenedor, BloquearScroll } from '../utils/estilosPages';
import { disabled, smaLength1, medLength1, medLength3, medFont } from '../utils/stylesRules';
import OportunidadesDeCarrera from '../assets/img/OportunidadesDeCarrera.svg';

const BolsaDeTrabajo = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [windowState, setWindowState] = useState(null);
  const [jobVacancies, setJobVacancies] = useState([]);
  const [branches, setBranches] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);
  const [activeBranch, setActiveBranch] = useState(null);

  const elementToScroll = useRef(null);

  useEffect(() => {
    fetchDbData('VacantController', 'all', setJobVacancies);
    fetchDbData('SucursalController', 'all', setBranches);
    fetchDbData('ProfileController', 'all', setProfiles);
    setMostrarAnimaciones(true);
  }, []);

  const fetchDbData = async (controller, selection, setData) => {
    try {
      const response = await fetch(`https://opcionessacimex.com/php/DHO/Controller/${controller}.php`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ selection })
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToElement = () => {
    if (elementToScroll.current) {
      const offset = 30;
      const elementPosition = elementToScroll.current.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return(<>
    <EstilosGlobales/>
    <BloquearScroll $evitarScroll={windowState}/>
    <Helmet>
      <meta
        name='description'
        content='Explora nuestras oportunidades de trabajo y únete a nosotros en el camino hacia el éxito mutuo.'/>
      <title>Opciones Sacimex - Oportunidades de carrera</title>
    </Helmet>
    <Header
      mostrarAnimaciones={mostrarAnimaciones}
      barraVerde/>
    <CentrarPrincipalContenedor>
      <PrincipalContenedor $mostrarAnimaciones={mostrarAnimaciones}>
        <Titulo texto='Oportunidades'/>
        <ImagenTextoContenedor>
          <ContenedorTextos>
            <Parrafo>Explora nuestras oportunidades y únete a nosotros en el camino hacia el éxito mutuo. Tu 
            próximo paso profesional comienza aquí.</Parrafo>
          </ContenedorTextos>
          <Imagen
            tamano='300px'
            imagen={OportunidadesDeCarrera}/>
        </ImagenTextoContenedor>
        
        {jobVacancies.length !== 0 && branches !== null && (
        <Tabla ref={elementToScroll}>
          <BranchesWithVacancies
            branches={branches}
            jobVacancies={jobVacancies}
            activeBranch={activeBranch}
            setActiveBranch={setActiveBranch}
            scrollToElement={scrollToElement}/>
          <Vacancies
            activeBranch={activeBranch}
            jobVacancies={jobVacancies}
            branches={branches}
            setWindowState={setWindowState}
            setVacanteSeleccionada={setVacanteSeleccionada}
            profiles={profiles}/>
        </Tabla>
        )}
      </PrincipalContenedor>
    </CentrarPrincipalContenedor>
    <Footer
      setWindowState={setWindowState}/>
    <Ventana
      windowState={windowState}
      setWindowState={setWindowState}
      vacanteSeleccionada={vacanteSeleccionada}
      jobVacancies={jobVacancies}
      profiles={profiles}
      activeBranch={activeBranch}
      branches={branches}/>
  </>);
};

export default BolsaDeTrabajo;

const PrincipalContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
  justify-content: flex-start;
  margin-top: ${medLength3};
  max-width: 820px;
  opacity: ${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '1' : '0'};
  padding: ${medLength1} ${medLength1} ${medLength3} ${medLength1};
  transform: translateY(${({ $mostrarAnimaciones }) => $mostrarAnimaciones ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  width: 100%;

  @media (min-width: 880px) {
    padding: ${medLength1} 0 ${medLength3} 0;
  };
`;

const ImagenTextoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${smaLength1};
  justify-content: center;
`;

const ContenedorTextos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: calc(100% - 300px - ${smaLength1});
`;

const Parrafo = styled.p`
  font-size: ${medFont};
  text-align: justify;
  width: 100%;
`;

const Tabla = styled.div`
  border: 1px solid ${disabled};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
`;