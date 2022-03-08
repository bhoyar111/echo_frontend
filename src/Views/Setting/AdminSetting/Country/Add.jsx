import React from 'react';
import { Col, Card } from 'react-bootstrap';

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateCountry';
import FormDesign from './FormDesign';

export default function Add(props) {

    const submit = async () => {
        try {
            const saveResponse = await AuthApi.post("/country-add", values);
            const { status, data } = saveResponse;
            if( status === 201 && data.country !== undefined ){
                toast.success(`Country added successfully`);
                props.history.push('/country');
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
        country_name : "",
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    )

    return (
        <div className="body-sub">
            <Authlayout>
                <Col xs={12} md={8} lg={9} xl={10} className="page">
                    <PageHeader
                        title="Country Add"
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
