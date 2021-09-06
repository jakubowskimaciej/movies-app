import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 38rem;
  object-fit: cover;
  border-radius: 1.6rem;
  box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);
`;

export const InfoWrapper = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: var(--color-darkGrey);
`;
