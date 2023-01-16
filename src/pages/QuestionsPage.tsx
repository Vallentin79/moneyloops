import React, { useState } from 'react';
import { ThemeProvider, Container, Row, Col } from 'react-bootstrap';
import EmpCard from '../components/EmpCard/EmpCard';
import LongTermPage from './LongTermPage';
import ShortTermPage from './ShortTermPage';

function QuestionsPage() {
    const [investment, setInvestment] = useState(1000);
    const handleInvestment = (e: any) => setInvestment(e.target.value);
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container fluid>
                <Row xs={1} sm={1} lg={1} xl={1} xxl={1}>
                    <Col>
                        <h3>How much are you comfortable investing?</h3>
                    </Col>
                </Row>
                <Row xs={1} sm={1} lg={4} xl={4} xxl={4}>
                    <Col style={{paddingTop: 4}}>
                        <input type="range" min="100" max="10000" step="100" value={investment} onChange={handleInvestment} className="slider" id="myRange" />
                    </Col>
                    <Col style={{fontSize: 18, fontWeight: 'bold'}}>
                        ${investment}
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

export default QuestionsPage;