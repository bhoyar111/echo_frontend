import React, { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateState';
import FormDesign from './FormDesign';

export default function Add(props) {

    const [countries, setCountries] = useState([]);

    const getRelatedDS = async () => {
        try {
            const listResponse = await AuthApi.get("/state-ds");
            const { status, data } = listResponse;
            if( status === 200 ){
                if(data.countries !== undefined) setCountries(data.countries);

            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            const saveResponse = await AuthApi.post("/state-add", values);
            const { status, data } = saveResponse;
            if( status === 201 && data.state !== undefined ){
                toast.success(`State added successfully`);
                props.history.push('/state');
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
    )

    useEffect(() => {
        getRelatedDS();
    }, [])


    return (
        <div className="body-sub">
            <Authlayout>
                <Col xs={12} md={8} lg={9} xl={10} className="page">
                    <PageHeader
                        title="State Add"
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
