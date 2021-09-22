import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 4rem 0;
  gap: 3rem 2rem;
`;