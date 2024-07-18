import { useContext, useEffect, useMemo } from "react"
import { studentsApi } from "@api/students/studentsApi"
import { StudentsContext } from "@contexts/students"
import { SortContext } from "@contexts/sort"
import { Student } from "@api/students/contracts"

type useStudentsTableDataProps = {
    nameFilter: string
}

export const useStudentsTableData = ({ nameFilter }: useStudentsTableDataProps) => {
    const students = useContext(StudentsContext)
    const sort = useContext(SortContext)

    useEffect(() => {
        const response = studentsApi.getStudents()
        response.then(data => students?.updateStudents(data || []))
    }, [])

    const tableData = useMemo(() => {
        const filteredStudents = students?.students?.filter(student => student.name.toLowerCase().includes(nameFilter.toLowerCase())) || []
        const sortObject = sort?.sortObject

        filteredStudents.sort(function (student1, student2) {
            if (sortObject) {
                const prop1 = student1[sortObject.key as keyof Student]
                const prop2 = student2[sortObject.key as keyof Student]
                const compareValue1 = sortObject.variant === 'asc' ? prop1 : prop2
                const compareValue2 = sortObject.variant === 'asc' ? prop2 : prop1
                if (typeof compareValue1 === 'number') {
                    return compareValue1 - (compareValue2 as number)
                } else {
                    return String(compareValue1).localeCompare(String(compareValue2))
                }
            }
            return 0
        })

        return filteredStudents
    }, [students?.students, sort?.sortObject, nameFilter])

    return tableData
}