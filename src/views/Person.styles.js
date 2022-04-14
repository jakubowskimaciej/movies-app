import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import LazyLoad from 'react-lazyload';

export const Wrapper = styled.section`
  width: 100%;
  grid-row: 2/2;
  grid-column: 2/2;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLazyLoad = styled(LazyLoad)`
  width: 65%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  img {
    max-height: 60rem;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 80%;
    margin: 0 0 3.5rem 0;
  }
`;

export const ImgLoading = styled.div`
  width: 100%;
  max-width: 40rem;
  max-height: 80rem;
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const BioWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 5rem auto;
  padding: 2rem 1rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }
`;

export const StyledName = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 6rem 2rem 4rem;
`;

export const StyledBirthday = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  margin: 0 0 3rem 0.5rem;
  color: var(--color-darkGrey);
`;

export const StyledBio = styled.p`
  line-height: 2;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledH2 = styled.h2`
  margin-left: 4rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;
  color: var(--color-grey);
`;
