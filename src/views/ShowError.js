import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Error404 } from 'assets/404.svg';
import { Button } from 'components/atoms/Button/Button';
import { useDispatch } from 'react-redux';
import { clearError } from 'actions';
import history from '../history';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 4rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    height: 80vh;
  }

  svg {
    width: 50%;
    height: 50%;
    margin: 5rem;

    @media ${({ theme }) => theme.mediaQueries.medium} {
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--color-darkGrey);
  padding-left: 5rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 400;
  }
`;

const ShowError = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <StyledMessage>
        <h2>Opppps!</h2>
        <p>Something went wrong!</p>
      </StyledMessage>
      <Error404 />
      <Button
        onClick={() => {
          history.push('/');
          dispatch(clearError());
        }}
      >
        Home
      </Button>
    </Wrapper>
  );
};

export default ShowError;
