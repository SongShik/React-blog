import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small} + 0.2rem;

    p{
      margin: ${theme.spacings.medium} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
    }

    a:hover{
      text-decoration: undeline;
    }

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    pre{
      background: ${theme.colors.primary}
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium};
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    img{
      max-width: 100%;
    }

    .image{
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption{
      font-size: ${theme.font.sizes.small};
      margin: ${theme.spacings.medium} 0;
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side{
      max-width: 50%
      float:right;
      margin: ${theme.spacings.medium};
    }

    hr{
      border: none;
      boder-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacings.medium};
    }

    .table{
      width: 100%;
      overflow: hiden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      boder-collapse: collapse;
    }

    table td, table th {
      padding: ${theme.spacings.small}
      boder: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium}{
      font-size: 1.8rem;

      .image-style-side{
        max-width: 100%
        float:none;
        margin: ${theme.spacings.medium};
      }

    }

  `}
`;
