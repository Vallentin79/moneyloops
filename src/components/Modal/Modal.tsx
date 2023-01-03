import React, { ReactNode, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Modal.css';


export interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        <div onClick={props.toggle} className="modal-close"><i className="bi bi-x-lg"></i></div>                        
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
}