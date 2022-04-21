import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: transform 300ms cubic-bezier(0.3, 0.43, 0.96, 0.64);
  text-decoration: none;
  color: var(--color-darkGrey);

  &:hover {
    transform: scale(1.03);
    color: var(--color-white);

    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-darkGrey);
    border-radius: 1.6rem;
    z-index: -1;
    opacity: 0;
    transform: scale(0.9);
    transform-origin: top;
    transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);
  }
`;

export const Image = styled(StyledImage)`
  height: 38rem;
  box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);

  ${StyledLink}:hover & {
    box-shadow: none;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 28rem;
  }
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  ${StyledLink}:hover & {
    color: var(--color-white);
  }
`;

export const StyledRating = styled(Rating)`
  color: var(--color-lightGrey);
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: -5%;
  right: -5%;
  min-width: unset;
  margin-bottom: 1rem;
  background-color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.l};

  &:hover {
    transform: none;
  }

  ${Wrapper}:hover & {
    color: var(--color-white);
    background-color: var(--color-white);
    background-color: var(--color-danger);
    border: 0.1rem solid var(--color-danger);
    box-shadow: none;
  }
`;
