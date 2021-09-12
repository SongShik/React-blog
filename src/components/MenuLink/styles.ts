import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 1.8rem;
    padding-bottom: ${theme.spacings.small};
    border-right: 0.5rem sollid ${theme.colors.primary};
    transition: all 300ms ease-in-out;

    &:hover: {
      border-right: 0.5rem sollid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
