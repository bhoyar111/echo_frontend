import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import Authlayout from '../../Container/Authlayout';
import { AuthApi } from '../../utils/api';
import CardImg from '../../assets/img/card-img.svg';

export default function Dashboard() {

    const [projectCount, setProjectCount] = useState([]);

    const getData = async () => {
        try {
            const listResponse = await AuthApi.get("/store-dashboard-data");
            const { status, data } = listResponse;
            if (status === 200) {
                if (data.projects !== undefined) setProjectCount(data.projects);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="body-sub">
                <Authlayout>
                    <Col xs={12} md={8} lg={9} xl={10} className="page">
                        <div className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="d-flex justify-content-between py-3">
                                <p className="mb-0 black fs-20 ubuntu-medium lh-40">Dashboard</p>                        
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                    <div className="card mb-3">
                                        <div className="card-body px-4">
                                            <p className="fs-16 grey mb-2">Total Projects</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="fs-20 black mb-0">{projectCount}</p>
                                                <img src={CardImg} alt="CardImg" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </Col>
                </Authlayout>
            </div>
        </>
    )
}
