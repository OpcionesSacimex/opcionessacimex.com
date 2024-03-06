import styled from 'styled-components';
import Boton from '../Boton';
import { greenSacimex, text, smaLength1, medLength1, medLength2, smaFont, medFont } from '../../utils/stylesRules';

const InfoVacante = ({ vacanteSeleccionada, jobVacancies, profiles, activeBranch, branches }) => {
  const vacancie = jobVacancies.find(vacante => vacante.idVacant === vacanteSeleccionada);
  const selectedProfile = profiles.find(profile => profile.idProfile === vacancie.idProfile);
  
  return(
    <ContenedorTexto>
      <Titulo>{selectedProfile.profileName}</Titulo>
      <Textos>
        <SubTitulo>Requisitos:</SubTitulo>
        <Lista>
          {selectedProfile && selectedProfile.requirements.split('/')
            .map((ele, idx) => (
              <li key={idx}>{ele}</li>
          ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Funciones:</SubTitulo>
        <Lista>
          {selectedProfile && selectedProfile.functions.split('/')
            .map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
        </Lista>
      </Textos>
      <Textos>
        <SubTitulo>Ofrecemos:</SubTitulo>
        <Lista>
          {selectedProfile && selectedProfile.advantages.split('/')
            .map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
        </Lista>
      </Textos>
      <Boton
        texto='¡Postúlate!'
        referencia={branches.find(branch => activeBranch === branch.idSucursal).sucursalForm}
        amarillo
        newBlank/>
    </ContenedorTexto>
  );
};

export default InfoVacante;

const Titulo = styled.h5`
  color: ${greenSacimex};
  font-size: ${medFont};
  padding-bottom: ${smaLength1};
  text-align: center;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitulo = styled.h3`
  color: ${text};
  font-size: ${smaFont};
  font-weight: 700;
  padding-bottom: ${smaLength1};
`;

const Lista = styled.ul`
  font-size: ${smaFont};
  text-align: left;
  width: 100%;
`;

const ContenedorTexto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
  padding: ${medLength2};
  width: 100%;
`;