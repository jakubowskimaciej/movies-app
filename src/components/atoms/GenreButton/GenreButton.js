import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDotCircle);

const StyledButton = styled(NavLink).attrs({
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

const GenreButton = ({ children, ...props }) => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon={faDotCircle} style={{ marginRight: '1rem' }} />
    {children}
  </StyledButton>
);

export default GenreButton;
