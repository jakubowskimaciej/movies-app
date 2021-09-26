import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ isBig }) => (isBig ? '1rem 2.4rem' : '0.5rem 1rem')};
  margin: 0.25rem 0;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};
  font-weight: 700;
  color: var(--color-grey);
  background-color: transparent;
  text-decoration: none;
  text-transform: capitalize;
  border: ${({ isBig }) =>
    isBig ? '0.1rem solid var(--color-darkGrey)' : '0.1rem solid transparent'};
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

const GenreButton = ({ children, icon, ...props }) => (
  <StyledButton {...props}>
    <FontAwesomeIcon
      icon={['fas', 'dot-circle']}
      style={{ marginRight: '1rem' }}
    />
    {children}
  </StyledButton>
);

export default GenreButton;
