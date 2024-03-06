import React, { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import {
  greenSacimex,
  yellowSacimex,
  text,
  smaLength1,
  smaLength2,
  smaFont
} from '../utils/stylesRules';

const Boton = ({ texto, referencia, amarillo, newBlank }) => (
  <AnimacionEntradaBoton referencia={referencia} amarillo={amarillo} newBlank={newBlank}>
    {texto}
  </AnimacionEntradaBoton>
);

const AnimacionEntradaBoton = ({ children, referencia, amarillo, newBlank }) => {
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
    <BotonContainer
      target={newBlank && '_blank'}
      rel={newBlank && 'noopener noreferrer'}
      $visible={isVisible}
      href={referencia}
      $amarillo={amarillo}
      ref={targetRef}
    >
      {children}
    </BotonContainer>
  );
};

export default Boton;

const BotonContainer = styled.a`
  background-color: ${({ $amarillo }) => ($amarillo ? yellowSacimex : greenSacimex)};
  border-radius: 3px;
  color: ${({ $amarillo }) => ($amarillo ? text : '#FFFFFF')};
  cursor: pointer;
  font-size: ${smaFont};
  font-weight: 800;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  padding: ${smaLength1} ${smaLength2};
  text-decoration: none;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-10px')});
  transition: background .3s, opacity 2s, transform 2s;

  &:hover {
    background-color: ${({ $amarillo }) => ($amarillo ? '#F7B432' : '#328258')};
  }
`;