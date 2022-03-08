import React, { useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateCountry';
import FormDesign from './FormDesign';

export default function Edit(props) {

    const { id } = useParams();

    const getEditData = async () => {
        try {
            const getResponse = await AuthApi.get(`/country-get/${id}`);
            const { status, data } = getResponse;
            if( status === 200 && data.country !== undefined ){
                const { country } = data;
                for (let [key] of Object.entries(formInputObj)) {
                    formInputObj[key] = country[key];
                }
                setValues({ ...formInputObj });
            }

        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            const editResponse = await AuthApi.put(`/country-update/${id}`, values);
            const { status, data } = editResponse;
            if( status === 201 && data.country !== undefined ){
                toast.success(`Country edit successfully`);
                props.history.push("/country");
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
        country_name   : "",
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
                        title="Country Edit"
                        backlink="country"
                    />
                    <Card body className="main-content-wrapper">
                        <FormDesign
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}
                            errors={errors}
                        />
                    </Card>
                </Col>
            </Authlayout>
        </div>
    )
}
