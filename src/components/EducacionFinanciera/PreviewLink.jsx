import {styled} from 'styled-components';
import { colors, lengths, fontSizes } from '../../utils/stylesRules';


const PreviewLink = ({ url, image, title }) => (
  <StyledA href={url} target='_blank' rel='noopener noreferrer'>
    <StyledImg src={image} />
    <Opacidad><span>{title}</span></Opacidad>
    <StyledSpan>{url}</StyledSpan>
  </StyledA>
);

export default PreviewLink;

const StyledA = styled.a`
  position: relative;
  text-decoration: none;
  width: ${lengths.large[3]};
`;

const StyledImg = styled.img`
  border: 1px solid ${colors.disabled};
  object-fit: cover;
  width: 100%;
`;

const Opacidad = styled.div`
  align-items: end;
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
  border-radius: 5px;
  color: ${colors.white};
  display: flex;
  font-size: ${fontSizes.small};
  font-weight: 800;
  height: 100%;
  left: 0;
  opacity: 0;
  padding: ${lengths.small[1]};
  position: absolute;
  top: 0;
  transition: opacity .3s;
  width: 100%;

  &:hover {
    opacity: 1;
  };
`;

const StyledSpan = styled.div`
  color: ${colors.text};
  font-size: ${fontSizes.small};
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: ${lengths.large[3]};
`;