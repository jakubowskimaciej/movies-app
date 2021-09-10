import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  transition: all 300ms cubic-bezier(0.3, 0.43, 0.96, 0.64);

  &:hover {
    transform: scale(1.03);

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

export const StyledImage = styled.img`
  height: 38rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1.6rem;
  box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);

  ${Wrapper}:hover & {
    box-shadow: none;
  }
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  ${Wrapper}:hover & {
    color: var(--color-white);
  }
`;

export const StyledRating = styled.p`
  color: var(--color-grey);
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.m};

  ${Wrapper}:hover & {
    color: var(--color-white);
  }
`;
