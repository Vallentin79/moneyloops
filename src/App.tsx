import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Collapse, Button, Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import LoopPage from './pages/LoopPage';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="heading">Money Loops</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Here you find different money loops inside the EMP.Money eco system. That all take profit in eShares, without hurting the protocol!</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className='content'>
          <Row>
            <Col>
              <LoopPage></LoopPage>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
