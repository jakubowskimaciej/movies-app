import styled from 'styled-components';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import { Link } from 'react-router-dom';

export const CastWrapper = styled.div`
  height: 58rem;
  width: 100%;
  padding: 0 4rem;
  box-shadow: 0 2px 15px -4px var(--shadow);
  border-radius: 1.2rem;
  overflow: auto;
`;

export const ActorWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;
  text-decoration: none;

  ${StyledImage} {
    width: 7rem;
    height: 7rem;
    border-radius: 50rem;
    margin: 0 1rem 0.5rem 0;
    box-shadow: 0 8px 15px -4px var(--shadow);
  }
`;
