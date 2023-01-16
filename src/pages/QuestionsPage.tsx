import React, { useState } from 'react';
import { ThemeProvider, Container, Row, Col } from 'react-bootstrap';


function QuestionsPage() {
    const [investment, setInvestment] = useState(1000);
    const [goalsA, setGoalsA] = useState(false);
    const [goalsB, setGoalsB] = useState(false);
    const [goalsC, setGoalsC] = useState(false);
    const [goalsD, setGoalsD] = useState(false);
    const handleInvestment = (e: any) => setInvestment(e.target.value);
    const handleGoalsA = (e: any) => setGoalsA(e.target.checked);
    const handleGoalsB = (e: any) => setGoalsB(e.target.checked);
    const handleGoalsC = (e: any) => setGoalsC(e.target.checked);
    const handleGoalsD = (e: any) => setGoalsD(e.target.checked);
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container fluid>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col><h3>How much are you comfortable investing?</h3></Col>
                </Row>
                <Row xs={1} sm={1} lg={4} xl={4} xxl={4}>
                    <Col style={{ paddingTop: 4 }}><input type="range" min="100" max="10000" step="100" value={investment} onChange={handleInvestment} className="slider" id="myRange" /></Col>
                    <Col style={{ fontSize: 18, fontWeight: 'bold' }}>${investment}</Col>
                </Row>
            </Container>
            <Container fluid style={{ marginTop: 30 }}>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col><h3>What are your investing goals? Which of these most apply to you?</h3></Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col xs={1} style={{ paddingTop: 4, display: 'flex' }}>
                        <label className="cb_container">A - All accessible, no locked, lowest returns (Farms and Magik). Lowest risk. (100% farms)
                            <input type="checkbox" checked={goalsA} onChange={handleGoalsA} id="cb_A" />
                            <span className="cb_checkmark"></span>
                        </label>
                    </Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col xs={1} style={{ paddingTop: 4, display: 'flex' }}>
                        <label className="cb_container">B - Mostly accessible, some locked, medium returns  (75% Farms and 25% Locked) (Default). Medium risk
                            <input type="checkbox" checked={goalsB} onChange={handleGoalsB} id="cb_B" />
                            <span className="cb_checkmark"></span>
                        </label>
                    </Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col xs={1} style={{ paddingTop: 4, display: 'flex' }}>
                        <label className="cb_container">C - Half accessible, half locked, medium-high returns. Medium-high risk. (50% farms and 50% locked)
                            <input type="checkbox" checked={goalsC} onChange={handleGoalsC} id="cb_C" />
                            <span className="cb_checkmark"></span>
                        </label>
                    </Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col xs={1} style={{ paddingTop: 4, display: 'flex' }}>
                        <label className="cb_container">D - Mostly locked, some accessible, high returns. Highest risk. (75% locked and 25% farms)
                            <input type="checkbox" checked={goalsD} onChange={handleGoalsD} id="cb_D" />
                            <span className="cb_checkmark"></span>
                        </label>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

export default QuestionsPage;