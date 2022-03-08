import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AdminMenu from './AdminMenu';
import SettingMenu from './SettingMenu';


// import sidebar constant
import {
    UserTab,
    CountryTab,
    StateTab,
    CityTab,
} from '../utils/sidebarConstant';

const Admin = [
    ...UserTab
];

const Setting = [
    ...CountryTab, ...StateTab, ...CityTab
];

export default function Sidebar() {

    let location = useLocation();

    const [currentUrl, setCurrentUrl] = useState(location.pathname);

    const getCurrentUrl = async () => {
        getUrlFirstString(currentUrl);
    }

    const getUrlFirstString = async (url) => {
        let slashLength = url.split("/").length - 1;

        if (slashLength === 1) {
            setCurrentUrl(url);
            return;
        }

        let newurl = url.substr(0, url.lastIndexOf("/"));
        await getUrlFirstString(newurl);
    }

    useEffect(() => {
        getCurrentUrl();
    }, []);

    return (
        <>
            <Col xs={12} md={4} lg={3} xl={2} className="sidebar">
                <Row>
                    <Col md={4} xl={3} className="tab-nav-wrapper p-0 position-relative">
                        <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className={`nav-link ${Admin.includes(currentUrl) ? 'active' : ''}`} id="v-pills-admin-tab" data-toggle="pill" href="#v-pills-admin" role="tab" aria-controls="v-pills-admin" aria-selected="false">
                                <span className="icon-consulting" />
                                <p className="mb-0 ubuntu-light">Admin</p>
                            </a>

                            <a className={`nav-link ${Setting.includes(currentUrl) ? 'active' : ''}`} id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                <span className="icon-gear" />
                                <p className="mb-0 ubuntu-light">Setting</p>
                            </a>

                        </div>
                    </Col>
                    <Col md={8} xl={9} className="p-0">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`tab-pane fade ${Admin.includes(currentUrl) ? 'show active' : ''}`}
                                id="v-pills-admin"
                                role="tabpanel"
                                aria-labelledby="v-pills-admin-tab"
                            >
                                <AdminMenu currentUrl={currentUrl} />
                            </div>
                            <div className={`tab-pane fade ${Setting.includes(currentUrl) ? 'show active' : ''}`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <SettingMenu currentUrl={currentUrl} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
