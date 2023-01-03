import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoopCard from '../components/LoopCard/LoopCard';
import { Terms } from '../data/data.interfaces';
import { Helper } from '../services/helper';


Helper.resetPath();

function ShortTermPage() {
    const [parents, setParentSelect] = useState([0]); //{ name: '', group: [0] }
    const [children, setChildren] = useState([0]);
    const [activeLevel, setLevel] = useState(0);
    // const dataObjects = Helper.getLoopCardData(1);
    return (
        <>
            {/* parents: {parents.toString()} - path: {Helper.path.toString()} - children: {children.toString()} - level: {activeLevel} */}
            {/* LEVEL 1 */}
            <Container fluid className={'fade-in-item'}>
                <Row>
                    <Col style={{ padding: 0 }}><h3 style={{ marginBottom: 20 }}>Short Term</h3></Col>
                </Row>
                <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                    {Helper.getShortTermData(1).map((card, index) => {
                        return <Col key={index}>
                            <LoopCard
                                className={Helper.path.includes(card.id) ? 'selected' : ''}
                                card={card}
                                onParentSelectChange={setParentSelect}
                                onChildSelectChange={setChildren}
                                onLevelSelectChange={setLevel}></LoopCard>
                        </Col>
                    })}
                </Row>
            </Container>
            {/* LEVEL 2 */}
            {
                Helper.path.length >= 1 ?
                    <Container fluid className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>Choose your path</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getShortTermData(2).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.short)?.includes(card.id)) {
                                    return <Col key={index}>
                                        <LoopCard
                                            className={Helper.path.includes(card.id) ? 'selected' : ''}
                                            card={card}
                                            onParentSelectChange={setParentSelect}
                                            onChildSelectChange={setChildren}
                                            onLevelSelectChange={setLevel}></LoopCard>
                                    </Col>
                                }
                            })}
                        </Row>
                    </Container> : null
            }
            {/* LEVEL 3 */}
            {
                Helper.path.length >= 2 ?
                    <Container fluid className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>Great choice</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getShortTermData(3).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.short)?.includes(card.id)) {
                                    return <Col key={index}>
                                        <LoopCard
                                            className={Helper.path.includes(card.id) ? 'selected' : ''}
                                            card={card}
                                            onParentSelectChange={setParentSelect}
                                            onChildSelectChange={setChildren}
                                            onLevelSelectChange={setLevel}></LoopCard>
                                    </Col>
                                }
                            })}
                        </Row>
                    </Container> : null
            }
            {/* LEVEL 4 */}
            {
                Helper.path.length >= 3 ?
                    <Container fluid className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>It just keeps giving</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getShortTermData(4).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.short)?.includes(card.id)) {
                                    return <Col key={index}>
                                        <LoopCard
                                            className={Helper.path.includes(card.id) ? 'selected' : ''}
                                            card={card}
                                            onParentSelectChange={setParentSelect}
                                            onChildSelectChange={setChildren}
                                            onLevelSelectChange={setLevel}></LoopCard>
                                    </Col>
                                }
                            })}
                        </Row>
                    </Container> : null
            }
        </>
    );
}

export default ShortTermPage;