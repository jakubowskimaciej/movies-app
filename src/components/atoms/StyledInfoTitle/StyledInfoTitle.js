import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const StyledInfoTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--color-darkGrey);
`;
