import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>Eri Film</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#superhero">Super Hero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
