import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Scaledodo from '../assets/img/plan-logo.png';
import Profile from '../assets/img/profile.png';

import { UserContext } from '../UserContext';
import { GuestApi } from '../utils/api';

export default function Header(props) {

    let history = useHistory();

    const { user, setUser} = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const { token } = user;
            await GuestApi.post("/logout", token);
        } catch (e) {
            const { response } = e;
            console.log(`😱 Axios request failed: ${response}`);
        }
        // in any case user data must be removed from client side
        localStorage.removeItem('user_data');
        setUser(null);
        history.push("/");
        window.location.reload();
    };

    return (
        <>
            <header className="fixed-top w-100">
                <Container fluid>
                    <Row noGutters>
                        <Col className="p-0">
                            <div className="d-flex justify-content-between">
                                <img src={Scaledodo} alt="Scaledodo" className="img-fluid" />
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item position-relative mr-4">
                                        <span className="icon-alarm-bell fs-18 align-bottom" />
                                        <Badge className="rounded-circle" variant="danger">3</Badge>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-link shadow-none text-decoration-none dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src={Profile} alt="Profile" className="img-fluid rounded-circle" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={handleLogout}
                                                >
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
