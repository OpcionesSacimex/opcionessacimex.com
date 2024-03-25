import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import Sucursales from '../components/OportunidadesDeCarrera/Sucursales';
import Vacantes from '../components/OportunidadesDeCarrera/Vacantes';
import { EstilosGlobales, BloquearScroll } from '../utils/estilosPages';
import { colors, fontSizes, lengths, fontWeights } from '../utils/stylesRules';

const BolsaDeTrabajo = () => {
  const [mostrarAnimaciones, setMostrarAnimaciones] = useState(false);
  const [windowState, setWindowState] = useState(null);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState();
  const [jobVacancies, setJobVacancies] = useState([]);
  const [branches, setBranches] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [nombreSucursal, setNombreSucursal] = useState();

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

  return(
    <>
      <EstilosGlobales/>
      <BloquearScroll $evitarScroll={windowState}/>
      <Helmet>
        <meta
          name='description'
          content='Explora nuestras oportunidades de trabajo y únete a nosotros en el camino hacia el éxito mutuo.'
        />        
        <title>Opciones Sacimex - Bolsa de trabajo</title>
      </Helmet>      
      <Header
        mostrarAnimaciones={mostrarAnimaciones}
        barraVerde
      />
      <Principal>
        <Textos>
          <Titulo>Nuestras vacantes</Titulo>
          <Parrafo>Descubre las múltiples oportunidades que te esperan y únete a nuestra comunidad en el camino hacia el éxito 
            compartido. ¡Te invitamos a dar el primer paso hacia tu futuro!</Parrafo>
        </Textos>
        <ContenedorInformacion>
          <ContenedorSucursales>
            {branches !== null && jobVacancies.length !== 0 && (
              <Sucursales
                branches={branches}
                jobVacancies={jobVacancies}
                setSucursalSeleccionada={setSucursalSeleccionada}
                setNombreSucursal={setNombreSucursal}
                setBranches={setBranches}
              />
            )}
          </ContenedorSucursales>
          <ContenedorVacantes>            
            <NombreSucursal>{nombreSucursal}</NombreSucursal>
            {profiles.length !== 0 && jobVacancies.length !== 0 && branches !== null && (
              <Vacantes
                profiles={profiles}
                jobVacancies={jobVacancies}
                sucursalSeleccionada={sucursalSeleccionada}
                branches={branches}
              />
            )}
          </ContenedorVacantes>
        </ContenedorInformacion>
      </Principal>
    </>
  );
};

export default BolsaDeTrabajo;

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[3]};
  margin-top: ${lengths.medium[3]};
  padding: ${lengths.small[2]} ${lengths.small[1]} 0;
  width: 100%;

  @media (min-width: 481px) {
    padding: ${lengths.small[2]} ${lengths.small[2]} 0;
  };

  @media (min-width: 769px) {
    padding: ${lengths.small[2]} ${lengths.medium[3]} 0;
  };
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  height: 30px;

  @media (min-width: 769px) {
    height: 100px;
  };
`;

const Titulo = styled.p`
  color: ${colors.green};
  font-size: ${fontSizes.large};
  font-weight: ${fontWeights.black};
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  };
`;

const Parrafo = styled.p`
  color: ${colors.label};
  display: none;
  font-size: ${fontSizes.medium};
  max-width: 600px;
  text-align: left;

  @media (min-width: 769px) {
    display: block;
  };
`;

const ContenedorInformacion = styled.div`
  display: flex;
  width: 100%;
`;

const ContenedorSucursales = styled.div`
  border-right: 1px solid ${colors.disabled};
  height: calc(100vh - 150px);
  overflow-y: auto;
  width: 50%;

  @media (min-width: 769px) {
    height: calc(100vh - 220px);
    width: 25%;
  };
`;

const ContenedorVacantes = styled.div`
  height: calc(100vh - 150px);
  overflow-y: auto;
  width: 50%;

  @media (min-width: 769px) {
    height: calc(100vh - 220px);
    width: 75%;
  };
`;

const NombreSucursal = styled.p`
  color: ${colors.green};
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
  padding-bottom: ${lengths.small[2]};
  padding-left: ${lengths.small[2]};
`;