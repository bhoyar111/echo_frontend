import React from 'react';
import { Col } from 'react-bootstrap';
import eChoHealth from '../assets/img/plan-logo-1.png';

export default function Logo() {
    return (
        <>
            <Col className="mt-4 ml-md-5">
                <img src={eChoHealth} alt="eChoHealth" className="img-fluid" />
            </Col>    
        </>
    )
}