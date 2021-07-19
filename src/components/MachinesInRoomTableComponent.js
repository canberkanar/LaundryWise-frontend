import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function MachinesInRoomTableComponent(props) {
    const columns = [
        { field: 'id', headerName: 'Machine # In Room', width: 200 },
        { field: 'firstName', headerName: 'Price', width: 200},
        { field: 'lastName', headerName: 'Enable', width: 200 },
        {
            field: 'age',
            headerName: 'Add & Remove',
            type: 'number',
            width: 300,
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}

export default MachinesInRoomTableComponent;