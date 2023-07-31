import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dark from '../assets/dark.png'
import flag from '../assets/flag.png'
import './Navbar.css'


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className='dark-mood-cont ' >
            <img src={dark} alt='dark'/>
        </div>
        <div className='lang-cont'>
            <p>اللغة العربية</p>
            <div className='flag-cont'>
                <img src={flag} alt='egypt-flag'/>
            </div>

        </div>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto links">
            <Nav.Link href="#main" className='link'>الرئيسية</Nav.Link>
            <Nav.Link href="#service" className='link'>خدماتنا</Nav.Link>
            <Nav.Link href="#who" className='link'>من نحن</Nav.Link>
            <Nav.Link href="#link" className='link'>شركائنا</Nav.Link>
            <Nav.Link href="#teamWork" className='link'>فريق العمل</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent