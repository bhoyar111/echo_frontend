import React from 'react';
import { Link } from 'react-router-dom';

// import sidebar constant
import {
    CountryTab,
    StateTab,
    CityTab,
} from '../utils/sidebarConstant';

export default function SettingMenu(props) {

    const { currentUrl } = props;

    const adminSetting = [
        ...CountryTab, ...StateTab, ...CityTab
    ];

    return (
        <>
            <div id="SettingMenu">
                <p className="white fs-16 ubuntu-medium px-3 mb-2">Setting</p>
                <div className="list-group panel rounded-0">
                     {/* Admin Setting */}
                     <a href="#adminsetting" className={`list-group-item ubuntu-medium ${ adminSetting.includes(currentUrl) ? 'active' : ''}`} data-toggle="collapse" data-parent="#SettingMenu">Admin Setting</a>
                    <div className={`collapse ${ adminSetting.includes(currentUrl) ? 'show' : ''}`} id="adminsetting">
                        <Link to="/country" className={`list-group-item ${ CountryTab.includes(currentUrl) ? 'active' : ''}`}>Country</Link>
                        <Link to="/state" className={`list-group-item ${ StateTab.includes(currentUrl) ? 'active' : ''}`}>State</Link>
                        <Link to="/city" className={`list-group-item ${ CityTab.includes(currentUrl) ? 'active' : ''}`}>City</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
