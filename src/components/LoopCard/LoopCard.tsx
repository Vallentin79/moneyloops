import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './LoopCard.css';
import ethLP from '../../assets/ethLP.png'
import eShare from '../../assets/eshare.png'
import defender from '../../assets/defender.png'
import sentinel from '../../assets/sentinel.png'
import { Helper } from '../../services/helper';


export interface Props {
    id: number;
    className: string;    
    children: number[];
    parents: number[];
    header: string;
    text: string;
    icon?: string;
    iconsize?: number;
    imageSrc?: string;
    imageWidth?: number;
    level: number;
    onParentSelectChange: (parent: number[]) => void;    //{name: string, group: number[]}
    onChildSelectChange: (child: number[]) => void;
    onLevelSelectChange: (level: number) => void;
}

function LoopCard({ id, parents, level, children, className, header, text, icon, iconsize, imageSrc, imageWidth, onParentSelectChange, onChildSelectChange, onLevelSelectChange }: Props) {
    const [parent, setParentSelect] = useState({ parents });
    const [child, setChild] = useState({ children });
    const [activeLevel, setLevel] = useState({ level });

    return (
        <div className={'main ' + className} style={{marginBottom: 20}} onClick={(event) => { onParentSelectChange(parents); onChildSelectChange(children); onLevelSelectChange(level); Helper.navigator(id, level) }}>
            <Container className={'text-center'}>
                <Row>
                    {icon ?
                        <i style={{ fontSize: iconsize }} className={icon}></i>
                        : imageSrc ? <Col style={{ padding: 0 }}><Image style={{
                            padding: [36,37].includes(id) ? 15 : 
                            [13,14,100,101,102,204,205,300,301].includes(id) ? 5 : 0}} width={imageWidth} src={process.env.PUBLIC_URL+imageSrc}></Image></Col> : null
                    }
                </Row>
                <Row>
                    <Col><h4>{header}</h4></Col>
                </Row>
                <Row>
                    <Col style={{fontSize: 14}}><span style={{color: '#5d86ff'}}>{text}</span></Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoopCard;