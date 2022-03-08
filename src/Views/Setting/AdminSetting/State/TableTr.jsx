import React from 'react';
import { Button } from '@material-ui/core';

import useConfirm from '../../../../utils/useConfirm';
import { getEncryptId } from '../../../../utils/secure';

export default function TableTr(props) {

    const { id, state_name, country } = props.state;

    const { sr, deleteData, currentPage, perPage } = props;

    const { country_name } = country || '';

    const encId = getEncryptId(id);

    const editLink = `state-edit/${encId}`;

    const deleteSubmit = (closeDialog) => {
        deleteData(encId)
        closeDialog();
    }

    const { showDialog } = useConfirm(deleteSubmit, 'State');

    const newSr = ((currentPage - 1) * perPage) + sr;

    return (
        <tr>
            <td className="text-center">{newSr}</td>
            <td>{country_name}</td>
            <td>{state_name}</td>
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
