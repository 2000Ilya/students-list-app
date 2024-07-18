import { Column, columns } from '@constants/table'
import { Student } from '@api/students/contracts'

import "./index.css"

interface TableCellProps<T> {
    item: T
    column: Column<T>
}

export const TableCell = <T,>({ item, column }: TableCellProps<T>): JSX.Element => {
    const value = item[column.key as keyof T];
    return (
        <td>{column.render ? column.render(item) : `${value}`}</td>
    );
}

interface TableRowProps<T> {
    rowData: T
    columns: Column<T>[]
}

export const TableRow = <T,>({ rowData, columns }: TableRowProps<T>): JSX.Element => {
    return (
        <tr>
            {columns.map((column) => (
                <TableCell
                    key={column.key as string}
                    item={rowData}
                    column={column}
                />
            ))}
        </tr>
    );
}

type TableProps = {
    data: Student[]
    onDelete: (id: number) => void
};

export const Table = ({ data, onDelete }: TableProps) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th style={column?.style} key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((rowData) => (
                    <TableRow key={rowData.id} columns={columns} rowData={{ ...rowData, onDelete: () => onDelete(rowData.id) }} />
                ))}
            </tbody>
        </table>
    );
};