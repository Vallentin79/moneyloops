import React, { useState } from 'react';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import EmpCard from '../components/EmpCard/EmpCard';
import { Helper } from '../services/helper';
import LongTermPage from './LongTermPage';
import ShortTermPage from './ShortTermPage';

function LoopPage() {
    const [cardSelect, setCardSelect] = useState(0);
    const dataObjects = Helper.getEmpCardData();    
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <h2>What is your strategy?</h2>
            <Container fluid>
            {/* xs={1} sm={1} md={4} lg={6} */}
                <Row xs={1} sm={1} lg={2} xl={2} xxl={3}> 
                    {dataObjects.map( (card, index) => {
                        return <Col key={index}>
                            <EmpCard
                                className={cardSelect === card.id ? 'selected' : ''}
                                id={card.id}
                                onCardSelectChange={setCardSelect}
                                icon={card.icon}
                                iconsize={card.iconsize}
                                header={card.header}
                                text={card.text}></EmpCard>
                        </Col>
                    })}
                </Row>
            </Container>
            {cardSelect == 1 ?
                <ShortTermPage></ShortTermPage>
                : cardSelect == 2 ?
                    <LongTermPage></LongTermPage>
                    : null
            }
        </ThemeProvider>
    );
}

export default LoopPage;