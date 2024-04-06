import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {

const {user}=useContext(AuthContext);


    return (
        <Container>
            <div className='text-center '>
                <img src={logo} alt="" />
                <p className='text-secondary '><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd,MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-body-tertiary   rounded-2'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover className='text-danger ' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar expand="lg" >
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                           <Link to='/'>Home</Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href=''><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>{user.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href=''>
                                <Button variant="primary">Login</Button>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;