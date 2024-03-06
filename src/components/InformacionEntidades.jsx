import React from 'react';
import styled from 'styled-components';
import { whiteSacimex, smaLength1, medLength1, medLength3, larLength2, larLength3, smaFont } from '../utils/stylesRules';
const InformacionEntidades = ({ title, description }) => {
  return (
    <PrincipalContenedor>
      <SubTitulo>{title}</SubTitulo>
      <Parrafo>{description}</Parrafo>
    </PrincipalContenedor>
  );
};

export default InformacionEntidades;

const PrincipalContenedor = styled.div`
  background-color: #005520;
  display: flex;
  flex-direction: column;
  gap: ${smaLength1};
  height: ${larLength3};
  padding: ${medLength1};
  width: 100%;

  @media (min-width: 768px) {
    height: ${larLength2};
  };

  @media (min-width: 850px) {
    padding: ${medLength1} ${medLength3};
  };
`;

const Parrafo = styled.p`
  color: ${whiteSacimex};
  font-size: ${smaFont};
  text-align: justify;
  width: 100%;
`;

const SubTitulo = styled.p`
  color: ${whiteSacimex};
  font-size: ${smaFont};
  font-weight: 800;
`;