import { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect';
import { SearchBar } from '@components/search-bar'
import { Table } from '@components/table'
import { StudentsContext } from '@contexts/students'
import { SortContext, SortObject } from '@contexts/sort'
import { Dropdown } from '@components/dropdown'
import { dropdownItems } from '@constants/sort-dropdown'
import { useStudentsTableData } from '@hooks/use-students-table-data'
import { List } from '@components/list'

import "./index.css"

export const StudentsView = () => {
    const students = useContext(StudentsContext)
    const sort = useContext(SortContext)
    const [searchText, setSearchText] = useState('')
    const tableData = useStudentsTableData({ nameFilter: searchText })

    const onDropdownChange = (value: SortObject) => {
        sort?.updateSortObject(value)
    }

    if (students) {
        return (
            <div className={`students-view ${(isMobile && 'students-view__mobile-view') || ''}`}>
                <h1 className='students-view__title'>Студенты</h1>
                <div className='students-view__search-panel'>
                    <SearchBar value={searchText} onChange={setSearchText} />
                    <Dropdown value={sort?.sortObject || null} onChange={onDropdownChange} items={dropdownItems}></Dropdown>
                </div>
                {
                    isMobile ?
                        <List data={tableData} onDelete={students.deleteStudent} /> :
                        <Table data={tableData} onDelete={students.deleteStudent} />
                }
            </div>
        )

    }
}