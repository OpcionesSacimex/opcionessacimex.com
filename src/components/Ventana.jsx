import { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import AvisoPrivacidad from './Ventana/AvisoPrivacidad';
import UnidadEspecializada from './Ventana/UnidadEspecializada';
import DenunciaAnonima from './Ventana/DenunciaAnonima';
import InfoVacante from './OportunidadesDeCarrera/InfoVacante';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const Ventana = ({ windowState, setWindowState, vacanteSeleccionada, jobVacancies, profiles, activeBranch, branches }) => {
  const handleClose = () => {
    setWindowState(null);
  };

  return (
    <Container $showWindow={windowState}>
      <Sheet $showWindow={windowState}>
        <CloseButtonContainer>
          <CloseButton onClick={handleClose}>
            <AiFillCloseCircle />
          </CloseButton>
        </CloseButtonContainer>
        {windowState === 1 && <AvisoPrivacidad />}
        {windowState === 2 && <UnidadEspecializada />}
        {windowState === 3 && <DenunciaAnonima />}
        {windowState === 4 && <InfoVacante vacanteSeleccionada={vacanteSeleccionada} jobVacancies={jobVacancies} profiles={profiles} activeBranch={activeBranch} branches={branches} />}
        <FinalGradient />
      </Sheet>
      <Opacity $showWindow={windowState} onClick={handleClose} />
    </Container>
  );
};

export default Ventana;

const Container = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  pointer-events: ${({ $showWindow }) => $showWindow ? 'all' : 'none'};
  width: 100%;
  z-index: 110;
`;

const Sheet = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  height: 100vh;
  left: ${({ $showWindow }) => $showWindow ? '0' : '-350px'};
  max-width: 350px;
  overflow: auto;
  position: absolute;
  top: 0;
  transition: left .3s;
  width: 100%;
  z-index: 110;
`;

const Opacity = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);  
  height: 100%;
  opacity: ${({ $showWindow }) => $showWindow ? '1' : '0'};
  transition: opacity .3s;
  width: 100%;
  z-index: 105;
`;

const CloseButtonContainer = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
  border-radius: 10px;
  display: grid;
  height: ${lengths.medium[2]};
  max-width: 350px;
  padding-right: ${lengths.small[2]};
  place-items: center end;
  position: fixed;
  top: 0;
  width: 100%;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.label};
  cursor: pointer;
  font-size: ${fontSizes.medium};
`;

const FinalGradient = styled.div`
  background: linear-gradient(0, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%);
  border-radius: 0 0 10px 10px;
  bottom: 0;
  height: ${lengths.medium[2]};
  max-width: 350px;
  position: fixed;
  width: 100%;
`;
