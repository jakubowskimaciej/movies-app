import React from 'react';
import styled from 'styled-components';

const Spinner = ({ isSmall }) => (
  <Wrapper>
    <StyledSpinner isSmall={isSmall} viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
    </StyledSpinner>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: ${({ isSmall }) => (isSmall ? '75px' : '150px')};
  height: ${({ isSmall }) => (isSmall ? '75px' : '150px')};

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
