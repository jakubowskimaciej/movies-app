import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Spinner } from 'assets/loader.svg';

const Loader = ({ isSmall }) => (
  <Wrapper>
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.div`
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;

  svg path,
  svg rect {
    fill: #00bfa6;
  }
`;

export default Loader;
