import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import FormSuccess from './FormSuccess';
var bootstrap = require('react-bootstrap');

var data;
function setData(value) {
  data = value;
}
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    console.log(data);
  }

  return (
    <div className="App">
      <bootstrap.Navbar>
        <bootstrap.Container>
          <bootstrap.Navbar.Brand href="#home">
            React-Bootstrap
          </bootstrap.Navbar.Brand>
          <bootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <bootstrap.Navbar.Collapse id="basic-navbar-nav">
            <bootstrap.Nav className="me-auto">
              <bootstrap.Nav.Link href="#home">Home</bootstrap.Nav.Link>
              <bootstrap.Nav.Link href="#link">Link</bootstrap.Nav.Link>
              <bootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <bootstrap.NavDropdown.Item href="#action/3.1">
                  Action
                </bootstrap.NavDropdown.Item>
                <bootstrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </bootstrap.NavDropdown.Item>
                <bootstrap.NavDropdown.Item href="#action/3.3">
                  Something
                </bootstrap.NavDropdown.Item>
                <bootstrap.NavDropdown.Divider />
                <bootstrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </bootstrap.NavDropdown.Item>
              </bootstrap.NavDropdown>
            </bootstrap.Nav>
          </bootstrap.Navbar.Collapse>
        </bootstrap.Container>
      </bootstrap.Navbar>
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}
export default App;
export { data, setData };
