import React ,{ useContext } from 'react';
import  { Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Authlayout(props) {

    const { user } = useContext(UserContext);
    if(user == null) return <Redirect to='/' />;

    const { children } = props;

    return (
        <>
            <Header />
            <main>
                <Container fluid>
                    <Row noGutters>
                        <Col className="p-0">
                            <Sidebar />
                            { children }
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
