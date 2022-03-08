import React from 'react';
import { Link } from 'react-router-dom';

// import sidebar constant
import {
    UserTab
} from '../utils/sidebarConstant';

export default function AdminMenu(props) {

    const { currentUrl } = props;

    return (
        <>
            <div id="AdminMenu">
                <p className="white fs-16 ubuntu-medium px-3 mb-2">Admin</p>
                <div className="list-group panel rounded-0">
                    <div className="list-group panel rounded-0">
                        <Link to="/user" className={`list-group-item ${ UserTab.includes(currentUrl) ? 'active' : ''}`}>User</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
