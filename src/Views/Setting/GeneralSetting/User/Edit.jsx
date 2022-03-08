import React, { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateUser';

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import FormDesign from './FormDesign';

export default function Edit(props) {

    const { id } = useParams();

    const [roles, setRoles] = useState([]);

    const getEditData = async () => {
        try {
            const getResponse = await AuthApi.get(`/user-get/${id}`);
            const { status, data } = getResponse;
            if( status === 200 && data.user !== undefined ){
                const { user } = data;
                for (let [key] of Object.entries(formInputObj)) {
                    if(key !== 'password') formInputObj[key] = user[key];
                }
                formInputObj.eid = true;
                setValues({ ...formInputObj });

                if(data.roles !== undefined) setRoles(data.roles);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            delete values.eid; // remove eid from values object
            const editResponse = await AuthApi.put(`/user-update/${id}`, values);
            const { status, data } = editResponse;
            if( status === 201 && data.user !== undefined ){
                toast.success(`User details edit successfully`);
                props.history.push("/user");
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
    );

    useEffect(() => {
        getEditData();
    }, []);

    return (
        <div className="body-sub">
            <Authlayout>
                <Col xs={12} md={8} lg={9} xl={10} className="page">
                    <PageHeader
                        title="User Edit"
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
