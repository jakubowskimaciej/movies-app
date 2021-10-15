import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 7rem 1fr;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column;
  }
`;
