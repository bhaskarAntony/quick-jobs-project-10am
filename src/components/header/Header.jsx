import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getprofile, isAuthenticated, logout } from '../../logic/LogicStore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { adminLogout } from '../../logic/adminLogic';

function Header() {
    const [checkuser, setCheckuser] = useState(isAuthenticated())
    const [profile, setProfile] = useState(getprofile() || {});
    const location = useLocation();
    useEffect(()=>{
        setCheckuser(isAuthenticated())  
    }, [location])
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/" className='text-light'>Quick Jobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            {
                checkuser?( <Nav.Link href="/jobs" className='text-light'>Jobs</Nav.Link>):(null)
            }
           
          </Nav>
            {
                checkuser?(  <NavDropdown title={profile.username} id="basic-nav-dropdown" className='text-light'>
                  
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={logout}>
                     Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={adminLogout}>Admin Logout</NavDropdown.Item>

                  </NavDropdown> ):(
                    <div className='d-flex flex-wrap gap-3'>
                      <a href='/login' className="btn btn-light">User login</a>
                    <a href='/admin/login' className="btn btn-light">Admin login</a>
                  </div> )
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;