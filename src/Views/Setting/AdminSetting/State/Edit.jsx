import React, { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateState';
import FormDesign from './FormDesign';

export default function Edit(props) {

    const { id } = useParams();

    const [countries, setCountries] = useState([]);

    const getEditData = async () => {
        try {
            const getResponse = await AuthApi.get(`/state-get/${id}`);
            const { status, data } = getResponse;
            if( status === 200 && data.state !== undefined ){
                const { state } = data;
                for (let [key] of Object.entries(formInputObj)) {
                    formInputObj[key] = state[key];
                }
                setValues({ ...formInputObj });
                
                if(data.countries !== undefined) setCountries(data.countries);
            }

        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            const editResponse = await AuthApi.put(`/state-update/${id}`, values);
            const { status, data } = editResponse;
            if( status === 201 && data.state !== undefined ){
                toast.success(`State Edit Successfully`);
                props.history.push("/state");
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
        state_name : "",
        country_id : "",
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
                        title="State Edit"
                        backlink="state"
                    />
                    <Card body className="main-content-wrapper">
                        <FormDesign
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}
                            errors={errors}
                            countries={countries}
                        />
                    </Card>
                </Col>
            </Authlayout>
        </div>
    )
}
