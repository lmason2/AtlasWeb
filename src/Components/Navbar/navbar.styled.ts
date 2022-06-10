import styled from "styled-components"
// import { ubuntu } from "../src/assets/fonts/Ubuntu-Regular.ttf";

enum VARIANT {
    PRIMARY,
    SECONDARY
  }
interface IProps {
variant?: VARIANT
}

const NavbarContainer = styled.div<IProps>`
  background-color: ${(props) => props.theme.palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-right: 20px;
  margin-left: 20px;
`;

const NavbarTypography = styled.p<{open: boolean}>`
    color: ${(props) => props.theme.palette.primary.main};
    font-family: 'Ubuntu', sans-serif;
    font-size: 60px;
    margin-right: auto;
    margin-left: ${open => open ? `75px` : ''}
`;

export { NavbarContainer, NavbarTypography }