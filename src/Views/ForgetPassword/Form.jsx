import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default function Form() {
    return (
        <>
            <Col md={6} lg={5} xl={4} className="form-wrapper">
                <div className="form-wrapper-sub py-5 rounded">
                    <h1 className="ubuntu-medium dark-orange fs-28 mb-4">Forgot Your Password</h1>
                    <p className="fs-14 ubuntu-light mb-3">Please enter your email address and we'll send you a link to reset your password.</p>
                    <form>
                        <div className="form-group">
                            <TextField id="enterUsername" type="text" label="Enter Username" variant="filled" />
                        </div>
                        <Button type="submit" variant="contained" color="primary" className="orange-btn-mui py-2 mb-5">Send</Button>                                    
                    </form>
                    <p className="ubuntu-light fs-15 mb-0">Back to <Link to="/" className="dark-orange">Login</Link></p> 
                </div> 
            </Col>
                
        </>
    )
}
