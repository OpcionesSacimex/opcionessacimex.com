import styled from 'styled-components';
import Boton from '../components/Boton';
import Animation from '../components/404/Animation';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const ErrorPage = () => (
  <MainContainer>
    <ContentContainer>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <TextsContainer>
        <StyledH3>Error 404: Página no encontrada</StyledH3>
        <StyledP>
          Lamentablemente, la página que intentas acceder no se encuentra en nuestro dominio en este momento. Nos disculpamos por cualquier inconveniente que esto pueda causarte.
        </StyledP>
      </TextsContainer>
    </ContentContainer>
    <Boton referencia='/Inicio' texto='Ir al inicio' />
  </MainContainer>
);

export default ErrorPage;

const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[3]};
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${lengths.small[3]};
  justify-content: center;
`;

const AnimationContainer = styled.div`
  width: ${lengths.large[3]};
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[3]};
  max-width: 350px;
  width: 90%;
`;

const StyledH3 = styled.h3`
  color: ${colors.text};
  font-size: ${fontSizes.large};
  text-align: center;
`;

const StyledP = styled.p`
  color: ${colors.label};
  font-size: ${fontSizes.small};
  text-align: center;
`;