import GenreButton from 'components/atoms/GenreButton/GenreButton';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  padding: 4rem;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

export const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: var(--color-darkGrey);
  line-height: 1.1;
`;

export const MovieTagLine = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-darkGrey);
  text-transform: uppercase;
  margin: 0 0 1rem 0.5rem;
`;

export const DetailWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    color: var(--color-lightGrey);
    text-transform: uppercase;
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
