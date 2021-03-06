import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  border-right: 0.1rem solid var(--color-lightGrey);
  grid-row: 1/3;
  grid-column: 1/2;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    border-right: none;
  }
`;

export const LogoWrapper = styled(Link)`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  svg {
    width: 90%;
    height: 90%;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 2rem;
  }
`;

export const StyledNavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
  position: sticky;
  top: 0;
`;
