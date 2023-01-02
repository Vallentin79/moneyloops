import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helper } from '../../services/helper';
import './EmpCard.css';

export interface Props {
    className: string;
    id: number;
    header: string;
    text: string;
    icon?: string;
    iconsize?: number;
    onCardSelectChange: (newId: number) => void;
}

function EmpCard({className, icon, header, text, iconsize, id, onCardSelectChange }: Props) {
    const [selected, setSelected] = useState({id});
    return (
        <div className={'main '+className} style={{marginBottom: 20}} onClick={(event) => {onCardSelectChange(id); Helper.resetPath();}}>
            <Container>
                <Row>
                    {icon ? (<Col style={{padding: 0}} xs={1} className="text-center"><i style={{ fontSize: iconsize }} className={icon}></i></Col>) : null}
                    <Col xs={11}>
                        <Container>
                            <Row><Col style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 8}}><p>{header}</p></Col></Row>
                            <Row><Col style={{fontSize: 14}}><span>{text}</span></Col></Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EmpCard;