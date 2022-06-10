import React from 'react';
import { StyledHR } from '../../Shared/shared.styled';
import { MenuTypography } from '../../Shared/typography.styled';
import { NavbarTypography } from '../navbar.styled';
import { StyledMenu } from './menu.styled';

const Menu = (props:any) => {
  return (
    <StyledMenu open={props.open}>
      <MenuTypography>
        <a href="/">My Team</a>
        <StyledHR />
      </MenuTypography>
      <MenuTypography>
        <a href="/">My Training</a>
        <StyledHR />
      </MenuTypography>
      <MenuTypography>
        <a href="/">My Weights</a>
        <StyledHR />
      </MenuTypography>
      <MenuTypography>
        <a href="/">My Messages</a>
        <StyledHR />
      </MenuTypography>
      <MenuTypography>
        <a href="/">My Account</a>
        <StyledHR />
      </MenuTypography>
    </StyledMenu>
  );
}
export default Menu;