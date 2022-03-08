import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { UserContext } from '../../UserContext';

import useForm from '../../useForm';
import validate from '../../validate/validateLogin';

import { GuestApi } from '../../utils/api';
import { toast } from 'react-toastify';

export default function Form() {
    const { setUser } = useContext(UserContext);

    const submit = async () => {
        try {
            const response = await GuestApi.post(`/login`, values);
            const { status, data } = response;
            if( status === 200 && data.token !== undefined && Object.keys(data.token).length ){
                setUser(data);
                localStorage.setItem('user_data', `${JSON.stringify(data)}`);
                window.location.reload();
            }
        } catch (e) {
            const { response } = e;
            if( response !== undefined && Object.keys(response.data).length && response.data.error !== undefined ){
                setErrors(response.data.error); // if error from server side
            }else{
                toast.error(`😱 Axios request failed: ${e}`);
            }
        }
    }

    const formObj = { email_id: "", password: "" };
    const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
        submit,
        validate,
        formObj
    );

    return (
        <>
            <Col md={6} lg={5} xl={4} className="form-wrapper">
                <div className="form-wrapper-sub py-5 rounded">
                    <h1 className="ubuntu-medium dark-orange fs-28 mb-4">Login</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <TextField
                                id="username"
                                type="email"
                                label="Email"
                                variant="filled"
                                name="email_id"
                                value={values.email_id}
                                onChange={handleChange}
                            />
                            {errors.email_id && <small className="text-warning">{errors.email_id}</small>}
                        </div>
                        <div className="form-group">
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                variant="filled"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <small className="text-warning">{errors.password}</small>}
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label ubuntu-light fs-14" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <div>
                                <Link to="/forget-password" title="forget-password" className="fs-14 ubuntu-light text-white">Forgot Password ?</Link>
                            </div>
                        </div>
                        <Button type="submit" variant="contained" color="primary" className="orange-btn-mui text-white py-2 mb-4">Log In</Button>
                    </form>
                    {/* <p className="ubuntu-light fs-15 mb-0">Register your company to create an account</p>
                    <Link to="/sign-up" className="dark-orange fs-15 ubuntu-light">Create an Account</Link> */}
                </div>
            </Col>

        </>
    )
}
