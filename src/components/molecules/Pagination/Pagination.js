import React from 'react';
import styled from 'styled-components';
import history from '../../../history';

import { useLocation } from 'react-router-dom';
// import { scroller } from 'react-scroll';

import { Button } from 'components/atoms/Button/Button';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const Pagination = ({ page, total_pages }) => {
  const params = useLocation();

  // const scrollTo = () => {
  //   scroller.scrollTo('scroll-to-element', {
  //     duration: 1500,
  //     smooth: 'easeInOutQuart',
  //     offset: -50,
  //   });
  // };

  //if only 1 page
  if (total_pages === 1 || !total_pages) return null;
  if (params.pathname === '/watchlist') return null;

  //on first page, render next page button only
  if (page < total_pages && page === 1) {
    return (
      <ButtonWrapper>
        <Button isSecondary onClick={() => history.push(`${params.pathname}?page=${page + 1}`)}>
          Next page
        </Button>
      </ButtonWrapper>
    );
  }
  // render both buttons
  else if (page < total_pages) {
    return (
      <ButtonWrapper>
        <Button onClick={() => history.push(`${params.pathname}?page=${page - 1}`)}>Previous page</Button>

        <Button isSecondary onClick={() => history.push(`${params.pathname}?page=${page + 1}`)} to="scroll-to-element">
          Next page
        </Button>
      </ButtonWrapper>
    );
  }

  //on last page renger previous page button only
  else {
    return (
      <ButtonWrapper>
        <Button onClick={() => history.push(`${params.pathname}?page=${page - 1}`)}>Previous page</Button>
      </ButtonWrapper>
    );
  }
};

export default Pagination;
