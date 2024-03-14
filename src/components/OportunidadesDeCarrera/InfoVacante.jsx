import styled from 'styled-components';
import Boton from '../Boton';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

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
  color: ${colors.green};
  font-size: ${fontSizes.medium};
  padding-bottom: ${lengths.small[1]};
  text-align: center;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitulo = styled.h3`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  font-weight: 700;
  padding-bottom: ${lengths.small[1]};
`;

const Lista = styled.ul`
  font-size: ${fontSizes.small};
  text-align: left;
  width: 100%;
`;

const ContenedorTexto = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.medium[1]};
  padding: ${lengths.medium[2]};
  width: 100%;
`;