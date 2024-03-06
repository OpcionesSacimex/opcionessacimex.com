import styled from 'styled-components';
import { greenSacimex, whiteSacimex, text, disabled, smaLength1, smaLength2, smaLength3, smaFont, medFont } from '../../utils/stylesRules';

const Vacancies = ({ activeBranch, jobVacancies, branches, setWindowState, setVacanteSeleccionada, profiles }) => {
  let selectedBranch = null;
  if(branches !== null) {selectedBranch = branches.find(branch => branch.idSucursal === activeBranch);}
  
  return(
    <VacanciesContainer>
      <StyledH5>{selectedBranch ? selectedBranch.sucursalName : 'Selecciona una sucursal.'}</StyledH5>
      {jobVacancies
  .filter(vacante => vacante.idSucursal === activeBranch)
  .map((vacancie, idx) => {
    const profile = profiles.find(profile => profile.idProfile === vacancie.idProfile);

    return (
      <StyledButton
        key={vacancie.idVacant}
        onClick={() => {
          setWindowState(4);
          setVacanteSeleccionada(vacancie.idVacant);
        }}
      >
        <span key={`profile-${idx}`}>{profile.profileName}</span>
      </StyledButton>
    );
  })}
    </VacanciesContainer>
  );
};

export default Vacancies;

const VacanciesContainer = styled.div`
  align-items: center;
  background-color: ${disabled};
  display: flex;
  flex-direction: column;
  gap: ${smaLength2};
  padding: ${smaLength3};
`;

const StyledH5 = styled.h5`
  color: ${greenSacimex};
  font-size: ${medFont};
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: ${whiteSacimex};
  border: none;
  border-radius: ${smaLength1};
  cursor: pointer;
  padding: ${smaLength1};
  transition: transform .3s, box-shadow .3s;
  width: 100%;

  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    transform: translateY(-8px);
  };

  span {
    color: ${text};
    font-size: ${smaFont};
    text-align: center;
  };
`;