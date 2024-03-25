import styled from 'styled-components';
import { Accordion, AccordionItem, Button, Link } from '@nextui-org/react';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const Vacantes = ({ profiles, jobVacancies, sucursalSeleccionada, branches }) => {
  return (
    <Accordion variant='splitted'>
      {jobVacancies.filter(vacante => vacante.idSucursal === sucursalSeleccionada)
        .map((itemVac, index) => {
          const profile = profiles.find(itemPro => itemPro.idProfile === itemVac.idProfile);
          return(
            <AccordionItem key={itemVac.idVacant} aria-label={profile.profileName} title={profile.profileName}>
              <InfoVacantes>
                <SubTitulo>Requisitos:</SubTitulo>
                <Lista>
                  {profile && profile.requirements.split('/')
                    .map((ele, idx) => (
                      <li key={idx}>{ele}</li>
                  ))}
                </Lista>
              </InfoVacantes>
              <InfoVacantes>
                <SubTitulo>Funciones:</SubTitulo>
                <Lista>
                  {profile && profile.functions.split('/')
                    .map((ele, idx) => (
                      <li key={idx}>{ele}</li>
                  ))}
                </Lista>
              </InfoVacantes>
              <InfoVacantes>
                <SubTitulo>Ofrecemos:</SubTitulo>
                <Lista>
                  {profile && profile.advantages.split('/')
                    .map((ele, idx) => (
                      <li key={idx}>{ele}</li>
                  ))}
                </Lista>
              </InfoVacantes>
              <CentrarBoton>
                <Button
                  href={branches.find(branch => sucursalSeleccionada === branch.idSucursal).sucursalForm}
                  as={Link}
                  color='warning'
                  showAnchorIcon
                  variant='solid'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Postúlate
                </Button>
              </CentrarBoton>              
            </AccordionItem>
          );
        })}
    </Accordion>
  );
}

export default Vacantes;

const InfoVacantes = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${lengths.small[3]};
`;

const SubTitulo = styled.h3`
  color: ${colors.green};
  font-size: ${fontSizes.small};
  font-weight: 700;
  padding-bottom: ${lengths.small[1]};
`;

const Lista = styled.ul`
  font-size: ${fontSizes.small};
  text-align: left;
  width: 100%;

  li::before {
    content: "-";
    color: ${colors.yellow};
    font-weight: bold;
    margin-right: 0.1em;
  }
`;

const CentrarBoton = styled.div`
  display: grid;
  padding-bottom: ${lengths.small[3]};
  place-items: center;
  width: 100%;
`;