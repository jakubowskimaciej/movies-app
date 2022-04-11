import styled from 'styled-components';

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: var(--color-grey);
  text-transform: capitalize;
`;
