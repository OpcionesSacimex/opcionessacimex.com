import React from 'react';
import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const Sucursal = ({ nombre, direccion, ubicacion, telefono1, telefono2, email, children, activo }) => {

  return (
    <PrincipalContenedor $mostrarInfo={activo}>
      <NombreContenedor>
        <NombreSucursal>{nombre}</NombreSucursal>
        {children}
      </NombreContenedor>
      <Info $mostrarInfo={activo}>
        {activo && (
          <>
            <Direccion>{direccion}</Direccion>
            {ubicacion && (<Telefono $mapa href={ubicacion}>Ubícanos en el mapa.</Telefono>)}
            <TelefonosContenedor>
              {telefono1 && (<Telefono href={`tel:${telefono1}`}>{telefono1}</Telefono>)}
              {telefono2 && (<Telefono href={`tel:${telefono2}`}>{telefono2}</Telefono>)}
            </TelefonosContenedor>
            {email && (<Telefono href={`mailto:${email}`}>{email}</Telefono>)}
          </>
        )}
      </Info>
    </PrincipalContenedor>
  );
};

export default Sucursal;

const PrincipalContenedor = styled.li`
  border-bottom: 1px solid ${colors.disabled};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${lengths.medium[2]} auto;
  grid-column-gap: 0;
  grid-row-gap: 0;
  padding: ${lengths.small[1]};
  width: 100%;

  @media (min-width: 1000px) {
    grid-template-columns: 300px;
    width: 300px;
  };
`;

const NombreContenedor = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: ${lengths.small[3]};
  width: 100%;
`;

const NombreSucursal = styled.p`
  color: ${colors.green};
  font-size: ${fontSizes.medium};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $mostrarInfo }) => ($mostrarInfo ? lengths.large[3] : '0')};
  justify-content: space-between;
  overflow: hidden;
  transition: height .3s;
`;

const Direccion = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  text-align: justify;

  @media (min-width: 1000px) {
    text-align: left;
  };
`;

const TelefonosContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  width: 100%;
`;

const Telefono = styled.a`
  color: ${({ $mapa }) => ($mapa ? colors.green : colors.text)};
  font-size: ${fontSizes.small};
`;