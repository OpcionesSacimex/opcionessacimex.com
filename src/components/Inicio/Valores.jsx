import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Imagen from '../Imagen';
import honestidadImagen from '../../assets/img/Honestidad.png';
import respetoImagen from '../../assets/img/Respeto.png';
import compromisoImagen from '../../assets/img/Compromiso.png';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';

const AnimacionEntradaValor = ({ children }) => {
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
    <ValorContainer $visible={isVisible} ref={targetRef}>
      {children}
    </ValorContainer>
  );
};

const Valores = () => {
  return (
    <MainContainer>
      {valoresDatos.map((item, index) => (
        <AnimacionEntradaValor key={index}>
          <ValorTitle>{item.titulo}</ValorTitle>
          <Imagen
            tamano={lengths.large[1]}
            imagen={item.imagen}
            alt={item.titulo}
          />
          <ValorText>{item.texto}</ValorText>
        </AnimacionEntradaValor>
      ))}
    </MainContainer>
  );
};

export default Valores;

const valoresDatos = [
	{
    titulo : 'Honestidad',
    texto : 'Te ofrecemos transparencia financiera en cada paso. Tu confianza es nuestra prioridad.',
    imagen : honestidadImagen
  },
  {
    titulo : 'Compromiso',
    texto : 'Trabajamos incansablemente para lograr tus metas financieras, porque tu éxito es nuestro objetivo.',
    imagen : compromisoImagen
  },
  {
    titulo : 'Respeto',
    texto : 'Valoramos tus necesidades y te brindamos soluciones adaptadas a ti, con el respeto que mereces.',
    imagen : respetoImagen
  }
];

const MainContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${lengths.medium[2]};
  justify-content: center;
  list-style: none;
  max-width: 1000px;
  width: 90%;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 0;
    justify-content: space-around;
  };
`;

const ValorContainer = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${lengths.small[1]};
  max-width: ${lengths.large[3]};
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-10px')});
  transition: opacity 2s, transform 2s;
  width: 40%;
`;

const ValorTitle = styled.h4`
  color: ${colors.text};
  font-size: ${fontSizes.small};
`;

const ValorText = styled.p`
  color: ${colors.label};
  font-size: ${fontSizes.small};
  text-align: center;
`;
