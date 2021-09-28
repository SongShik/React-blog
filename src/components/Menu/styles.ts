import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HadingStyles } from '../Heading/styles'

type MenuBehaviorProps = {
    menuVisible: boolean,
}

const wrapperChanger = (menuVisible: MenuBehaviorProps['menuVisible'], theme: DefaultTheme) => css`
    left: ${menuVisible ? '0' : '-32rem'};
    overflow-y: ${menuVisible ? 'auto' : 'hidden'};
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
    ${({ theme, menuVisible }) => css`
        background: ${theme.colors.primary};
        padding: ${theme.spacings.large};
        display:flex;
        position: fixed;
        z-index: 1;
        width:100%;
        max-width:32rem;
        height: 100vh;
        top:0;
        left:0;
        transition: all 300ms ease-in-out;

        ${wrapperChanger(menuVisible, theme)}
    `}
`;

export const Nav = styled.nav`
    ${({ theme }) => css`
        margin: auto;
        width: 100%;
    `}
`;

export const Logo = styled.nav`
    ${({ theme }) => css`
        ${HadingStyles} {
            display: flex;
            justify-content: center;
            margin: 0 0 ${theme.spacings.xxlarge} 0;
        }

        img{
            border: 0.5 solid ${theme.colors.secondary};
        }
    `}
`;

const buttonChanger = (menuVisible: MenuBehaviorProps['menuVisible'], theme: DefaultTheme) => css`
    left: ${menuVisible ? '26rem' : '1rem'};
    color: ${menuVisible ? theme.colors.secondary : theme.colors.white};
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
    ${({ theme, menuVisible }) => css`
        position: fixed;
        top: ${theme.spacings.medium};
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        z-index: 2;
        width: 3rem;
        height: 3rem;
        left: 26rem;
        transition: all 300ms ease-in-out;
        border-radius 0.3rem;

        ${buttonChanger(menuVisible, theme)};
    `}
`;