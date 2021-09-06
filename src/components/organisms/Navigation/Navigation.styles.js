import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: 100vh;
  border-right: 0.1rem solid var(--color-lightGrey);
`;

export const LogoWrapper = styled.a`
  width: 100%;
  height: 20rem;
  margin-top: 6rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
