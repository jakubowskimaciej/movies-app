import { Input } from 'components/atoms/Input/Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1/2;
  grid-column: 2/2;
  padding: 0 4rem;
  border-bottom: 0.1rem solid var(--color-lightGrey);

  @media ${({ theme }) => theme.mediaQueries.medium} {
    justify-content: center;
    padding: 1rem 0rem 1rem 6rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 45%;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 90%;
  }

  ${Input}:active, {
  ${Input}:focus {
    width: 100%;
  };
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: -0.2rem 0.6rem 1rem var(--color-darkGrey);
`;

export const SearchResultsItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 1.2rem;
  transition: all 200ms ease-in-out;
  background-color: ${({ theme, highlighted }) => (highlighted ? theme.colors.darkGrey : theme.colors.white)};
  color: white;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }

  &:hover {
    background-color: var(--color-darkGrey);
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  img {
    width: 8rem;
    border-radius: 1.2rem;
  }
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  color: ${({ highlighted }) => (highlighted ? 'var(--color-white)' : 'var(--color-darkGrey)')};
  margin-left: 2rem;

  ${SearchResultsItem}:hover & {
    color: white;
  }
`;
