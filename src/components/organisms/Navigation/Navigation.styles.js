import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  border-right: 0.1rem solid var(--color-lightGrey);
  margin-top: 4rem;
`;

export const LogoWrapper = styled(Link)`
  width: 100%;
  height: 20rem;
  ${'' /* margin-top: 2rem; */}
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 90%;
    height: 90%;
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
  top: 5%;
`;
