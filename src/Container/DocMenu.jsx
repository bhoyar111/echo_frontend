import React from 'react';
import { Link } from 'react-router-dom';

// import sidebar constant
import {
    DocLibraryTab,
    DocTypeTab
} from '../utils/sidebarConstant';

const DocMaster = [
    ...DocTypeTab,
];

export default function DocMenu(props) {

    const { currentUrl } = props;

    return (
        <>
            <div id="DocMenu">
                <p className="white fs-16 ubuntu-medium px-3 mb-2">Document</p>
                <div className="list-group panel rounded-0">
                     {/* Document section */}
                    <Link to="/document-library" className={`list-group-item ${ DocLibraryTab.includes(currentUrl) ? 'active' : ''}`}>Document Library</Link>
                     {/* Document master section */}
                    <a href="#documentmaster" className={`list-group-item ubuntu-medium ${ DocMaster.includes(currentUrl) ? 'active' : ''}`} data-toggle="collapse" data-parent="#DocMenu">Document Master</a>
                    <div className={`collapse ${ DocMaster.includes(currentUrl) ? 'show' : ''}`} id="documentmaster">
                        <Link to="/document-type" className={`list-group-item ${ DocTypeTab.includes(currentUrl) ? 'active' : ''}`}>Document Type</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
