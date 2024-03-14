import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import { colors, lengths, fontSizes } from '../utils/stylesRules';

const AnimacionEntradaTitulo = ({ children, color, padding }) => {
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
    <PrincipalContenedor
      $visible={isVisible}
      $padding={padding}
      $color={color}
      ref={targetRef}>
        {children}
    </PrincipalContenedor>
  );
};

const Titulo = ({texto, padding, color}) => {
  return(
    <AnimacionEntradaTitulo
      padding={padding}
      color={color}>
        {texto}
    </AnimacionEntradaTitulo>
  );
};

export default Titulo;

const PrincipalContenedor = styled.h2`
  color: ${colors.green};
  font-size: ${fontSizes.large};
  margin: auto;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  padding-bottom: ${lengths.small[2]};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(${({ $visible }) => $visible ? '0' : '-10px'});
  transition: opacity 2s, transform 2s;
  white-space: nowrap;
  width: auto;

  &:before {
    background-color: ${colors.yellow};
    content: '';
    display: block;
    height: 3px;
    margin-bottom: ${lengths.small[1]};
    transition: width 2s;
    width: ${({ $visible }) => $visible ? lengths.medium[3] : '0'};
  };

  &:after {
    background-color: ${colors.yellow};
    bottom: 0;
    content: '';
    display: block;
    height: 3px;
    margin-bottom: 5px;
    position: absolute;
    right: 0;
    transition: width 2s;
    width: ${({ $visible }) => $visible ? lengths.medium[3] : '0'};
  };
`;