import React from 'react';
import { useTable } from 'react-table';
import { TableProps } from './TableProps';
import './Table.css';

function Table(props: TableProps) {
    const columns = props.columns;
    const data = props.data;
    const loading = props.loading;
    const showActions = props.showAction;

    const tableInstance = useTable({
        columns,
        data
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        { showActions && 
                            <th className="actions">Actions</th>
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                            {showActions &&
                                <td>
                                    <button type="button" className="btn btn-outline-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                    <button type="button" className="btn btn-outline-danger" title="Delete"><i className="fa fa-trash"></i></button>
                                </td>
                            }
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Table