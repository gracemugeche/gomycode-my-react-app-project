import React from "react";
//import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
//import components from React-Bootstrap
import { Container, Nav, Navbar, NavDropdown, Card, Col, Row  } from "react-bootstrap";
//impot image
import ReactImage from "./assets/react.svg";



function App() {
  return (
    <>
      <div className="App">
         {/* --- Navbar Section --- */}
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

         {/* --- Welcome Heading --- */}
        <h1 className="text-center mt-4">Welcome to My First React App</h1>

        {/* --- Card Section --- */}
        <Container className="mt-4">
    <Row xs={1} md={3} className="g-4">
      {/* {cards} */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={ReactImage} />
            <Card.Body>
              <Card.Title>Card title {idx + 1}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
      </div>
    </>
  );
}

export default App;
