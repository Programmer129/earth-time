import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import './App.css';
import Voice from './components/Voice';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Finger from './components/Finger';


function App() {
  return (
    <div className="App">
        <Header/>
        <Container className = "mx-auto">
          <Row className="my-5">
            <Col  >
              <Finger/>
            </Col>
            <Col>
              <Voice/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Timer/>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default App;
