import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Offcanvas,
  Button,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
  Stack,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <header>
        <Navbar bg="white" expand="lg">
          <Container fluid>
            <Navbar.Brand className="navName mx-5 px-2">W.</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 px-5 mx-5">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">New</Nav.Link>
                  <Nav.Link href="#action2">Popular</Nav.Link>
                  <Nav.Link href="#action2">Trending</Nav.Link>
                  <Nav.Link href="#action2">Categories</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <body>
        <Container className="mt-3 mx-5">
          <Row>
            <Col lg="8" md="8" className="flex-grow-1">
              <Container fluid>
                <img className="homeimg" src={require("./1.jpg")} />
              </Container>
              <Container className="d-flex mt-3">
                <Row lg="8" md="8">
                  <Col lg="6" md="6">
                    <p
                      className="me-5"
                      style={{
                        fontSize: 55 + `px`,
                        color: `rgb(15, 15, 70)`,
                        fontWeight: `bolder`,
                        lineHeight: 1,
                      }}
                    >
                      The Bright Future of Web 3.0?
                    </p>
                  </Col>
                  <Col lg="6" md="6">
                    <Stack>
                      <p
                        className="text-muted me-4"
                        style={{
                          fontSize: 17 + `px`,
                          lineHeight: 1.2,
                        }}
                      >
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people But is it really fulfilling its promise?
                      </p>
                      <Container className="mx-0 px-0 mt-4">
                        <Button className="btn-danger mx-0 px-5">
                          READ MORE
                        </Button>
                      </Container>
                    </Stack>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg="3" md="3" className="d-flex rightCol mt-sm-5 mb-3 pb-0">
              <Container className="d-flex mt-sm-5 mt-3 mb-0 pb-0">
                <Stack>
                  <p
                    style={{
                      fontSize: 40 + `px`,
                      fontWeight: 900,
                      color: `rgb(160, 157, 114)`,
                    }}
                  >
                    New
                  </p>
                  <h1>Hydrogen VS Electric Cars</h1>
                  <h2>Will hydrogen-feuled cars ever catch up to EVs?</h2>
                  <hr className="d-flex text-white" />
                  <h1>The Downsides of AI Artistry</h1>
                  <h2>
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </h2>
                  <hr className="text-white" />
                  <h1>Is VC Funding Drying Up?</h1>
                  <h2>
                    Private funding by VC firms is down 50% YoY. We take a look
                    at what that means.
                  </h2>
                </Stack>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex flex-row mx-5 my-5">
          <Col lg="4" md="4">
            <Container className="d-flex flex-row">
              <Col lg="4" md="4">
                <img
                  className="previmg pe-3"
                  src={require("./image-retro-pcs.jpg")}
                />
              </Col>
              <Col lg="8" md="8">
                <Stack>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: 40 + `px`,
                      opacity: 0.3,
                    }}
                  >
                    01
                  </p>
                  <h3>Reviving Retro PCs</h3>
                  <p
                    style={{
                      fontSize: 30 + `px !important`,
                      fontWeight: 100 + `!important`,
                      opacity: 0.8,
                    }}
                  >
                    What happens when old PCs are given modern upgrades?
                  </p>
                </Stack>
              </Col>
            </Container>
          </Col>

          <Col lg="4" md="4">
            <Container className="d-flex flex-row">
              <Col lg="4">
                <img
                  className="previmg pe-3"
                  src={require("./image-top-laptops.jpg")}
                />
              </Col>
              <Col lg="8" md="8">
                <Stack>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: 40 + `px`,
                      opacity: 0.3,
                    }}
                  >
                    02
                  </p>
                  <h3>Top 10 Laptops of 2022</h3>
                  <p
                    style={{
                      fontSize: 30 + `px !important`,
                      fontWeight: 100 + `!important`,
                      opacity: 0.8,
                    }}
                  >
                    Our best picks for various needs and budgets.
                  </p>
                </Stack>
              </Col>
            </Container>
          </Col>

          <Col lg="4" md="4">
            <Container className="d-flex flex-row">
              <Col lg="4" md="4">
                <img
                  className="previmg pe-3"
                  src={require("./image-gaming-growth.jpg")}
                />
              </Col>
              <Col className="mx-3" lg="8" md="8">
                <Stack>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: 40 + `px`,
                      opacity: 0.3,
                    }}
                  >
                    03
                  </p>
                  <h3>The Growth of Gaming</h3>
                  <p
                    style={{
                      fontSize: 30 + `px !important`,
                      fontWeight: 100 + `!important`,
                      opacity: 0.8,
                    }}
                  >
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </Stack>
              </Col>
            </Container>
          </Col>
        </Container>
      </body>
    </div>
  );
}

export default App;
