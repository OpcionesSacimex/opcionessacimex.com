import styled from 'styled-components';
import { lengths } from '../utils/stylesRules';

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
  gap: ${lengths.medium[3]};
  justify-content: center;
  min-height: ${({ $presentation }) => ($presentation ? 'initial' : 'calc(100vh - ' + lengths.medium[3] + ')')};
  padding-bottom: ${lengths.large[1]};
  position: relative;
  width: 100%;
  z-index: 20;

  @media (min-width: 768px) {
    min-height: ${({ $presentation }) => ($presentation ? 'initial' : '0')};
  }
`;
