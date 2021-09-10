import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  border-right: 0.1rem solid var(--color-lightGrey);
`;

export const LogoWrapper = styled(Link)`
  width: 100%;
  height: 20rem;
  margin-top: 6rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledNavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  position: sticky;
  top: 5%;
`;

export const StyledNavItem = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  color: var(--color-grey);
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 5rem;
  transition: all 200ms ease;

  &:hover {
    border: 0.1rem solid var(--color-lightGrey);
  }

  &.active-link {
    border: 0.1rem solid var(--color-grey);
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
