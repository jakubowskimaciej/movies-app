import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 100%;
  max-width: 40rem;
  object-fit: cover;
  border-radius: 1.6rem;
  box-shadow: 0 1rem 5rem -1.5rem rgb(115 124 142);

  @media ${({ theme }) => theme.mediaQueries.medium} {
    max-width: 30rem;
  }
`;
