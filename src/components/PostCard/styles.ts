import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Title as HeadingStyles } from '../Heading/styles'



export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    a{
      text-decoration: none;
      color:inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a{
      color: ${theme.colors.secondary}
    }
    
    &:hover img{
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    max-width: 100%;
  `}
`;

