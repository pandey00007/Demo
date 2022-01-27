import React,{useState} from "react";
import './Header.css';
import Logo from '../../logo.svg';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Container,Button} from 'reactstrap';
import {Dropdown} from 'react-bootstrap';

    import {Link } from "react-router-dom";
    // import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
    // import LanguageIcon from '@material-ui/icons/Language';

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          <Navbar light expand="md">
          <Container fluid>
            <div className="d-flex justify-content align-center ft-size">
              <NavbarBrand href="/"><img src={Logo} className='logo' alt="Logo" /></NavbarBrand>
              <div className="right">
              <NavItem>
                <Link to="#" className="nav-link white book">Pricing</Link>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link white book">Contact</Link>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link white book">Training</Link>
              </NavItem>
              <NavItem>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Resources
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link white book">Login</Link>
              </NavItem>
              <NavItem>
                <Button className="btn-blue">Get Started</Button>
              </NavItem>
              </div>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link white noBor mt-8"></Link>
                </NavItem>
                
              </Nav>
            </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }

export default Header;