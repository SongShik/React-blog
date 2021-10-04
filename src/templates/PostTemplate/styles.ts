import styled, { css } from 'styled-components';

export const TagsContainer = styled.a`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large}
  `}
`;
