import React from 'react';
import { StyledHR } from '../../Shared/shared.styled';
import { MenuTypography } from '../../Shared/typography.styled';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { StyledMenu } from './menu.styled';
import LandingPage from '../../../Pages/LandingPage';
import MyTeam from '../../../Pages/MyTeam';
import TrainingHome from '../../../Pages/MyTraining';

const Menu = (props:any) => {
  return (
    <StyledMenu open={props.open}>
      <Router>
        <MenuTypography>
          <Link to="/team">My Team</Link>
          <StyledHR />
        </MenuTypography>
        <MenuTypography>
          <Link to="/training">My Training</Link>
          <StyledHR />
        </MenuTypography>
        <MenuTypography>
          <Link to="/weights">My Weights</Link>
          <StyledHR />
        </MenuTypography>
        <MenuTypography>
          <Link to="/messages">My Messages</Link>
          <StyledHR />
        </MenuTypography>
        <MenuTypography>
          <Link to="/account">My Account</Link>
          <StyledHR />
        </MenuTypography>
      </Router>
    </StyledMenu>
  );
}
export default Menu;