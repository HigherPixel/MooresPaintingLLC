import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ReactDOM from "react-dom";


class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedType: "" };
  }

  handleSort = (e) => {
    this.props.changeUp(e);
    console.log("The link was clicked." + e);
    this.setState({ selectedType: e });
    console.log(this.state.selectedType);
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav>
              <Nav.Link href="#" onClick={() => this.handleSort("Interior")}>
                Interior
              </Nav.Link>
              <Nav.Link href="#" onClick={() => this.handleSort("Exterior")}>
                Exterior
              </Nav.Link>
              <Nav.Link href="#" onClick={() => this.handleSort("Pricing")}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#" onClick={() => this.handleSort("")}>
                Home
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default Navi;
