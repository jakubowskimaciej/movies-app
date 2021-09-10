import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 0 4rem;

  ${Title} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 300;
  }

  p {
    margin: -1rem 0 0 0.2rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: var(--color-grey);
    text-transform: uppercase;
  }
`;
