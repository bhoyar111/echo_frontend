import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../../Components/Logo';
import Form from './Form';

const Signup = () => {
    return (
        <>
            <section className="login-wrapper">
                <Container fluid>
                    <Row>
                        <Logo/>
                        <Form />
                    </Row>
                </Container>
            </section>    
        </>
    );
}

export default Signup;
