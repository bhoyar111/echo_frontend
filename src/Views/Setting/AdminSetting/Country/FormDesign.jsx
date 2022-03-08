import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Col, Row, Form } from 'react-bootstrap';

export default function FormDesign(props) {

    const { handleSubmit, handleChange, values, errors } = props;

    return (
        <>
            <Form  onSubmit={handleSubmit} noValidate>
                <Row>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={3}>
                        <TextField
                            id="country"
                            label="Country"
                            variant="outlined"
                            size="small"
                            type="text"
                            name="country_name"
                            value={values.country_name}
                            onChange={handleChange}
                        />
                        {errors.country_name && <small className="text-danger">{errors.country_name}</small>}
                    </Form.Group>
                    <Col xs={12} className="mt-3">
                        <Button variant="contained" color="primary" className="orange-btn-mui text-white py-2 px-4 mb-4 mr-3">
                            Reset
                        </Button>
                        <Button type="submit" variant="contained" color="primary" className="black-btn-mui text-white py-2 px-4 mb-4">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
