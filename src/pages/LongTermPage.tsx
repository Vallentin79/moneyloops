import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoopCard from '../components/LoopCard/LoopCard';
import { Terms } from '../data/data.interfaces';
import { Helper } from '../services/helper';

Helper.resetPath();

function LongTermPage() {
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
                    <Col style={{ padding: 0 }}><h3 style={{ marginBottom: 20 }}>Long Term</h3></Col>
                </Row>
                <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                    {Helper.getLongTermData(1).map((card, index) => {
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
                    <Container fluid style={{ marginTop: 30, marginBottom: 30 }} className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>Choose your path</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getLongTermData(2).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.long)?.includes(card.id)) {
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
                    <Container fluid style={{ marginTop: 30, marginBottom: 30 }} className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>Great choice</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getLongTermData(3).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.long)?.includes(card.id)) {
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
                    <Container fluid style={{ marginTop: 30, marginBottom: 30 }} className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>It just keeps giving</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getLongTermData(4).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.long)?.includes(card.id)) {
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
            {/* LEVEL 5 */}
            {
                Helper.path.length >= 4 ?
                    <Container fluid style={{ marginTop: 30, marginBottom: 30 }} className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>Keep the wheel turning</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getLongTermData(5).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.long)?.includes(card.id)) {
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
            {/* LEVEL 6 */}
            {
                Helper.path.length >= 5 ?
                    <Container fluid style={{ marginTop: 30, marginBottom: 30 }} className={'fade-in-item'}>
                        <Row>
                            <Col><h3 style={{ marginBottom: 20 }}>This is awesome</h3></Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                            {Helper.getLongTermData(6).map((card, index) => {
                                if (children.includes(card.id) || Helper.getParentChildren(card.level, Terms.long)?.includes(card.id)) {
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

export default LongTermPage;