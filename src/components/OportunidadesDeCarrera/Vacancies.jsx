import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

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
  background-color: ${colors.disabled};
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[2]};
  padding: ${lengths.small[3]};
`;

const StyledH5 = styled.h5`
  color: ${colors.green};
  font-size: ${fontSizes.medium};
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: ${colors.white};
  border: none;
  border-radius: ${lengths.small[1]};
  cursor: pointer;
  padding: ${lengths.small[1]};
  transition: transform .3s, box-shadow .3s;
  width: 100%;

  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    transform: translateY(-8px);
  };

  span {
    color: ${colors.text};
    font-size: ${fontSizes.small};
    text-align: center;
  };
`;