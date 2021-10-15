import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  min-width: 15rem;
  background-color: ${({ isSecondary }) =>
    isSecondary ? 'var(--color-darkGrey)' : 'var(--color-white)'};
  color: ${({ isSecondary }) =>
    isSecondary ? 'var(--color-white)' : 'var(--color-darkGrey)'};
  border: 0.1rem solid
    ${({ isSecondary }) =>
      isSecondary ? 'var(--color-darkGrey)' : 'var(--color-lightGrey)'};
  border-radius: 50rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 300ms;
  margin: 0.5rem 0;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    box-shadow: 0 0.7rem 0.5rem -0.5rem rgb(115 124 142);
    transform: translateY(-0.3rem);
  }
`;
