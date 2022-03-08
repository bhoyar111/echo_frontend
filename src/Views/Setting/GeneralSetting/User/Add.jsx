import React, { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateUser';

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import FormDesign from './FormDesign';

export default function Add(props) {

    const [roles, setRoles] = useState([]);

    const getRole = async () => {
        try {
            const listResponse = await AuthApi.get("/roles-ds");
            const { status, data } = listResponse;
            if( status === 200 && data.roles !== undefined ){
                setRoles(data.roles);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            const saveResponse = await AuthApi.post("/user-add", values);
            const { status, data } = saveResponse;
            if( status === 201 && data.user !== undefined ){
                toast.success(`User added successfully`);
                props.history.push('/user');
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
            // setErrors
            const { response } = e;
            if(response !== undefined && Object.keys(response.data).length && response.data.error !== undefined ){
                setErrors(response.data.error); // if error from server side
            }
        }
    }

    const formInputObj = {
        first_name  : "",
        middle_name : "",
        last_name   : "",
        email_id    : "",
        mobile_no   : "",
        // profile_img : "",
        password    : "",
        role_id     : ""
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    )

    useEffect(() => {
        getRole();
    }, [])

    return (
        <div className="body-sub">
            <Authlayout>
                <Col xs={12} md={8} lg={9} xl={10} className="page">
                    <PageHeader
                        title="User Add"
                        backlink="user"
                    />
                    <Card body className="main-content-wrapper">
                        <FormDesign
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}
                            errors={errors}
                            roles={roles}
                        />
                    </Card>
                </Col>
            </Authlayout>
        </div>
    )
}
