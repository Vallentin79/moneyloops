import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './LoopCard.css';
import { Helper } from '../../services/helper';
import Modal from '../Modal/Modal';
import UseModal from '../Modal/UseModal';


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
    const { isOpen, toggle } = UseModal();

    function handleAnchorClick(event: any){
        // event.preventDefault();
        toggle();
    };

    return (
        <div className={'main ' + className} style={{ marginBottom: 20, paddingBottom: 5 }}>
            {/* <Container className={'text-center'}>
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
            </Container> */}
            <Container style={{ minHeight: 70 }} onClick={(event) => { onParentSelectChange(parents); onChildSelectChange(children); onLevelSelectChange(level); Helper.navigator(id, level) }}>
                <Row>
                    <Col style={{ padding: 0 }} xs={3} className="text-center">
                        {icon ? (<i style={{ fontSize: iconsize }} className={icon}></i>) : imageSrc ? <Image style={{
                            objectFit: 'cover',
                            padding: [36, 37].includes(id) ? 15 :
                                [13, 14, 100, 101, 102, 204, 205, 300, 301].includes(id) ? 5 : 0
                        }} width={imageWidth} height={imageWidth} src={process.env.PUBLIC_URL + imageSrc}></Image> : null}
                    </Col>
                    <Col xs={9} className="text-right" >
                        <Container>
                            <Row><Col style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 8 }}><p>{header}</p></Col></Row>
                            <Row><Col style={{ fontSize: 14, color: '#5d86ff' }}><span>{text}</span></Col></Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row xs={12}>
                    <Col>
                        <p onClick={event => handleAnchorClick(event)} className="anchor">View Info</p>
                        <Modal isOpen={isOpen} toggle={toggle}>
                            <div>yoyoyoyoyoyoyoyoyoyoyoyo</div>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoopCard;