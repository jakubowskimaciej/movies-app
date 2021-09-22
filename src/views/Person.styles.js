import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const BioWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

export const StyledName = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
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

export const MoviesWrapper = styled.div`
  width: 100%;
  height: 100vh;

  h2 {
    margin-left: 4rem;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 300;
    color: var(--color-grey);
  }
`;
