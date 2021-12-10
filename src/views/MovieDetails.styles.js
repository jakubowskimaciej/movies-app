import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import GenreButton from 'components/atoms/GenreButton/GenreButton';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  grid-row: 2/2;
  grid-column: 2/2;
  padding: 4rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 70%;
  width: 100%;
  padding-right: 5rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: var(--color-darkGrey);
  line-height: 1.1;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const MovieTagLine = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-darkGrey);
  text-transform: uppercase;
  margin: 0 0 1rem 0.5rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0.5rem 0 2rem 0;
  }
`;

export const DetailWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 3rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    color: var(--color-lightGrey);
    text-transform: uppercase;
  }
`;

export const RatingWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: inherit;
  justify-content: flex-start;
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-left: 5rem;
  }
`;

export const InfoWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0 3rem 1rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    text-transform: none;
    color: var(--color-darkGrey);
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledGenreLink = styled(GenreButton)`
  margin-right: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  color: var(--color-lightGrey);
  width: unset;
  border: 0.1rem solid var(--color-lightGrey);

  &:hover {
    border: 0.1rem solid var(--color-grey);
    color: var(--color-grey);
    transform: translateY(-0.3rem);
  }
`;

export const ActiveButton = styled(Button)`
  width: 90%;
  max-width: 42rem;
  padding: 1rem 2rem;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 0.1rem solid
    ${({ isSecondary }) =>
      isSecondary ? 'var(--color-darkGrey)' : 'var(--color-success)'};
  background-color: ${({ isSecondary }) =>
    isSecondary ? 'var(--color-darkGrey)' : 'var(--color-success)'};
  color: var(--color-white);

  &:active {
    transform: translateY(0.5rem);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
