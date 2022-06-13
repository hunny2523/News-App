import { Navbar ,NavItem,Nav,NavLink,Collapse,NavbarToggler,NavbarBrand} from 'reactstrap';
import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          NavisOpen: false
        };
      }
      toggle() {
        this.setState({
          NavisOpen: !this.state.NavisOpen
        });
      }
  render() {
    return (
    <>
    <Navbar  className='navbar-side' color="dark" dark expand="md">
        <NavbarBrand className='mx-md-auto' href="/">New News</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse className='justify-content-center' isOpen={this.state.NavisOpen} navbar>
          <Nav navbar vertical>
            <NavItem>
              <NavLink href="/">General</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/business">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entertainment">Entertainment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/science">Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/health">Health</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sports">Sports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/technology">Technology</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
    );
  }
}
