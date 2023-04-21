import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Amde from './navbar.module.css'
import styled from 'styled-components';

function BasicExample() {
  return (
    <Mynav>
    <Navbar className='naves' fixed-top  expand="lg">
      <Container >
        <Navbar.Brand href="#home">Amde-Amba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='togg' />
        <Navbar.Collapse id="basic-navbar-nav" className='collapsee' >
          <Nav className="linkholder">
            <Nav.Link href="/" className='Linkss'>Home</Nav.Link>
            <Nav.Link href="/lists" className='Linkss'>View</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Mynav>
  );
}

export default BasicExample;

const Mynav=styled.div`

  .naves{
    width: 100%;
    background-color:#0096FF ;
    
  
}
@media only screen and (min-width: 300px)and (max-width:490px)  {

  .naves{
    width: 100%;
    background-color:#0096FF ;
}
}
.Linkss{
    color: white !important;
   font-size: 20px;
   justify-content: space-between;
   margin-left: 20px;
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
  .Linkss{
    color: white !important;
   font-size: 20px;
   justify-content: space-between;
   margin-left: -500px;
}

}
.linkholder{
    margin-left: 500px;
}
.togg{

}
@media only screen and (min-width: 300px)and (max-width:490px)  {
  .togg{
     margin-left:-100px !important;
     color:red;
}
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
.collapsee{
 color:white;
 margin-left:70px;
}
}
`