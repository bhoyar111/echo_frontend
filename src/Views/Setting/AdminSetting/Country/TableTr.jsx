import React from 'react';
import { Button } from '@material-ui/core';

import useConfirm from '../../../../utils/useConfirm';
import { getEncryptId } from '../../../../utils/secure';

export default function TableTr(props) {

    const { id, country_name } = props.country;

    const { sr, deleteData, currentPage, perPage } = props;

    const encId = getEncryptId(id);

    const editLink = `country-edit/${encId}`;

    const deleteSubmit = (closeDialog) => {
        deleteData(encId)
        closeDialog();
    }

    const { showDialog } = useConfirm(deleteSubmit, 'Country');

    const newSr = ((currentPage - 1) * perPage) + sr;

    return (
        <tr>
            <td className="text-center">{newSr}</td>
            <td>{country_name}</td>
            <td>
                <Button
                    href={`/#/${editLink}`}
                    variant="contained"
                    color="primary"
                    className="grey-btn-mui text-white mr-3"
                    >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="black-btn-mui text-white mr-3"
                    onClick={showDialog}
                    >
                    Delete
                </Button>
            </td>
        </tr>
    )
}
