import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 4rem 0;
  gap: 3rem 2rem;
  grid-row: 2/2;
  grid-column: 2/2;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;
