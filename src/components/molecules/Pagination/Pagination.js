import React from 'react';
import styled from 'styled-components';
import history from '../../../history';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from 'components/atoms/Button/Button';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const Pagination = () => {
  const params = useLocation();
  const { page, total_pages } = useSelector((state) => state.main.movies);

  //if only 1 page
  if (total_pages === 1) return null;
  if (params.pathname === '/watchlist') return null;

  //on first page, render next page button only
  if (page < total_pages && page === 1) {
    return (
      <ButtonWrapper>
        <Button
          isSecondary
          onClick={() => history.push(`${params.pathname}?page=${page + 1}`)}
        >
          Next page
        </Button>
      </ButtonWrapper>
    );
  }
  // render both buttons
  else if (page < total_pages) {
    return (
      <ButtonWrapper>
        <Button
          onClick={() => history.push(`${params.pathname}?page=${page - 1}`)}
        >
          Previous page
        </Button>

        <Button
          isSecondary
          onClick={() => history.push(`${params.pathname}?page=${page + 1}`)}
        >
          Next page
        </Button>
      </ButtonWrapper>
    );
  }

  //on last page renger previous page button only
  else {
    return (
      <ButtonWrapper>
        <Button
          onClick={() => history.push(`${params.pathname}?page=${page - 1}`)}
        >
          Previous page
        </Button>
      </ButtonWrapper>
    );
  }
};

export default Pagination;
