import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Collapse, Button, Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import LoopPage from './pages/LoopPage';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestionsPage from './pages/QuestionsPage';

function App() {

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <Tabs defaultActiveKey="questions" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="questions" title="Path Guidance">
          
          <Container fluid>
              <Row>
                <Col>
                  <h1 className="heading">Quick start questions</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Please take a minute to answer a few questions so we can point you in the right direction.</p>
                </Col>
              </Row>
            </Container>
            <Container fluid className='content'>
              <Row>
                <Col>
                  <QuestionsPage></QuestionsPage>
                </Col>
              </Row>
            </Container>

          </Tab>
          <Tab eventKey="loops" title="Find Your Path">
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
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
