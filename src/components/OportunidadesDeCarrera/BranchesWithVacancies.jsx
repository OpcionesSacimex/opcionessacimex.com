import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const BranchesWithVacancies = ({ branches, jobVacancies, activeBranch, setActiveBranch, scrollToElement }) => {
  const [selectedBranches, setSelectedBranches] = useState(null);

  useEffect(() => {
    pickBranches();
  }, []);

  const pickBranches = () => {
    let tempArray = branches.filter(branch =>
      jobVacancies.some(vacante => vacante.idSucursal === branch.idSucursal)
    );

    setSelectedBranches(tempArray);
  };

  return(
    <PrincipalContainer>
      {selectedBranches && selectedBranches.map( ele => (
      <BranchContainer
        key={ele.idSucursal}
        $activeBranch={activeBranch === ele.idSucursal}
        onClick={() => {setActiveBranch(ele.idSucursal); scrollToElement()}}>
          <StyledP>{ele.sucursalName}</StyledP>
          <p>{ele.sucursalZone}</p>
      </BranchContainer>
      ))}
    </PrincipalContainer>
  );
};

export default BranchesWithVacancies;

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BranchContainer = styled.button`
  background-color: ${({ $activeBranch }) => $activeBranch ? colors.yellow : colors.white};
  border: 1px solid ${colors.disabled};
  color: ${colors.text};
  cursor: pointer;
  font-size: ${fontSizes.small};
  padding: ${lengths.small[1]};
  transition: background .3s;

  ${({ $activeBranch }) => !$activeBranch && (`
    &:hover {
      background-color: #EEEEEE;
    };
  `)}
`;

const StyledP = styled.p`
  color: ${colors.text};
  font-weight: 700;
`;