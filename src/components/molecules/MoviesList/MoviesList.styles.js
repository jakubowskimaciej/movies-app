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
`;
