import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Section from '../Section';
import Foto1 from '../../assets/img/Foto1.jpg';
import Foto2 from '../../assets/img/Foto2.jpg';
import { greenSacimex, whiteSacimex, label, smaLength1, smaLength2, smaLength3, medLength1, medLength2 } from '../../utils/stylesRules';

const Presentacion = () => {
  const [imagenActual, setImagenActual] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevValue) => {
        if(prevValue === 2) return 1;
        else return 2;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return(
    <Section presentation>
      <PrincipalContainer>
        {imagenActual === 1 && (<ImagePresentation/>)}
        {imagenActual === 2 && (<ImagePresentation2/>)}        
        <TextsContainer>
          <StyledH1>Opciones Sacimex.</StyledH1>
          <StyledH2>Tu crédito de confianza.</StyledH2>
        </TextsContainer> 
      </PrincipalContainer>      
    </Section>
  );
};

export default Presentacion;

const PrincipalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${medLength2};
  justify-content: space-between;
  max-width: 1000px;
  opacity: 1;
  width: 100%;

  @media (min-width: 650px) {
    gap: 0;
  };
`;

const ImagePresentation = styled.div`
  background-image: url(${Foto1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: circle(115% at 0 0);
  height: 350px;
  max-width: 500px;
  width: 100%;

  @media (min-width: 650px) {
    width: 50%;
  };
`;

const ImagePresentation2 = styled.div`
  background-image: url(${Foto2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: circle(115% at 0 0);
  height: 350px;
  max-width: 500px;
  width: 100%;

  @media (min-width: 650px) {
    width: 50%;
  };
`;

const TextsContainer = styled.div`
  align-items: end;
  background-color: ${whiteSacimex};
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  width: 100%;

  @media (min-width: 650px) {
    width: 50%;
  };
`;

const StyledH1 = styled.h1`
  color: ${greenSacimex};
  font-size: ${medLength1};
  text-align: center;
  width: 100%;

  @media (min-width: 650px) {
    font-size: ${medLength1};
  };

  @media (min-width: 1000px) {
    font-size: ${medLength2};
  };
`;

const StyledH2 = styled.h2`
  color: ${label};
  font-size: ${smaLength2};
  text-align: center;
  width: 100%;

  @media (min-width: 650px) {
    font-size: ${smaLength3};
  };

  @media (min-width: 1000px) {
    font-size: ${medLength1};
  };
`;