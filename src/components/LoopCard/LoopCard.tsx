import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './LoopCard.css';
import { Helper } from '../../services/helper';
import Modal from '../Modal/Modal';
import UseModal from '../Modal/UseModal';
import { LoopCardObject, ModalContent } from '../../data/data.interfaces';
import UseVideoModal from '../Modal/UseVideoModal';


export interface Props {
    card: LoopCardObject,
    // id: number;
    className: string;
    // children: number[];
    // parents: number[];
    // header: string;
    // text: string;
    // icon?: string;
    // iconsize?: number;
    // imageSrc?: string;
    // imageWidth?: number;
    // level: number;
    // modalContent: ModalContent[];
    // videoSrc: string;
    onParentSelectChange: (parent: number[]) => void;    //{name: string, group: number[]}
    onChildSelectChange: (child: number[]) => void;
    onLevelSelectChange: (level: number) => void;
}
// id, parents, level, children, className, header, text, icon, iconsize, imageSrc, imageWidth, modalContent, videoSrc
function LoopCard({ card, className, onParentSelectChange, onChildSelectChange, onLevelSelectChange }: Props) {
    // const [parent, setParentSelect] = useState({ parents });
    // const [child, setChild] = useState({ children });
    // const [activeLevel, setLevel] = useState({ level });
    const { isOpen, toggle } = UseModal();
    const { isVideoOpen, toggleVideo } = UseVideoModal();

    function handleAnchorClick(event: any) {
        // event.preventDefault();
        toggle();
    };

    function handleVideoClick(event: any) {
        // event.preventDefault();
        toggleVideo();
    };

    // , padding: [36, 37].includes(card.id) ? 15 : [13, 14, 100, 101, 102, 204, 205, 300, 301].includes(card.id) ? 5 : 0

    return (
        <div className={'main ' + className} style={{ marginBottom: 20, paddingBottom: 5 }} onClick={(event) => { onParentSelectChange(card.parents); onChildSelectChange(card.children); onLevelSelectChange(card.level); Helper.navigator(card.id, card.level) }}>
            <Container style={{ minHeight: 70 }} >
                <Row>
                    <Col style={{ padding: 0 }} xs={3} className="text-center">
                        {card.icon ? (<i style={{ fontSize: card.iconsize }} className={card.icon}></i>) : card.imageSrc ? <Image style={{
                            objectFit: 'cover'
                        }} width={card.imageWidth} height={card.imageWidth} src={process.env.PUBLIC_URL + card.imageSrc}></Image> : null}
                    </Col>
                    <Col xs={9} className="text-right" >
                        <Container>
                            <Row><Col style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 8 }}><p>{card.header}</p></Col></Row>
                            <Row><Col style={{ fontSize: 14, color: '#5d86ff' }}><span>{card.text}</span></Col></Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6}>
                        { card.modalContent.length > 0 ?
                            <div>
                                <p onClick={event => handleAnchorClick(event)} className="anchor">View Info</p>
                                <Modal isOpen={isOpen} toggle={toggle}>
                                    <Container>
                                        {
                                            card.modalContent.map(content => {
                                                return (
                                                    <Row>
                                                        <Col className={content.classname}>{content.text}</Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Container>
                                </Modal>
                            </div> : <div>&nbsp;</div>
                        }
                    </Col>
                    <Col xs={6} className="text-end">
                        {card.videoSrc ?
                            <div>
                                <p onClick={event => handleVideoClick(event)} className="anchor">View video</p>
                                <Modal isOpen={isVideoOpen} toggle={toggleVideo}>
                                    <div className="iframeContainer">
                                        <iframe className="responsive-iframe" title={card.videoTitle} src={card.videoSrc} frameBorder="0" data-allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                    </div>
                                    <div><a href="https://cebalearn.com/login/EMPAcademy/index.php?tid=1" target="_blank">See more in the EMP ACADEMY</a></div>
                                </Modal>
                            </div> : null
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default LoopCard;