import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

const Person = () => {
  return (
    <Wrapper>
      <h1>Person view</h1>
    </Wrapper>
  );
};

export default Person;
