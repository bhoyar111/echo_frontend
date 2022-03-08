import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { Col, Row, Form } from 'react-bootstrap';

export default function FormDesign(props) {

    const { handleSubmit, handleChange, values, errors, countries, states } = props;

    return (
        <>
            <Form  onSubmit={handleSubmit} noValidate>
                <Row>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={3}>
                        <TextField
                            id="Name"
                            label="City Name"
                            variant="outlined"
                            size="small"
                            type="text"
                            name="city_name"
                            value={values.city_name}
                            onChange={handleChange}
                        />
                        {errors.city_name && <small className="text-danger">{errors.city_name}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <FormControl variant="outlined" size="small">
                            <InputLabel id="label">Country Name</InputLabel>
                            <Select
                                labelId="Clabel"
                                id="Country"
                                label="Country"
                                type="number"
                                name="country_id"
                                value={values.country_id}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {countries && countries.map((country, i) =>
                                    <MenuItem key={i} value={country.id}>{country.country_name}</MenuItem>
                                )}
                            </Select>
                            {errors.country_id && <small className="text-danger">{errors.country_id}</small>}
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <FormControl variant="outlined" size="small">
                            <InputLabel id="label">State Name</InputLabel>
                            <Select
                                labelId="State"
                                id="Country"
                                label="Country"
                                type="number"
                                name="state_id"
                                value={values.state_id}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {states && states.map((state, i) =>
                                    <MenuItem key={i} value={state.id}>{state.state_name}</MenuItem>
                                )}
                            </Select>
                            {errors.state_id && <small className="text-danger">{errors.state_id}</small>}
                        </FormControl>
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
