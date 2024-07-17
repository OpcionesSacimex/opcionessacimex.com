import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Titulo from '../Titulo';
import Imagen from '../Imagen';
import Boton from '../Boton';
import saciAlianza from '../../assets/img/SaciAlianza.png';
import { ReactComponent as CreditoGrupalLogo } from '../../assets/img/CreditoGrupalT.svg';
import { ReactComponent as CreditoIndividualLogo } from '../../assets/img/CreditoIndividualT.svg';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const AnimacionEntradaProductos = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, []);
  
    return (
      <ProductoContenedor $visible={isVisible} ref={targetRef}>
        {children}
      </ProductoContenedor>
    );
  };


export const BolsaTrabajoPanel = ()=>{
    return (
        <>
        <Section id='Bolsa'>
      <Titulo texto='Oportunidades' />
      <Contenido>
        <ContenidoCentradoSaciAlianza>
          <AnimacionEntradaProductos>
            <TituloCredito>Bolsa de trabajo</TituloCredito>
            <Imagen
              tamano={lengths.large[1]}
              imagen={saciAlianza}
              alt='Saci-Alianza'
            />
            <Texto>Unete a nuestro equipo de trabajo</Texto>
            <Boton
              texto='Conoce más'
              referencia='/OportunidadesDeCarrera'
            />
          </AnimacionEntradaProductos>
        </ContenidoCentradoSaciAlianza>
        
        
      </Contenido>
    </Section>
        </>
    )
}


const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${lengths.medium[3]};
  max-width: 820px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContenidoCentradoSaciAlianza = styled(Contenido)`
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const ProductoContenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  padding: 0 ${lengths.small[1]};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-10px')});
  transition: opacity 2s, transform 2s;
  width: ${lengths.large[3]};

  svg {
    color: ${colors.green};
    width: ${lengths.large[1]};
  }
`;

const TituloCredito = styled.h3`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  text-align: center;
`;

const Texto = styled.p`
  color: ${colors.label};
  font-size: ${fontSizes.small};
  text-align: center;
`;