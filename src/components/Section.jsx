import styled from 'styled-components';
import { medLength3, larLength1 } from '../utils/stylesRules';

const Section = ({ id, children, background, presentation }) => {
  return (
    <StyledSection id={id} $background={background} $presentation={presentation}>
      {children}
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  align-items: center;
  background-color: ${({ $background }) => $background || 'transparent'};
  display: flex;
  flex-direction: column;
  gap: ${medLength3};
  justify-content: center;
  min-height: ${({ $presentation }) => ($presentation ? 'initial' : 'calc(100vh - ' + medLength3 + ')')};
  padding-bottom: ${larLength1};
  position: relative;
  width: 100%;
  z-index: 20;

  @media (min-width: 768px) {
    min-height: ${({ $presentation }) => ($presentation ? 'initial' : '0')};
  }
`;
