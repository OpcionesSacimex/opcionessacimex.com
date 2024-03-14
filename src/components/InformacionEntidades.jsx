import React from 'react';
import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

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
  gap: ${lengths.small[1]};
  height: ${lengths.large[3]};
  padding: ${lengths.medium[1]};
  width: 100%;

  @media (min-width: 768px) {
    height: ${lengths.large[2]};
  };

  @media (min-width: 850px) {
    padding: ${lengths.medium[1]} ${lengths.medium[3]};
  };
`;

const Parrafo = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.small};
  text-align: justify;
  width: 100%;
`;

const SubTitulo = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.small};
  font-weight: 800;
`;