import React, { ChangeEvent, useState } from 'react';
import { ThemeProvider, Container, Row, Col, Form } from 'react-bootstrap';
import { Questions } from '../data/data.interfaces';


function QuestionsPage() {
    const [getQ, setQ] = useState<Questions>({
        Investment: 1000,
        Goals: 1,  
        Interact: 1     
    });
     // 
    const [showResult, setResult] = useState(false);


    const GoalsText = [
        "Funds 100% accessible. Nothing locked. Lowest returns and risk.",
        "Funds 75% accessible. 25% locked. Medium returns and risk.",
        "Funds 50% accessible and 50% locked. Medium-high returns and risk.",
        "Funds 25% accessible and 75% locked. Highest returns and risk."
    ]

    const InteractText = [
        "Yes",
        "A bit of both",
        "I don’t know",
        "No"
    ]

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        //setResult(false);
        const element = e.target;
        const value = element.type == 'checkbox' ? element.checked : parseInt(element.value) | 0;
        setQ({ ...getQ, [element.name]: value });
    }

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container fluid>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={2}>
                    <Col><h3>How much are you comfortable investing?</h3></Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={3} xxl={3}>
                    <Col className='answer'><span style={{ color: 'white' }}>My Investment:</span> $ {getQ.Investment}{(getQ.Investment == 10000 ? <span style={{ position: 'relative', top: -1, left: 1 }}>+</span> : '')}</Col>
                </Row>
                <Row xs={1} sm={1} lg={2} xl={3} xxl={3}>
                    <Col style={{ paddingTop: 4 }}><input name="Investment" type="range" min="100" max="10000" step="100" value={getQ.Investment} onChange={inputChange} className="slider" /></Col>
                </Row>
            </Container>
            <Container fluid style={{ marginTop: 40 }}>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={2}>
                    <Col><h3>What are your investing goals? Which of these most apply to you?</h3></Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={2}>
                    <Col className='answer'><span style={{ color: 'white' }}>Answer:</span> {GoalsText[getQ.Goals]}</Col>
                </Row>
                <Row xs={1} sm={1} lg={2} xl={3} xxl={3}>
                    <Col style={{ paddingTop: 4 }}><input name="Goals" type="range" min="0" max="3" step="1" value={getQ.Goals} onChange={inputChange} className="slider" /></Col>
                </Row>
            </Container>
            <Container fluid style={{ marginTop: 40 }}>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={2}>
                    <Col><h3>Are you willing/able to interact with the protocol on a daily basis to compound/claim, or are you wanting to set it and forget it?</h3></Col>
                </Row>
                <Row xs={1} sm={1} lg={1} xl={2} xxl={2}>
                    <Col className='answer'><span style={{ color: 'white' }}>Answer:</span> {InteractText[getQ.Interact]}</Col>
                </Row>
                <Row xs={3} sm={3} lg={2} xl={3} xxl={3}>
                    <Col style={{ paddingTop: 4 }}><input name="Interact" type="range" min="0" max="1" step="0" value={getQ.Interact} onChange={inputChange} className="slider" /></Col>
                </Row>
            </Container>
            <Container fluid style={{ marginTop: 40 }}>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={2}>
                    <Col>
                        <button onClick={() => getResult()} className="button" type="button">
                            <span className="buttonText">Get My Strategy</span>
                        </button>
                    </Col>
                </Row>
            </Container>
            {showResult ?
                <div>
                    <br />
                    <span>Investment {getQ.Investment} </span>
                    <br />
                    <span>Goal {getQ.Goals} </span>
                    <br />
                    <span>Risk {getQ.Interact} </span>
                </div>
                : null}
            {/* <button onClick={() => console.log("q", getQ)}>click</button> */}
        </ThemeProvider>
    );


    function getResult() {
        setResult(true);
        console.log(getQ);

    }
}



export default QuestionsPage;