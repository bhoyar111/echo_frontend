import React,{ useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import Pagination from "react-js-pagination";

import Authlayout from '../../../../Container/Authlayout';
import PageHeader from '../../../../Container/PageHeader';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';

import TableTr from './TableTr';

export default function List() {

    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(1);

    const [states, setStates] = useState([]);

    const getListing = async (pgNO) => {
        try {
            const listResponse = await AuthApi.get(`/states?pageNo=${pgNO}`);
            const { status, data } = listResponse;
            if( status === 200 && data.states !== undefined ){
                setStates(data.states);
                const { pageData:{per_page, total_record} } = data || {};
                setPerPage(per_page);
                setTotalRecords(total_record);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const deleteData = async (id) => {
        try {
            const deleteResponse = await AuthApi.delete(`/state-delete/${id}`);
            const { status, data } = deleteResponse;
            if( status === 200 && data.state !== undefined ){
                toast.success(`State deleted successfully`);
                getListing(currentPage);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const getClickedPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
        getListing(pageNumber);
    }

    useEffect(() => {
        getListing(currentPage)
    }, []);

    return (
        <>
            <div className="body-sub">
                <Authlayout>
                    <Col xs={12} md={8} lg={9} xl={10} className="page">
                        <PageHeader
                            title="State List"
                            addlink="state-add"
                        />
                        <Card body className="table-wrapper mb-5">
                            <div className="table-responsive">
                                <table className="table bg-white white-table library-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-center">Sr. No</th>
                                            <th scope="col">Country Name</th>
                                            <th scope="col">State Name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        states && states.map((state, i) => (
                                            <TableTr
                                                sr={i+1}
                                                key={i}
                                                state={state}
                                                deleteData={deleteData}
                                                currentPage={currentPage}
                                                perPage={perPage}
                                            />
                                        ))
                                    }
                                    </tbody>
                                </table>
                                <div className="d-flex flex-row py-4 justify-content-center">
                                    <Pagination
                                        activePage={currentPage}
                                        prevPageText='prev'
                                        nextPageText='next'
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        pageRangeDisplayed={5}
                                        itemsCountPerPage={perPage}
                                        totalItemsCount={totalRecords}
                                        onChange={getClickedPageNo}
                                    />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Authlayout>
            </div>
        </>
    )
}
