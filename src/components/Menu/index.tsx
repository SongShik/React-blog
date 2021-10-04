
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import React, { useState } from 'react';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';

export type MenuPropsLinks = {
  id: string,
  link: string,
  newTab?: boolean,
  text: string;
};

export type MenuProps = {
  links: MenuLinkProps[];
  blogName: string;
  logo: string;
}

export const Menu = ({ links = [], blogName, logo, }: MenuProps) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  }

  return (
    <>
      <Styled.OpenClose href="#" menuVisible={menuVisible} onClick={handleOpenCloseMenu}>
        {menuVisible && <CloseIcon />}
        {!menuVisible && <MenuIcon aria-label="Open Menu" title="Open or close menu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink
              link="/"
              text={blogName}
              srcImg={logo}
            />

            {links.map(link => (
              <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            ))}
          </Styled.Logo>
        </Styled.Nav>



        {/* <MenuLink
        children={ }
        link={ }
        newTab={ }
      /> */}

      </Styled.Wrapper >
    </>
  );
};