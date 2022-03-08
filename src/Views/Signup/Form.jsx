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
                    <h1 className="ubuntu-medium dark-orange fs-28 mb-2">Sign up</h1>
                    <p className="fs-14 ubuntu-light mb-4">Enter your details to sign up</p>
                    <form>
                        <div className="form-group">
                            <TextField id="username" type="text" label="Username" variant="filled" />
                        </div>
                        <div className="form-group">
                            <TextField id="createPassword" type="password" label="Create Password" variant="filled" />
                        </div>
                        <div className="form-group">
                            <TextField id="confirmPassword" type="password" label="Confirm Password" variant="filled" />
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label ubuntu-light fs-14" htmlFor="customCheck1">Yes, I understand and agree Terms of Service, including the User Agreement and Privacy Policy.</label>
                            </div>                                        
                        </div>
                        <Button href="/" type="submit" variant="contained" color="primary" className="orange-btn-mui py-2 mb-4 text-white">Sign Up</Button>                                    
                    </form>
                    <p className="ubuntu-light fs-15 mb-0">Already have an account? <Link to="/" className="dark-orange">Login</Link></p> 
                </div> 
            </Col>
                
        </>
    )
}
