import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const StyledInfoTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
  color: var(--color-darkGrey);
`;
