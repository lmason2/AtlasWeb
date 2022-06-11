import * as React from "react"
import { GenericButton } from "../Shared/shared.styled";
import Burger from "./Hamburger";
import Menu from "./Menu";
import { NavbarContainer, NavbarTypography } from "./navbar.styled";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };
    return (
      <NavbarContainer>
        {props.authenticated && (
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        )}
        <Router>
          <NavbarTypography open={open}>
            <Link to="/feed" style={{textDecoration: "none", color: "inherit"}}>Atlas </Link>
          </NavbarTypography>
        </Router>

        <GenericButton>
          {props.authenticated ? `Sign Out` : `Sign In`}
        </GenericButton>
      </NavbarContainer>
    );
}

export default Navbar;