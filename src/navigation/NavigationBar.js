import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';


const NavigationBar = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleLogin = (event) => {
        event.preventDefault();
        props.setLogin(true);
  }
  const handleSignup = (event) => {
    event.preventDefault();
    props.setLogin(false);
}


  const toggle = () => setIsOpen(!isOpen);
    return(
    <div>
      <Navbar color="dark" dark expand="md">
        
        <NavbarBrand href="/">Moppet</NavbarBrand>
      

        <NavbarToggler onClick={toggle}  />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              { (!props.sessionTokenLogged) ? <NavLink onClick={handleLogin}style={{ cursor: "pointer"}}>Login</NavLink> : <></>}
            </NavItem>
            <NavItem>
            { (!props.sessionTokenLogged) ? <NavLink onClick={handleSignup}style={{ cursor: "pointer"}}>Signup</NavLink> : <></>}
            </NavItem>
            <NavItem>
              <NavLink style={{ cursor: "pointer"}} onClick={props.clickLogout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
    );
};

export default NavigationBar;